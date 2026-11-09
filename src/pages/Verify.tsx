import { useState } from 'react'
import { Search, ShieldCheck, Award, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '../store/useAppStore'

export default function Verify(){
  const { verifyId, setVerifyId, setToast } = useAppStore()
  const [result, setResult] = useState<null|{name:string, course:string, band:string, date:string}>(null)
  const handleVerify=()=>{
    if(!verifyId.trim()){ setToast("Please enter a certificate ID"); return }
    if(verifyId.toUpperCase().includes("SAGE") || verifyId.length>6){
      setResult({ name: verifyId.toUpperCase().includes("SAGE")? "Tasnim Ahmed" : "Verified Student", course: "IELTS Full Preparation", band: "7.5", date: "12 March 2026" })
    } else { setResult(null); setToast("Certificate not found — check ID and try again") }
  }
  return (
    <div className="bg-[#FDF8F0] pt-24 pb-10 min-h-[80vh]">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <div className="bg-[#12372A] rounded-[28px] p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white/5 blur-2xl"/>
          <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:`radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize:'22px 22px'}}/>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-[11px] font-black tracking-widest"><ShieldCheck size={12}/> CERTIFICATE VERIFICATION</div>
            <h1 className="serif font-black text-[30px] md:text-[44px] leading-none mt-4">Verify any SAGE<br/><span className="text-[#C9A86A]">certificate in seconds.</span></h1>
            <p className="text-white/60 text-sm mt-3 max-w-xl">Employers & universities can instantly validate authenticity via QR or ID. Blockchain-anchored, tamper-proof, lifetime valid.</p>
            <div className="mt-8 bg-white rounded-2xl p-2 flex gap-2">
              <div className="flex-1 relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"/><input value={verifyId} onChange={e=>setVerifyId(e.target.value)} placeholder="Enter Certificate ID e.g. SAGE-2026-0842" className="w-full pl-9 pr-3 py-3 rounded-xl bg-[#FDF8F0] border border-black/5 text-sm font-semibold text-[#12372A] placeholder:text-black/30 outline-none" /></div>
              <button onClick={handleVerify} className="bg-[#D97342] hover:bg-[#c45f2e] text-white px-7 rounded-xl font-black text-sm">Verify</button>
            </div>
            <div className="mt-2 text-xs text-white/50">Try: SAGE-2026-0842 or SAGE-2025-1109</div>

            <AnimatePresence>
              {result && (
                <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}} className="mt-6 bg-white rounded-2xl p-6 text-[#12372A]">
                  <div className="flex items-center gap-2 text-emerald-600 font-black text-xs tracking-widest"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/> VERIFIED • AUTHENTIC • BLOCKCHAIN ANCHORED</div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div><div className="text-[11px] font-black tracking-widest text-black/40">STUDENT</div><div className="font-bold text-base">{result.name}</div></div>
                    <div><div className="text-[11px] font-black tracking-widest text-black/40">BAND / STATUS</div><div className="font-black text-emerald-700 text-base">{result.band}</div></div>
                    <div><div className="text-[11px] font-black tracking-widest text-black/40">COURSE</div><div className="font-semibold">{result.course}</div></div>
                    <div><div className="text-[11px] font-black tracking-widest text-black/40">ISSUED</div><div className="font-semibold">{result.date}</div></div>
                    <div className="col-span-2 mt-2 bg-[#FDF8F0] border border-black/5 rounded-xl p-3 flex items-center gap-3"><Award size={18} className="text-[#C9A86A]"/><div className="text-xs"><span className="font-black">ID:</span> {verifyId.toUpperCase()} • <span className="font-black">Centre:</span> Dhaka — Online & Offline • <span className="font-black">QR:</span> Valid</div></div>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <button onClick={()=>setToast("Certificate PDF downloaded")} className="flex-1 bg-[#12372A] text-white py-3 rounded-full font-bold text-sm">Download PDF</button>
                    <button onClick={()=>setResult(null)} className="px-6 py-3 rounded-full border border-black/10 font-bold text-sm">Clear</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!result && (
              <div className="mt-6 grid md:grid-cols-2 gap-3">
                <div className="border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur flex gap-3">
                  <div className="w-12 h-16 rounded-lg bg-white grid place-items-center shrink-0"><div className="w-8 h-8 rounded-full bg-[#12372A] grid place-items-center text-white"><Award size={14}/></div></div>
                  <div className="text-sm"><div className="font-bold">QR Scan also works</div><div className="text-white/60 text-xs leading-4">Every certificate has a holographic QR. Scan with any camera to verify.</div></div>
                </div>
                <div className="border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur">
                  <div className="font-bold text-sm flex items-center gap-2"><Check size={14} className="text-emerald-400"/> What verifiers see</div>
                  <div className="text-xs text-white/60 mt-1">Student name, course, band, issue date, centre, and tamper status. No login required.</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-[24px] border border-black/5 p-6">
          <h3 className="font-black text-[#12372A]">Need help?</h3><p className="text-sm text-black/60 mt-1">Contact us on WhatsApp or email with the certificate ID — we’ll verify within minutes.</p>
          <div className="mt-4 flex gap-2"><a href="https://wa.me/8801790476222" target="_blank" className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-sm">WhatsApp</a><a href="mailto:sageeducationcentersec@gmail.com" className="bg-[#12372A] text-white px-5 py-2.5 rounded-full font-bold text-sm">Email</a></div>
        </div>
      </div>
    </div>
  )
}
