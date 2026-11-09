import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ArrowRight, ArrowUpRight, X, MessageCircle, Search } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Assessment', to: '/assessment' },
  { label: 'Mocks', to: '/mocks' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'Verify', to: '/verify' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav(){
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  const nav = useNavigate()
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-3">
        <div className="bg-white/85 backdrop-blur-2xl border border-[#12372A]/10 rounded-[20px] md:rounded-full px-3 md:px-6 py-2.5 flex items-center justify-between shadow-[0_8px_32px_rgba(18,55,42,0.08)]">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#12372A] flex items-center justify-center overflow-hidden border-2 border-[#C9A86A]/40 shadow-md">
              <span className="serif text-white font-black text-[11px] leading-none text-center">SAGE<div className="text-[5px] tracking-[1px] font-sans font-bold text-[#C9A86A]">EDU</div></span>
            </div>
            <div className="hidden sm:block leading-none">
              <div className="serif font-black text-[#12372A] text-[15px] tracking-[1.5px]">SAGE</div>
              <div className="text-[8px] tracking-[2px] font-bold text-[#8B7355] -mt-1">EDUCATION CENTRE</div>
            </div>
            <span className="hidden lg:inline-flex ml-1 px-2.5 py-1 rounded-full bg-[#12372A] text-white text-[10px] font-bold tracking-widest">EST. 2018</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-[#FDF8F0] rounded-full p-1 border border-black/5">
            {links.map(l=>{
              const active = loc.pathname===l.to || (l.to!=='/' && loc.pathname.startsWith(l.to))
              return <Link key={l.to} to={l.to} className={`px-3.5 py-2 rounded-full text-[13px] font-semibold transition-all ${active ? 'bg-white text-[#12372A] shadow-sm border border-black/5' : 'text-[#1A1A1A]/60 hover:text-[#12372A] hover:bg-white'}`}>{l.label}</Link>
            })}
          </div>

          <div className="flex items-center gap-2">
            <a href="tel:+8801790476222" className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#12372A]/15 text-[#12372A] text-[13px] font-bold hover:bg-[#12372A] hover:text-white transition-all">
              <Phone size={14}/> +880 1790-476222
            </a>
            <button onClick={()=>nav('/enroll')} className="hidden sm:inline-flex items-center gap-2 bg-[#D97342] hover:bg-[#c45f2e] text-white px-5 py-2.5 rounded-full text-[13px] font-extrabold shadow-[0_6px_16px_rgba(217,115,66,0.35)]">
              Enroll Now <ArrowRight size={14}/>
            </button>
            <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-[#12372A] text-white grid place-items-center">
              {open ? <X size={18}/> : <span className="space-y-1.5"><span className="block w-4 h-0.5 bg-white rounded"/><span className="block w-4 h-0.5 bg-white rounded"/><span className="block w-3 h-0.5 bg-white rounded ml-auto"/></span>}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0, y:-10, scale:0.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-10}} className="mt-3 bg-white rounded-[24px] border border-black/10 shadow-2xl p-4 lg:hidden max-h-[78vh] overflow-auto">
              <div className="grid gap-1">
                {links.map(l=> (
                  <Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className={`px-4 py-3 rounded-xl font-semibold flex justify-between items-center ${loc.pathname===l.to? 'bg-[#FDF8F0] text-[#12372A]' : 'hover:bg-[#FDF8F0] text-[#12372A]'}`}>
                    {l.label} <ArrowUpRight size={16} className="opacity-40"/>
                  </Link>
                ))}
              </div>
              <Link to="/enroll" onClick={()=>setOpen(false)} className="mt-4 w-full bg-[#D97342] text-white py-4 rounded-full font-extrabold flex items-center justify-center gap-2">Enroll Now <ArrowRight size={16}/></Link>
              <div className="mt-3 flex gap-2">
                <a href="https://wa.me/8801790476222" target="_blank" className="flex-1 bg-[#25D366] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 text-sm"><MessageCircle size={16}/> WhatsApp</a>
                <Link to="/verify" onClick={()=>setOpen(false)} className="flex-1 bg-[#12372A] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 text-sm"><Search size={14}/> Verify</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
