import { useAppStore } from '../store/useAppStore'
import { Link } from 'react-router-dom'
import { Zap, Target, Calendar, Check, Sparkles, Video, MapPin, Layers, ArrowRight } from 'lucide-react'
import { coursesData } from './Courses'
import { motion } from 'framer-motion'

export default function Assessment(){
  const { targetBand, currentBand, mode, setTargetBand, setCurrentBand, setMode } = useAppStore()
  const gap = targetBand - currentBand
  const weeks = Math.max(4, Math.round(gap*8))
  let rec = coursesData[2]
  if(gap <=1) rec = coursesData[1]
  else if(gap <=1.5 && mode==='offline') rec = coursesData[0]
  else if(gap>2) rec = coursesData[3]

  return (
    <div className="bg-white pt-24 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#12372A] text-white px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest"><Zap size={12}/> TARGET BAND CALCULATOR</div>
          <h1 className="serif font-black text-[32px] md:text-[48px] leading-none text-[#12372A] mt-4">Interactive <span className="text-[#D97342]">3D Assessment.</span></h1>
          <p className="text-sm text-black/50 mt-3 font-medium">Drag the 3D sliders — watch your recommendation and mock schedule update in real time. Built for Bangladeshi study-abroad aspirants.</p>
        </div>

        <div className="mt-8 bg-[#12372A] rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(18,55,42,0.25)] grid lg:grid-cols-[1.1fr_0.9fr] relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#D97342]/20 blur-3xl"/>
          <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:`radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize:'22px 22px'}}/>

          <div className="relative p-6 md:p-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 text-white px-3 py-1.5 rounded-full text-[11px] font-black tracking-widest"><Sparkles size={12}/> PERSONAL ROADMAP</div>
            <h3 className="serif font-black text-[28px] leading-none text-white mt-4">Find your <span className="text-[#C9A86A]">perfect</span> course in 30 seconds.</h3>
            <p className="text-white/60 text-sm mt-3 font-medium">Slide to your current level and ambition — we’ll architect your plan.</p>

            <div className="mt-8 space-y-7">
              <div>
                <div className="flex justify-between text-xs font-black tracking-widest text-white/70"><span>CURRENT BAND</span><span className="text-white bg-white/15 px-2.5 py-1 rounded-full">{currentBand.toFixed(1)}</span></div>
                <div className="mt-3 bg-white/10 rounded-full p-1.5 backdrop-blur border border-white/10">
                  <input type="range" min={4} max={8} step={0.5} value={currentBand} onChange={e=>setCurrentBand(parseFloat(e.target.value))} className="w-full accent-[#D97342]" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-white/40 mt-1"><span>4.0 Beginner</span><span>8.0 Advanced</span></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-black tracking-widest text-white/70"><span>TARGET BAND</span><span className="text-[#12372A] bg-[#C9A86A] px-2.5 py-1 rounded-full">{targetBand.toFixed(1)}</span></div>
                <div className="mt-3 bg-white/10 rounded-full p-1.5 backdrop-blur border border-white/10">
                  <input type="range" min={5} max={9} step={0.5} value={targetBand} onChange={e=>setTargetBand(parseFloat(e.target.value))} className="w-full accent-[#C9A86A]" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-white/40 mt-1"><span>5.0</span><span>9.0 Expert</span></div>
              </div>
              <div>
                <div className="text-xs font-black tracking-widest text-white/70 mb-3">PREFERRED MODE</div>
                <div className="grid grid-cols-3 gap-2">
                  {(['online','offline','hybrid'] as const).map(m=> (
                    <button key={m} onClick={()=>setMode(m)} className={`py-3 rounded-2xl border font-bold text-sm capitalize transition ${mode===m ? 'bg-white text-[#12372A] border-white shadow-lg' : 'bg-white/10 text-white border-white/15 hover:bg-white/15'}`}>
                      {m==='online' && <Video size={14} className="inline mr-1.5 -mt-0.5"/>}{m==='offline' && <MapPin size={14} className="inline mr-1.5 -mt-0.5"/>}{m==='hybrid' && <Layers size={14} className="inline mr-1.5 -mt-0.5"/>}{m}
                    </button>
                  ))}
                </div>
              </div>
              <motion.div layout className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D97342] grid place-items-center text-white"><Target size={16}/></div>
                <div><div className="text-white font-bold text-sm">Gap: {gap.toFixed(1)} bands • Estimated: {weeks} weeks</div><div className="text-white/60 text-xs">Weekly mocks & personal feedback will close this.</div></div>
              </motion.div>
            </div>
          </div>

          <div className="relative bg-[#FDF8F0] m-2 md:m-3 rounded-[24px] p-6 md:p-8 flex flex-col">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full text-[11px] font-black tracking-widest self-start"><Sparkles size={12}/> RECOMMENDED FOR YOU</div>
            <motion.div key={rec.id} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="mt-4">
              <h4 className="serif font-black text-2xl text-[#12372A] leading-none">{rec.title}</h4>
              <p className="text-sm font-bold text-[#D97342]">{rec.subtitle}</p>
              <div className="mt-4 bg-white rounded-2xl border border-black/5 p-4">
                <div className="text-xs font-black tracking-widest text-black/40">WHY THIS FITS YOU</div>
                <ul className="mt-3 space-y-2">{rec.features.slice(0,3).map(f=> <li key={f} className="flex gap-2.5 text-sm font-medium text-black/70"><Check size={16} className="text-emerald-600 mt-0.5 shrink-0"/>{f}</li>)}</ul>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#FDF8F0] rounded-xl py-2.5 border border-black/5"><div className="font-black text-[#12372A]">{rec.price}</div><div className="text-[10px] font-bold text-black/40">Fee</div></div>
                  <div className="bg-[#FDF8F0] rounded-xl py-2.5 border border-black/5"><div className="font-black text-[#12372A]">{mode}</div><div className="text-[10px] font-bold text-black/40">Mode</div></div>
                  <div className="bg-[#12372A] rounded-xl py-2.5 text-white"><div className="font-black">{targetBand.toFixed(1)}</div><div className="text-[10px] font-bold text-white/60">Target</div></div>
                </div>
              </div>
              <div className="mt-4 bg-[#12372A] rounded-2xl p-4 text-white">
                <div className="text-xs font-black tracking-widest text-white/60 flex items-center gap-2"><Calendar size={12}/> YOUR MOCK SCHEDULE</div>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between bg-white/10 rounded-xl px-3 py-2.5"><span>Diagnostic Test</span><span className="font-bold text-[#C9A86A]">Week 1 • Free</span></div>
                  <div className="flex justify-between bg-white/10 rounded-xl px-3 py-2.5"><span>Weekly Full Mock</span><span className="font-bold">Every Saturday</span></div>
                  <div className="flex justify-between bg-[#D97342] rounded-xl px-3 py-2.5 font-bold"><span>Final Prediction</span><span>Week {weeks}</span></div>
                </div>
              </div>
              <Link to="/enroll" onClick={()=>useAppStore.getState().setSelectedCourse(rec.id as any)} className="mt-4 w-full bg-[#D97342] hover:bg-[#c65f2e] text-white py-4 rounded-full font-black flex items-center justify-center gap-2 shadow-lg">Claim My Seat — {rec.price} <ArrowRight size={16}/></Link>
              <div className="mt-3 text-center text-[11px] font-semibold text-black/40">No payment now • Free counseling • Instalments</div>
            </motion.div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {["Diagnostic","Personal Plan","Mocks & Feedback"].map((t,i)=> (
            <div key={t} className="bg-[#FDF8F0] border border-black/5 rounded-2xl p-5">
              <div className="w-8 h-8 rounded-full bg-[#12372A] text-white grid place-items-center font-black text-xs">{i+1}</div>
              <div className="font-black text-[#12372A] mt-3">{t}</div>
              <div className="text-xs text-black/50 mt-1 leading-5">{["15-min AI + human review of all 4 modules.","Mentor builds your 12-week sprint with weekly goals.","Real-pressure mocks + detailed band prediction."][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
