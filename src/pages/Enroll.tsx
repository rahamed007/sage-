import { useState } from 'react'
import { coursesData } from './Courses'
import { useAppStore } from '../store/useAppStore'
import { GraduationCap, Check, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Enroll(){
  const { selectedCourse, setSelectedCourse, targetBand, setTargetBand, mode, setMode, paymentMethod, setPaymentMethod, setToast } = useAppStore()
  const [step, setStep] = useState(1)
  const c = coursesData[selectedCourse]
  const [form, setForm] = useState({name:'', phone:'', email:''})
  return (
    <div className="bg-[#FDF8F0] pt-24 pb-10 min-h-[85vh]">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[28px] shadow-[0_24px_60px_rgba(18,55,42,0.12)] border border-black/5 overflow-hidden">
          <div className="bg-[#12372A] px-6 py-5 flex items-center justify-between text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"/>
            <div className="relative flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-white/15 grid place-items-center"><GraduationCap size={16}/></div><div><div className="font-black leading-none">Enrollment & Payment</div><div className="text-xs text-white/60">Secure • bKash / Nagad / Card • Instalments</div></div></div>
            <span className="relative bg-white text-[#12372A] px-3 py-1 rounded-full font-black text-xs">{step}/3</span>
          </div>

          <div className="px-6 pt-6">
            <div className="flex items-center gap-2">
              {[1,2,3].map(n=> (
                <div key={n} className="flex items-center gap-2 flex-1"><div className={`w-8 h-8 rounded-full grid place-items-center text-xs font-black border-2 ${step>=n ? 'bg-[#12372A] text-white border-[#12372A]' : 'bg-white text-black/30 border-black/10'}`}>{n}</div><span className={`text-xs font-black tracking-widest hidden sm:block ${step>=n? 'text-[#12372A]':'text-black/30'}`}>{["Course","Details","Payment"][n-1]}</span>{n<3 && <div className={`flex-1 h-1 rounded-full mx-2 ${step>n? 'bg-[#12372A]':'bg-black/10'}`}/>}</div>
              ))}
            </div>
          </div>

          <div className="p-6">
            {step===1 && (
              <div>
                <h3 className="serif font-black text-xl text-[#12372A]">Choose your course</h3>
                <div className="mt-4 grid md:grid-cols-2 gap-3">
                  {coursesData.map((course,i)=> (
                    <button key={course.id} onClick={()=>setSelectedCourse(i as any)} className={`text-left p-4 rounded-2xl border-2 flex gap-3 transition ${selectedCourse===i? 'bg-white border-[#12372A] shadow-lg':'bg-white/60 border-black/5 hover:border-black/15'}`}>
                      <div className={`w-1 rounded-full shrink-0 ${selectedCourse===i? 'bg-[#12372A]':'bg-black/10'}`}/>
                      <div className="flex-1"><div className="font-black text-sm text-[#12372A]">{course.title}</div><div className="text-xs font-bold text-[#D97342]">{course.subtitle}</div><div className="text-xs text-black/50 mt-1">{course.duration}</div><div className="mt-2 flex items-baseline gap-2"><span className="font-black text-[#12372A]">{course.price}</span><span className="text-xs line-through text-black/30">{course.original}</span></div></div>
                      <div className={`w-6 h-6 rounded-full border-2 grid place-items-center shrink-0 mt-1 ${selectedCourse===i? 'bg-[#12372A] border-[#12372A] text-white':'border-black/15'}`}>{selectedCourse===i && <Check size={12} strokeWidth={3}/>}</div>
                    </button>
                  ))}
                </div>
                <button onClick={()=>setStep(2)} className="mt-6 w-full bg-[#12372A] hover:bg-black text-white py-4 rounded-full font-black flex items-center justify-center gap-2">Continue <ArrowRight size={16}/></button>
              </div>
            )}
            {step===2 && (
              <div>
                <h3 className="serif font-black text-xl text-[#12372A]">Your details</h3>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <label className="space-y-1.5"><span className="text-xs font-black tracking-widest text-black/60">FULL NAME</span><input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="e.g. Tasnim Ahmed" className="w-full px-4 py-3 rounded-xl bg-[#FDF8F0] border border-black/10 text-sm font-semibold outline-none focus:border-[#12372A]"/></label>
                  <label className="space-y-1.5"><span className="text-xs font-black tracking-widest text-black/60">PHONE (bKash)</span><input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="+880 1XXX-XXXXXX" className="w-full px-4 py-3 rounded-xl bg-[#FDF8F0] border border-black/10 text-sm font-semibold outline-none focus:border-[#12372A]"/></label>
                  <label className="space-y-1.5"><span className="text-xs font-black tracking-widest text-black/60">EMAIL</span><input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl bg-[#FDF8F0] border border-black/10 text-sm font-semibold outline-none focus:border-[#12372A]"/></label>
                  <label className="space-y-1.5"><span className="text-xs font-black tracking-widest text-black/60">TARGET BAND</span><select value={targetBand} onChange={e=>setTargetBand(parseFloat(e.target.value))} className="w-full px-4 py-3 rounded-xl bg-[#FDF8F0] border border-black/10 text-sm font-semibold outline-none"><option value={6}>Band 6.0</option><option value={6.5}>Band 6.5</option><option value={7}>Band 7.0</option><option value={7.5}>Band 7.5</option><option value={8}>Band 8.0+</option></select></label>
                  <label className="md:col-span-2 space-y-1.5"><span className="text-xs font-black tracking-widest text-black/60">MODE</span><div className="grid grid-cols-3 gap-2">{(['offline','online','hybrid'] as const).map(m=> <button key={m} onClick={()=>setMode(m)} className={`py-3 rounded-xl border font-bold capitalize text-sm ${mode===m? 'bg-[#12372A] text-white border-[#12372A]':'bg-white border-black/10'}`}>{m}</button>)}</div></label>
                </div>
                <div className="mt-6 flex gap-3"><button onClick={()=>setStep(1)} className="flex-1 bg-white border border-black/10 py-4 rounded-full font-black">Back</button><button onClick={()=>{ if(!form.name || !form.phone) return setToast("Please fill name and phone"); setStep(3)}} className="flex-[1.6] bg-[#D97342] hover:bg-[#c45f2e] text-white py-4 rounded-full font-black flex items-center justify-center gap-2">Continue to Payment <CreditCard size={16}/></button></div>
              </div>
            )}
            {step===3 && (
              <div>
                <div className="bg-white rounded-2xl border border-black/5 p-4 flex items-center justify-between">
                  <div><div className="font-black text-[#12372A]">{c.title}</div><div className="text-xs font-bold text-black/50">{mode} • Target {targetBand} • {form.name || 'Student'}</div></div>
                  <div className="text-right"><div className="serif font-black text-xl text-[#12372A]">{c.price}</div><div className="text-xs text-black/40">One-time or 3 instalments</div></div>
                </div>
                <div className="mt-6">
                  <div className="text-xs font-black tracking-widest text-black/60 mb-3">PAY WITH</div>
                  <div className="grid grid-cols-3 gap-2">{[{id:'bkash', label:'bKash', color:'#E2136E'},{id:'nagad', label:'Nagad', color:'#F6921E'},{id:'card', label:'Card', color:'#12372A'}].map(p=> <button key={p.id} onClick={()=>setPaymentMethod(p.id as any)} className={`py-4 rounded-2xl border-2 font-black text-sm flex flex-col items-center gap-1 ${paymentMethod===p.id? 'bg-white border-[#12372A] shadow-md':'bg-white border-black/5'}`}><span className="w-8 h-8 rounded-full grid place-items-center text-white text-[10px] font-black" style={{background:p.color}}>{p.label[0]}</span>{p.label}</button>)}</div>
                  <div className="mt-4 bg-[#12372A] rounded-2xl p-4 text-white flex gap-3"><ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5"/><div className="text-sm"><div className="font-bold">100% Secure • SSL Commerz</div><div className="text-white/60 text-xs">Your payment is protected. Instant confirmation via SMS & email. Instalments — pay 30% now.</div></div></div>
                  <button onClick={()=>{ setToast(`Payment initiated via ${paymentMethod} for ${c.title} — check your phone for confirmation`); setStep(1)}} className="mt-6 w-full bg-[#12372A] hover:bg-black text-white py-4 rounded-full font-black flex items-center justify-center gap-2 text-[15px]">Pay {c.price} with {paymentMethod==='bkash'? 'bKash': paymentMethod==='nagad'? 'Nagad':'Card'} <ArrowRight size={16}/></button>
                  <button onClick={()=>setStep(2)} className="mt-3 w-full bg-white border border-black/10 py-3 rounded-full font-bold text-sm">Back to details</button>
                  <div className="mt-3 text-center text-xs font-semibold text-black/40">By paying you agree to SAGE Terms • Refund within 3 days • <Link to="/contact" className="underline">Need help?</Link></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2 text-xs font-bold text-black/40"><span className="bg-white border border-black/5 px-3 py-1.5 rounded-full">Need assistance? WhatsApp +880 1790-476222</span><span className="hidden sm:inline bg-white border border-black/5 px-3 py-1.5 rounded-full">Instalments available</span></div>
      </div>
    </div>
  )
}
