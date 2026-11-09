import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Award, Users, ShieldCheck, Crown, Clock, Star, Check, Timer, Video, Target, Layers, ArrowUpRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Owl3D from '../components/Owl3D'
import { useAppStore } from '../store/useAppStore'

const courses = [
  { id:0, title:"IELTS Full Preparation", subtitle:"Complete 360° Mastery", duration:"12 Weeks • 48 Sessions", price:"৳12,500", original:"৳18,000", band:"Band 7.5+ Target", badge:"MOST POPULAR", accent:"#12372A", students:"2.4k", rating:4.9, features:["All 4 Modules","Weekly Mocks","Band 9 Feedback","Unlimited Doubt Sessions"] },
  { id:1, title:"Spoken English Flourish", subtitle:"Speak with Confidence", duration:"8 Weeks • 32 Sessions", price:"৳8,500", original:"৳11,000", band:"Fluency in 60 Days", badge:"BEGINNER FRIENDLY", accent:"#D97342", students:"1.8k", rating:4.8, features:["Daily Speaking Labs","Accent Training","Corporate Comm","Conversation Club"] },
  { id:2, title:"Private One-on-One", subtitle:"Personal Mentor Model", duration:"Flexible • Per Session", price:"৳1,200", original:"per class", band:"Fully Personalized", badge:"LIMITED SLOTS", accent:"#1A5D1A", students:"420", rating:5.0, features:["1:1 Dedicated Mentor","Custom Study Plan","Flexible Schedule","Instant Feedback"] },
  { id:3, title:"Private Full Course", subtitle:"One-on-One Intensive", duration:"16 Weeks • 64 Sessions", price:"৳28,500", original:"৳36,000", band:"Band 8.0 Intensive", badge:"ELITE TRACK", accent:"#8B4513", students:"180", rating:4.9, features:["Band 8+ Guarantee*","Daily 1:1 Practice","British Council Material","Visa & SOP Guidance"] },
]

