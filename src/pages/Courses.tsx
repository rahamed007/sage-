import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Users, Star, Check, ArrowRight, Video, ShieldCheck, Layers, Timer, ArrowUpRight } from 'lucide-react'
import { useAppStore } from '../store/useAppStore'

export const coursesData = [
  { id:0, title:"IELTS Full Preparation Course", subtitle:"Complete 360° Mastery", duration:"12 Weeks • 48 Sessions", price:"৳12,500", original:"৳18,000", band:"Band 7.5+ Target", badge:"MOST POPULAR", accent:"#12372A", students:"2.4k enrolled", rating:4.9, features:["All 4 Modules Intensive","Weekly Mock Tests","Band 9 Trainer Feedback","Unlimited Doubt Sessions"], curriculum:["Listening • 12hrs","Reading • 12hrs","Writing Task 1 & 2 • 16hrs","Speaking • 8hrs"], who:"First-time test takers aiming 7.0-7.5", img:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" },
  { id:1, title:"Spoken English Course", subtitle:"Speak with Confidence", duration:"8 Weeks • 32 Sessions", price:"৳8,500", original:"৳11,000", band:"Fluency in 60 Days", badge:"BEGINNER FRIENDLY", accent:"#D97342", students:"1.8k enrolled", rating:4.8, features:["Daily Speaking Labs","Accent & Pronunciation","Corporate Communication","Live Conversation Club"], curriculum:["Phonetics & Accent","Fluency Drills","Presentation Skills","Interview Mock"], who:"Beginners & professionals", img:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" },
  { id:2, title:"Private One-on-One Sessions", subtitle:"Personal Mentor Model", duration:"Flexible • Per Session", price:"৳1,200", original:"per class", band:"Fully Personalized", badge:"LIMITED SLOTS", accent:"#1A5D1A", students:"420 students", rating:5.0, features:["1:1 Dedicated Mentor","Custom Study Plan","Flexible Schedule","Instant Feedback Loop"], curriculum:["Diagnostic → Plan","1:1 Live Sessions","Homework + Review","Mock & Retake"], who:"Working professionals & retakers", img:"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80" },
  { id:3, title:"Private Full Course (One-on-One Intensive)", subtitle:"One-on-One Intensive • Band 8", duration:"16 Weeks • 64 Sessions", price:"৳28,500", original:"৳36,000", band:"Band 8.0 Intensive", badge:"ELITE TRACK", accent:"#8B4513", students:"180 enrolled", rating:4.9, features:["Band 8+ Guarantee*","Daily 1:1 Practice","UK-British Council Material","Visa & SOP Guidance"], curriculum:["Daily 1:1 • 64 sessions","Weekly prediction tests","SOP & Visa desk","Unlimited retakes"], who:"Ambitious 8.0 aspirants", img:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" },
]

export default function Courses(){
  const [hover, setHover] = useState<number| null>(null)
  const nav = useNavigate()
  const store = useAppStore()
  return (
    <div className="bg-[#FDF8F0] pt-24 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[28px] border border-black/5 p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#C9A86A]/10 blur-3xl"/>
          <div className="inline-flex items-center gap-2 bg-[#12372A] text-white px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest"><Layers size={12}/> SIGNATURE PROGRAMS</div>
          <h1 className="serif font-black text-[32px] md:text-[48px] leading-none tracking-tight text-[#12372A] mt-4">Choose Your<br/><span className="text-[#D97342]">Flight Path.</span></h1>
          <p className="text-sm leading-6 text-black/50 max-w-xl mt-3 font-medium">3D interactive cards with tilt & parallax — hover to feel the depth. Every course includes mocks, recordings, and mentor access.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {coursesData.map(c=> (
            <motion.div key={c.id} onHoverStart={()=>setHover(c.id)} onHoverEnd={()=>setHover(null)} whileHover={{y:-6}} className="group bg-white rounded-[28px] overflow-hidden border border-black/5 shadow-[0_14px_40px_rgba(18,55,42,0.08)] flex flex-col"
              style={{ transform: hover===c.id ? `perspective(900px) rotateY(${ (c.id%2? -3: 3)}deg) rotateX(2deg)` : 'perspective(900px) rotateY(0) rotateX(0)', transition:'transform 0.5s ease' }}>
              <div className="h-44 relative overflow-hidden">
                <img src={c.img} alt="" className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
                <div className="absolute top-4 left-4 flex items-center gap-2"><span className="px-3 py-1.5 rounded-full text-white text-[10px] font-black tracking-widest" style={{background:c.accent}}>{c.badge}</span><span className="bg-white/90 backdrop-blur text-[#12372A] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><Users size={12}/>{c.students}</span></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white"><div><div className="font-black text-lg leading-none drop-shadow">{c.title}</div><div className="text-xs font-bold opacity-90">{c.subtitle}</div></div><span className="bg-white text-[#12372A] px-3 py-1.5 rounded-full font-black text-xs flex items-center gap-1">★ {c.rating}</span></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold text-black/50 flex items-center gap-2"><Clock size={12}/>{c.duration} • {c.band}</div>
                <ul className="mt-4 space-y-2">{c.features.map(f=> <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-black/75"><span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 grid place-items-center shrink-0"><Check size={12} strokeWidth={3}/></span> {f}</li>)}</ul>
                <div className="mt-5 bg-[#FDF8F0] rounded-2xl p-3 border border-black/5">
                  <div className="text-[11px] font-black tracking-widest text-black/40">CURRICULUM SNAPSHOT</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">{c.curriculum.map(s=> <span key={s} className="text-xs font-semibold bg-white border border-black/5 px-2.5 py-1 rounded-full">{s}</span>)}</div>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div><div className="text-xs font-bold tracking-widest text-black/40">FROM</div><div className="flex items-baseline gap-2"><span className="serif font-black text-2xl text-[#12372A]">{c.price}</span><span className="text-xs line-through text-black/30">{c.original}</span></div></div>
                  <div className="flex gap-2">
                    <Link to={`/courses/${c.id}`} className="px-4 py-3 rounded-full border border-black/10 font-bold text-sm hover:bg-[#12372A] hover:text-white hover:border-[#12372A] transition flex items-center gap-1">Details <ArrowUpRight size={14}/></Link>
                    <button onClick={()=>{store.setSelectedCourse(c.id as any); nav('/enroll')}} className="px-5 py-3 rounded-full bg-[#D97342] hover:bg-[#c45f2e] text-white font-extrabold text-sm flex items-center gap-1">Enroll <ArrowRight size={14}/></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-[#12372A] rounded-[28px] p-6 md:p-8 text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white/5 blur-2xl"/>
          <div className="relative grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
            <div><h3 className="serif font-black text-2xl leading-none">Not sure which fits?</h3><p className="text-white/60 text-sm mt-2">Take the 30-second Target Band Calculator — get a personal recommendation and mock schedule instantly.</p><div className="mt-4 flex gap-2 text-xs font-bold"><span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-1"><Timer size={12}/> 30 seconds</span><span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-1"><ShieldCheck size={12}/> Free</span></div></div>
            <div className="bg-white rounded-2xl p-5 text-[#12372A]">
              <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#D97342]"><Video size={12}/> LIVE COMPARISON</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">{coursesData.slice(0,3).map(c=> <div key={c.id} className="bg-[#FDF8F0] rounded-xl p-2 border border-black/5"><div className="font-black text-sm">{c.price}</div><div className="text-[10px] font-bold text-black/50">{c.title.split(' ')[0]}</div></div>)}</div>
              <Link to="/assessment" className="mt-4 w-full bg-[#12372A] text-white py-3 rounded-full font-black flex items-center justify-center gap-2">Try Calculator <ArrowRight size={14}/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
