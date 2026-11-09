import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-[#0F2E22] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:`radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize:'24px 24px'}}/>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#C9A86A]/10 blur-3xl" />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white grid place-items-center overflow-hidden">
                <span className="serif font-black text-[#12372A] text-[11px] text-center leading-none">SAGE<div className="text-[6px] tracking-widest">EDU</div></span>
              </div>
              <div><div className="serif font-black tracking-[2px] text-sm">SAGE EDUCATION CENTRE</div><div className="text-[10px] tracking-[2px] text-white/50 font-bold">WISDOM • GUIDANCE • EXCELLENCE</div></div>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/60 font-medium">Dhaka’s most loved IELTS & Spoken English centre. We turn ambition into boarding passes — with personal mentorship, proven pedagogy, and lifetime community.</p>
            <div className="mt-6 flex gap-2">
              <a href="https://instagram.com/sage.edu.center" target="_blank" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#12372A] grid place-items-center transition"><Instagram size={16}/></a>
              <a href="https://wa.me/8801790476222" target="_blank" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] grid place-items-center transition"><MessageCircle size={16}/></a>
              <a href="tel:+8801790476222" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center transition"><Phone size={16}/></a>
              <a href="mailto:sageeducationcentersec@gmail.com" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center transition"><Mail size={16}/></a>
            </div>
          </div>
          <div>
            <div className="text-xs font-black tracking-widest text-[#C9A86A]">PROGRAMS</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70 font-medium">
              <li><Link to="/courses" className="hover:text-white">IELTS Full Preparation</Link></li>
              <li><Link to="/courses" className="hover:text-white">Spoken English Flourish</Link></li>
              <li><Link to="/courses" className="hover:text-white">Private One-on-One</Link></li>
              <li><Link to="/courses" className="hover:text-white">Private Full Intensive</Link></li>
              <li className="pt-2 flex items-center gap-2 text-[#C9A86A] font-bold">GRE & TOEFL <span className="text-[10px] bg-[#D97342] text-white px-1.5 py-0.5 rounded-full">2026</span></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-black tracking-widest text-[#C9A86A]">EXPLORE</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70 font-medium">
              <li><Link to="/assessment" className="hover:text-white">Band Calculator</Link></li>
              <li><Link to="/mocks" className="hover:text-white">Mock Tests</Link></li>
              <li><Link to="/verify" className="hover:text-white">Verify Certificate</Link></li>
              <li><Link to="/roadmap" className="hover:text-white">Roadmap 2026</Link></li>
              <li><Link to="/about" className="hover:text-white">Our Philosophy</Link></li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5">
            <div className="text-xs font-black tracking-widest text-[#C9A86A]">VISIT & CONTACT</div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex gap-3"><MapPin size={16} className="text-[#C9A86A] mt-0.5 shrink-0"/><span className="text-white/80 leading-5">Dhaka, Bangladesh<br/><span className="text-white/50">Online & Offline — Dhanmondi & Mirpur</span></span></div>
              <div className="flex gap-3 items-center"><Phone size={16} className="text-[#C9A86A] shrink-0"/><a href="tel:+8801790476222" className="font-bold hover:text-[#C9A86A]">+880 1790-476222</a></div>
              <div className="flex gap-3 items-center"><Mail size={16} className="text-[#C9A86A] shrink-0"/><a href="mailto:sageeducationcentersec@gmail.com" className="text-xs font-semibold break-all">sageeducationcentersec@gmail.com</a></div>
            </div>
            <Link to="/contact" className="mt-5 w-full bg-white text-[#12372A] py-3 rounded-full font-black text-sm flex items-center justify-center gap-2">Get Directions <ArrowUpRight size={14}/></Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <span>© 2026 SAGE Education Centre • Dhaka • All rights reserved.</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/> All systems operational • 60 FPS</span>
        </div>
      </div>
    </footer>
  )
}
