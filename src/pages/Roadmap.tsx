import { motion } from 'framer-motion'
import { Clock, GraduationCap, BookOpen, Users, Globe, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Roadmap(){
  return (
    <div className="bg-[#FDF8F0] pt-24 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#12372A] text-white px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest"><Clock size={12}/> FUTURE ROADMAP • 2026 EXPANSION</div>
          <h1 className="serif font-black text-[32px] md:text-[52px] leading-none tracking-tight text-[#12372A] mt-4">We’re building <span className="text-[#D97342]">more than IELTS.</span></h1>
          <p className="text-sm leading-6 text-black/50 font-medium mt-3">From test prep to global careers — SAGE is expanding into the full study-abroad ecosystem for Bangladeshi youth.</p>
        </div>

        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#12372A]/0 via-[#12372A]/15 to-transparent -translate-x-1/2"/>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            {[
              { quarter: "Q1 2026 • LIVE", title: "GRE & TOEFL Tracks", desc: "Dedicated verticals for US & Canada aspirants. 6-month intensive with ETS-certified trainers and full-length adaptive mocks.", icon: GraduationCap, color: "#12372A", tag: "ADMISSIONS OPEN", stat: "320 early enrollments" },
              { quarter: "Q2 2026", title: "Corporate English Suite", desc: "B2B programs for banks, garments & tech. Business communication, presentation & negotiation labs — onsite at your office.", icon: BookOpen, color: "#D97342", tag: "PARTNERSHIPS", stat: "12 corporates onboarding" },
              { quarter: "Q3 2026", title: "University Partnerships", desc: "Direct articulation with 15+ private universities in Dhaka. Campus IELTS centres, credit-transfer guidance & scholarship desk.", icon: Users, color: "#1A5D1A", tag: "CAMPUS NETWORK", stat: "5 MOUs signed" },
              { quarter: "Q4 2026", title: "SAGE Global Portal", desc: "One app for everything — visa SOP builder, agent marketplace, alumni mentorship, and AI speaking evaluator trained on Bangladeshi accents.", icon: Globe, color: "#8B7355", tag: "PRODUCT LAUNCH", stat: "Beta waitlist 2.1k" },
            ].map((r,i)=> (
              <motion.div key={r.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className={`relative bg-white rounded-[24px] p-6 border border-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] ${i%2===1? 'md:mt-8':''}`}>
                <div className="hidden md:block absolute top-8 w-3 h-3 rounded-full bg-[#12372A] border-4 border-[#FDF8F0] shadow" style={{[i%2===0? 'right':'left']:'-25px'} as any} />
                <div className="flex items-start justify-between"><span className="text-[11px] font-black tracking-widest px-2.5 py-1 rounded-full text-white" style={{background:r.color}}>{r.quarter}</span><span className="text-[10px] font-black tracking-widest bg-[#FDF8F0] border border-black/5 px-2.5 py-1 rounded-full text-black/60">{r.tag}</span></div>
                <div className="mt-4 flex gap-4"><div className="w-12 h-12 rounded-2xl grid place-items-center text-white shrink-0 shadow-md" style={{background:r.color}}><r.icon size={20}/></div><div><h3 className="serif font-black text-lg leading-none text-[#12372A]">{r.title}</h3><p className="text-[13px] leading-5 text-black/60 font-medium mt-2">{r.desc}</p><div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#12372A] bg-[#FDF8F0] border border-black/5 px-2.5 py-1.5 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/>{r.stat}</div></div></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-[#12372A] rounded-[28px] p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white/5 blur-2xl"/>
          <div className="relative"><h3 className="serif font-black text-2xl leading-none">Want early access?</h3><p className="text-white/60 text-sm mt-2">Join the waitlist — get founding discounts and free diagnostics for GRE/TOEFL.</p></div>
          <Link to="/contact" className="relative bg-white text-[#12372A] px-7 py-4 rounded-full font-black flex items-center gap-2">Join Waitlist <ArrowRight size={16}/></Link>
        </div>
      </div>
    </div>
  )
}