export default function Home(){
  const [active, setActive] = useState(0)
  const [mouse, setMouse] = useState({x:0,y:0})
  const mouseX = useMotionValue(0), mouseY = useMotionValue(0)
  const sx = useSpring(mouseX, {stiffness:80, damping:20})
  const sy = useSpring(mouseY, {stiffness:80, damping:20})
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0,0.2], [0,-80])
  const heroOpacity = useTransform(scrollYProgress, [0,0.15], [1,0])
  const store = useAppStore()

  useEffect(()=>{
    const h=(e:MouseEvent)=>{
      const x=(e.clientX/window.innerWidth-0.5)*2
      const y=(e.clientY/window.innerHeight-0.5)*2
      mouseX.set(x); mouseY.set(y); setMouse({x,y})
    }
    window.addEventListener('mousemove', h)
    return ()=> window.removeEventListener('mousemove', h)
  },[])

  return (
    <div className="bg-[#FDF8F0]">
      {/* HERO */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#FDF8F0]">
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:`radial-gradient(circle at 1px 1px, #12372A 1px, transparent 0)`, backgroundSize:'32px 32px'}}/>
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#C9A86A]/15 blur-[80px]"/>
          <div className="absolute top-20 -left-40 w-[600px] h-[600px] rounded-full bg-[#12372A]/5 blur-[90px]"/>
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6">
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white border border-[#12372A]/10 rounded-full pl-1.5 pr-4 py-1.5 shadow-sm">
              <span className="bg-[#12372A] text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> NEW INTAKE</span>
              <span className="text-xs md:text-[13px] font-semibold text-[#1A1A1A]/80">September 2026 • Limited Seats <span className="text-[#D97342] font-bold">→ Apply Now</span></span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-8 md:gap-10 mt-8 items-center">
            <motion.div style={{y: heroY, opacity: heroOpacity}}>
              <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-[2px] text-[#8B7355] mb-4"><span className="w-8 h-[2px] bg-[#C9A86A] rounded-full"/> DHAKA • ONLINE & OFFLINE</div>
              <h1 className="serif font-black leading-[0.9] tracking-[-2px]">
                <span className="block text-[42px] md:text-[64px] lg:text-[72px] text-[#12372A]">Wisdom</span>
                <span className="block text-[42px] md:text-[64px] lg:text-[72px] text-transparent bg-clip-text bg-gradient-to-r from-[#C9A86A] via-[#D97342] to-[#8B4513]">Guides Your</span>
                <span className="block text-[42px] md:text-[64px] lg:text-[72px] text-[#12372A] flex items-center gap-3">Future <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D97342] text-white text-xl rotate-3 shadow-lg">✦</span></span>
              </h1>
              <p className="mt-6 text-[15px] md:text-[17px] leading-7 text-[#1A1A1A]/60 max-w-xl font-medium">Bangladesh’s most trusted IELTS & Spoken English centre. Personalised mentoring, British Council materials, and a proven path to <span className="text-[#12372A] font-bold underline decoration-[#C9A86A] decoration-2 underline-offset-4">Band 7.5+ in 12 weeks.</span></p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/enroll" className="inline-flex items-center gap-3 bg-[#12372A] hover:bg-black text-white px-7 py-4 rounded-full font-extrabold text-[14px] shadow-[0_12px_24px_rgba(18,55,42,0.25)]">Start Your Journey <span className="w-8 h-8 rounded-full bg-[#D97342] grid place-items-center"><ArrowRight size={16}/></span></Link>
                <Link to="/courses" className="inline-flex items-center gap-2 bg-white border border-[#12372A]/15 px-6 py-4 rounded-full font-bold text-[14px] text-[#12372A] hover:bg-[#12372A] hover:text-white transition"><span className="w-8 h-8 rounded-full bg-[#12372A] text-white grid place-items-center"><Play size={14} fill="white"/></span> Explore Courses</Link>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">{[1,2,3,4].map(i=> <img key={i} src={`https://i.pravatar.cc/100?img=${12+i}`} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" alt="" />)}<div className="w-10 h-10 rounded-full bg-[#D97342] border-2 border-white grid place-items-center text-white font-black text-xs">+2k</div></div>
                <div className="text-sm leading-tight"><div className="flex items-center gap-1 text-[#F59E0B]"><Star size={14} fill="#F59E0B"/><Star size={14} fill="#F59E0B"/><Star size={14} fill="#F59E0B"/><Star size={14} fill="#F59E0B"/><Star size={14} fill="#F59E0B"/><span className="text-[#1A1A1A] font-bold ml-1">4.9/5</span></div><div className="text-[#1A1A1A]/60 font-medium">Trusted by 2,400+ students</div></div>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">{[{k:"40,000+",l:"Annual Test-Takers"},{k:"92%",l:"Hit Target Band"},{k:"7.5+",l:"Avg Band Score"}].map(s=> <div key={s.k} className="bg-white border border-black/5 rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"><div className="serif font-black text-xl text-[#12372A]">{s.k}</div><div className="text-[11px] font-semibold text-black/50 mt-1">{s.l}</div></div>)}</div>
            </motion.div>

            <div className="relative lg:h-[620px] flex flex-col items-center justify-center">
              <div className="absolute inset-0 hidden lg:block">
                <motion.div style={{x: useTransform(sx, v=>v*18), y: useTransform(sy, v=>v*12)}} className="absolute top-8 right-4 bg-white/90 backdrop-blur-xl border border-white/70 rounded-2xl p-4 shadow-[0_20px_40px_rgba(18,55,42,0.12)] w-[220px]">
                  <div className="flex items-center gap-2 text-[11px] font-black tracking-widest text-[#D97342]"><Crown size={12}/> SUCCESS STORIES</div>
                  <div className="mt-2 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=33" className="w-10 h-10 rounded-full object-cover" alt=""/><div><div className="text-sm font-bold leading-none">Nusrat Jahan</div><div className="text-xs text-black/50">Band 8.0 • UK Visa</div></div><span className="ml-auto bg-emerald-50 text-emerald-700 text-[10px] font-black px-2 py-1 rounded-full">8.0</span></div>
                </motion.div>
                <motion.div style={{x: useTransform(sx, v=>v*-14), y: useTransform(sy, v=>v*-10)}} className="absolute bottom-16 left-0 bg-[#12372A] text-white rounded-2xl p-4 shadow-2xl w-[240px] overflow-hidden">
                  <div className="flex items-center justify-between"><div className="text-[10px] tracking-[1.5px] font-black text-[#C9A86A]">LIVE MOCK TEST</div><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/></div>
                  <div className="mt-3 flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-white/15 grid place-items-center"><Timer size={16}/></div><div className="text-sm font-bold">IELTS Simulation</div><span className="ml-auto text-xs bg-white text-[#12372A] px-2.5 py-1 rounded-full font-black">Today 6PM</span></div>
                  <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[68%] bg-[#D97342] rounded-full"/></div>
                  <div className="mt-1.5 flex justify-between text-[11px] font-semibold text-white/70"><span>68% booked</span><span>12 seats left</span></div>
                </motion.div>
              </div>

              <motion.div initial={{opacity:0, scale:0.92, y:20}} animate={{opacity:1, scale:1, y:0}} transition={{duration:0.9, ease:[0.16,1,0.3,1]}} className="relative z-10 w-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#C9A86A]/20 via-[#D97342]/10 to-[#12372A]/10 blur-3xl"/>
                <div className="relative bg-white rounded-[32px] p-3 md:p-4 shadow-[0_40px_80px_rgba(18,55,42,0.18)] border border-[#C9A86A]/20 overflow-hidden">
                  <div className="absolute -top-3 right-6 bg-[#D97342] text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg rotate-2 z-20">3D INTERACTIVE • MOVE CURSOR</div>
                  <div className="h-[360px] md:h-[420px] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#FDF8F0] via-white to-[#FDF8F0] relative">
                    <Owl3D mouse={mouse} />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#12372A]/90 backdrop-blur text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/> DRAG TO ROTATE • SCROLL TO EXPLORE</div>
                  </div>
                </div>
                <motion.div animate={{y:[0,-6,0]}} transition={{duration:3, repeat:Infinity, ease:"easeInOut"}} className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-black/5 rounded-full pl-2 pr-4 py-2 shadow-xl flex items-center gap-3 whitespace-nowrap">
                  <span className="w-8 h-8 rounded-full bg-[#12372A] text-white grid place-items-center"><Award size={14}/></span><span className="text-xs font-black tracking-widest text-[#12372A]">BRITISH COUNCIL PARTNER</span><span className="w-2 h-2 rounded-full bg-emerald-500"/>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="mt-12 bg-[#12372A] rounded-[24px] md:rounded-full px-4 md:px-8 py-4 flex flex-wrap items-center justify-between gap-4 text-white shadow-xl">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-white/10 grid place-items-center"><ShieldCheck size={18}/></div><div><div className="text-sm font-black leading-none">Trusted by 40,000+ Learners Yearly</div><div className="text-xs text-white/60">Dhaka’s #1 rated IELTS centre on Google • 4.9★★★★★</div></div></div>
            <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest text-white/70"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"/> BRITISH COUNCIL</span><span className="w-px h-4 bg-white/20"/><span>IDP CERTIFIED</span><span className="w-px h-4 bg-white/20"/><span>CAMBRIDGE</span></div>
            <Link to="/verify" className="bg-white text-[#12372A] px-5 py-2.5 rounded-full font-extrabold text-sm flex items-center gap-2">Verify Certificate <ArrowRight size={14}/></Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY PREVIEW */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div><div className="inline-flex items-center gap-2 bg-[#12372A] text-white px-4 py-1.5 rounded-full text-[11px] font-black tracking-[1.5px]"><Sparkles size={12}/> OUR PHILOSOPHY</div><h2 className="serif font-black text-[32px] md:text-[44px] leading-[0.9] text-[#12372A] mt-4">Three Pillars of<br/><span className="text-[#D97342]">SAGE Excellence.</span></h2></div>
            <p className="max-w-md text-[14px] leading-6 text-black/55 font-medium">We don’t just teach IELTS. We architect transformations — blending tech, mentorship, and culture to unlock global opportunities.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {n:"01", t:"Personalization", d:"AI diagnostics map your weaknesses. Your mentor knows your name, dream, and target band.", icon:Target, grad:"from-[#12372A] via-[#1A5D1A] to-[#2d7a2d]", stat:"1:1 Attention"},
              {n:"02", t:"Quality", d:"Band 9 trainers, Cambridge materials, weekly full mocks under real pressure.", icon:Crown, grad:"from-[#D97342] via-[#E87A3C] to-[#F4A46A]", stat:"Band 9 Faculty"},
              {n:"03", t:"Accessibility", d:"Hybrid batches, bKash instalments, lifetime recordings — world-class shouldn’t be elite.", icon:Users, grad:"from-[#8B7355] via-[#C9A86A] to-[#E8D5B0]", stat:"Hybrid & Instalments"},
            ].map((v,i)=>(
              <motion.div key={v.n} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} whileHover={{y:-6}} className="group relative bg-[#FDF8F0] rounded-[28px] p-6 border border-black/[0.06] overflow-hidden hover:shadow-[0_24px_48px_rgba(18,55,42,0.12)]">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${v.grad} p-[1.5px] shadow-lg`}><div className="w-full h-full rounded-full bg-gradient-to-br from-white/30 to-transparent grid place-items-center relative overflow-hidden"><div className="absolute top-1.5 left-2 w-5 h-5 rounded-full bg-white/60 blur-[3px]"/><v.icon size={22} className="relative text-white"/></div></div>
                <div className="mt-5 flex items-center gap-3"><span className="serif font-black text-[#C9A86A] text-sm">{v.n}</span><span className="h-px flex-1 bg-black/10"/><span className="text-[10px] font-black tracking-[1.5px] text-[#12372A]/50">{v.stat}</span></div>
                <h3 className="serif font-black text-xl text-[#12372A] mt-3">{v.t}</h3><p className="mt-2 text-[13.5px] leading-6 text-black/60 font-medium">{v.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex justify-center"><Link to="/about" className="inline-flex items-center gap-2 bg-[#12372A] text-white px-6 py-3 rounded-full font-black text-sm">Explore Our Philosophy <ArrowRight size={14}/></Link></div>
        </div>
      </section>

      {/* COURSES PREVIEW CAROUSEL */}
      <section className="py-16 md:py-20 bg-[#FDF8F0]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><div className="inline-flex items-center gap-2 bg-white border border-black/5 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest text-[#12372A] shadow-sm"><Layers size={12}/> SIGNATURE PROGRAMS</div><h2 className="serif font-black text-[32px] md:text-[44px] leading-none text-[#12372A] mt-4">Choose Your<br/><span className="text-[#D97342]">Flight Path.</span></h2></div>
            <div className="flex items-center gap-3"><button onClick={()=>setActive(p=>(p-1+courses.length)%courses.length)} className="w-11 h-11 rounded-full bg-white border border-black/10 grid place-items-center hover:bg-[#12372A] hover:text-white transition"><ChevronLeft size={18}/></button><button onClick={()=>setActive(p=>(p+1)%courses.length)} className="w-11 h-11 rounded-full bg-[#12372A] text-white grid place-items-center shadow-lg"><ChevronRight size={18}/></button></div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[32px]">
            <motion.div className="flex" animate={{x: `-${active*100}%`}} transition={{type:"spring", stiffness:280, damping:30}}>
              {courses.map((c,idx)=> (
                <div key={c.id} className="min-w-full grid lg:grid-cols-[1.05fr_0.95fr] bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-[0_24px_64px_rgba(18,55,42,0.12)]">
                  <div className="p-7 md:p-8 flex flex-col">
                    <div className="flex items-center gap-3"><span className="px-3 py-1.5 rounded-full text-white text-[10px] font-black tracking-widest" style={{background:c.accent}}>{c.badge}</span><span className="text-xs font-bold text-black/40">{c.students} enrolled • {c.rating}★</span></div>
                    <h3 className="serif font-black text-[26px] md:text-[32px] leading-none text-[#12372A] mt-4">{c.title}</h3><p className="text-[#D97342] font-bold text-sm">{c.subtitle}</p>
                    <div className="mt-3 text-xs font-semibold text-black/50 flex items-center gap-2"><Clock size={12}/>{c.duration} • {c.band}</div>
                    <ul className="mt-5 space-y-2">{c.features.map(f=> <li key={f} className="flex items-center gap-3 text-sm font-medium text-black/75"><span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 grid place-items-center shrink-0"><Check size={12} strokeWidth={3}/></span> {f}</li>)}</ul>
                    <div className="mt-auto pt-6 flex items-end justify-between">
                      <div><div className="text-xs font-bold tracking-widest text-black/40">FROM</div><div className="flex items-baseline gap-2"><span className="serif font-black text-2xl text-[#12372A]">{c.price}</span><span className="text-xs line-through text-black/30">{c.original}</span></div></div>
                      <button onClick={()=>{store.setSelectedCourse(idx as any); window.location.hash='#/enroll'}} className="bg-[#D97342] text-white px-5 py-3 rounded-full font-extrabold text-sm flex items-center gap-2">Enroll <ArrowRight size={14}/></button>
                    </div>
                  </div>
                  <div className="relative min-h-[340px] p-6 flex flex-col justify-center overflow-hidden" style={{background:`linear-gradient(135deg, ${c.accent} 0%, #0f2e22 100%)`}}>
                    <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-white/10 blur-2xl"/>
                    <div className="relative bg-white rounded-2xl p-5 shadow-2xl max-w-[360px] mx-auto w-full">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-[#12372A] grid place-items-center text-white"><Video size={14}/></div><div><div className="text-xs font-black tracking-widest">LIVE CLASSROOM</div><div className="text-[11px] text-black/50">Writing Task 2 • Feedback</div></div><span className="ml-auto w-2 h-2 rounded-full bg-red-500 animate-pulse"/></div>
                      <div className="mt-4 aspect-video rounded-xl bg-gradient-to-br from-[#12372A] to-[#1A5D1A] p-3 flex flex-col justify-end relative overflow-hidden">
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full">● LIVE</div>
                        <div className="relative flex items-end gap-2"><img src="https://i.pravatar.cc/100?img=26" className="w-12 h-12 rounded-xl object-cover border-2 border-white/40" alt=""/><div className="bg-white/95 rounded-xl px-3 py-2 text-xs font-semibold flex-1">“Add a concession — your thesis is strong.”</div></div>
                      </div>
                    </div>
                    <Link to={`/courses/${c.id}`} className="mt-4 mx-auto bg-white/15 backdrop-blur border border-white/20 text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white hover:text-[#12372A] transition">View Details <ArrowUpRight size={14}/></Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="mt-5 flex justify-center gap-2">{courses.map((_,i)=> <button key={i} onClick={()=>setActive(i)} className={`h-2 rounded-full transition-all ${i===active? 'w-8 bg-[#12372A]':'w-2 bg-black/15'}`}/>)}</div>
          <div className="mt-6 flex justify-center"><Link to="/courses" className="inline-flex items-center gap-2 bg-white border border-black/10 px-6 py-3 rounded-full font-black text-sm text-[#12372A] hover:bg-[#12372A] hover:text-white transition">See All Courses <ArrowRight size={14}/></Link></div>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="bg-[#12372A] rounded-[28px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-[#D97342]/20 blur-3xl"/>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-3 py-1 rounded-full text-[11px] font-black tracking-widest">TARGET BAND CALCULATOR</div>
              <h3 className="serif font-black text-2xl md:text-3xl text-white mt-3 leading-none">Not sure where to start?<br/><span className="text-[#C9A86A]">Find your course in 30 seconds.</span></h3>
              <p className="text-white/60 text-sm mt-2">Interactive 3D assessment — get a personal roadmap & mock schedule.</p>
            </div>
            <Link to="/assessment" className="relative bg-[#D97342] hover:bg-[#c45f2e] text-white px-8 py-4 rounded-full font-black flex items-center gap-2 shadow-xl whitespace-nowrap">Try Calculator <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* ROADMAP TEASER */}
      <section className="py-12 bg-[#FDF8F0]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-4">
          {[
            {q:"Q1 2026", t:"GRE & TOEFL", d:"US/Canada tracks live"},
            {q:"Q2 2026", t:"Corporate English", d:"B2B programs for Dhaka corporates"},
            {q:"Q3-Q4", t:"Global Portal", d:"Visa OS + AI evaluator"},
          ].map(r=> (
            <div key={r.t} className="bg-white rounded-2xl p-5 border border-black/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#12372A] text-white grid place-items-center font-black text-xs">{r.q}</div>
              <div><div className="font-black text-[#12372A]">{r.t}</div><div className="text-xs text-black/50">{r.d}</div></div>
              <ArrowUpRight size={16} className="ml-auto opacity-30"/>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6"><Link to="/roadmap" className="text-sm font-black tracking-widest text-[#12372A] flex items-center gap-2">VIEW FULL ROADMAP <ArrowRight size={14}/></Link></div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="bg-[#12372A] rounded-[24px] p-6 md:p-8 text-white flex gap-4 relative overflow-hidden">
            <Quote size={28} className="text-[#C9A86A] shrink-0"/>
            <div><p className="serif text-[18px] md:text-[22px] leading-7 font-semibold">“SAGE didn’t just give me a band — they gave me a system. 3 mocks a week, real British Council pressure, and my mentor replied at midnight.”</p><div className="mt-4 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=33" className="w-10 h-10 rounded-full object-cover border-2 border-white/20" alt=""/><div><div className="font-bold text-sm">Nusrat Jahan — Band 8.0</div><div className="text-xs text-white/60">Now at University of Manchester • UK Visa Granted</div></div></div></div>
          </div>
        </div>
      </section>
    </div>
  )
}
