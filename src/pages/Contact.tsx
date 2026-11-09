import { MessageCircle, Phone, Mail, MapPin, Instagram, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '../store/useAppStore'

export default function Contact(){
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const toast = useAppStore(s=>s.setToast)
  return (
    <div className="bg-[#FDF8F0] pt-24 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
          <div className="bg-white rounded-[28px] border border-black/5 p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest text-[#D97342]"><MessageCircle size={14}/> DIRECT CONTACT & COMMUNITY HUB</div>
            <h1 className="serif font-black text-[30px] leading-none text-[#12372A] mt-3">We reply in<br/><span className="text-[#D97342]">under 5 minutes.</span></h1>
            <p className="text-sm text-black/50 mt-3">Online & Offline Services • Dhaka • Daily 9AM — 9PM • English / Bangla</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a href="https://wa.me/8801790476222" target="_blank" className="bg-[#25D366] hover:bg-[#1db954] text-white rounded-2xl p-4 flex items-center gap-3 transition"><span className="w-10 h-10 rounded-full bg-white/20 grid place-items-center"><MessageCircle size={18}/></span><div><div className="font-black text-sm leading-none">WhatsApp Now</div><div className="text-xs opacity-90">+880 1790-476222</div></div><ArrowUpRight size={16} className="ml-auto opacity-70"/></a>
              <a href="tel:+8801790476222" className="bg-[#12372A] hover:bg-black text-white rounded-2xl p-4 flex items-center gap-3 transition"><span className="w-10 h-10 rounded-full bg-white/15 grid place-items-center"><Phone size={18}/></span><div><div className="font-black text-sm leading-none">Call Counselor</div><div className="text-xs opacity-70">Daily 9AM — 9PM</div></div><ArrowUpRight size={16} className="ml-auto opacity-60"/></a>
              <a href="mailto:sageeducationcentersec@gmail.com" className="bg-[#FDF8F0] border border-black/5 rounded-2xl p-4 flex items-center gap-3 hover:bg-white transition"><span className="w-10 h-10 rounded-full bg-white border border-black/5 grid place-items-center text-[#12372A]"><Mail size={16}/></span><div><div className="font-bold text-sm leading-none text-[#12372A]">Email Us</div><div className="text-xs text-black/50 truncate">sageeducationcentersec@gmail.com</div></div></a>
              <a href="https://instagram.com/sage.edu.center" target="_blank" className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded-2xl p-4 flex items-center gap-3"><span className="w-10 h-10 rounded-full bg-white/20 grid place-items-center"><Instagram size={18}/></span><div><div className="font-black text-sm leading-none">@sage.edu.center</div><div className="text-xs opacity-90">Daily tips & wins</div></div><ArrowUpRight size={16} className="ml-auto opacity-70"/></a>
            </div>

            <div className="mt-6 bg-[#FDF8F0] border border-black/5 rounded-2xl p-4">
              <div className="text-xs font-black tracking-widest text-black/40">SEND A MESSAGE</div>
              <div className="mt-3 space-y-3">
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm font-semibold outline-none focus:border-[#12372A]"/>
                <input placeholder="Phone / Email" className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm font-semibold outline-none focus:border-[#12372A]"/>
                <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="How can we help? (Target band, preferred mode, timeline)" rows={3} className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm font-medium outline-none focus:border-[#12372A]"/>
                <button onClick={()=>{ if(!name || !msg) return toast("Please fill name and message"); toast(`Thanks ${name}! Counselor will reply on WhatsApp within 5 minutes`); setName(''); setMsg('')}} className="w-full bg-[#12372A] hover:bg-black text-white py-3.5 rounded-full font-black">Send Message</button>
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-black/40"><ShieldCheck size={12}/> Avg reply 4m 12s • No spam</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#12372A] rounded-[28px] p-6 md:p-7 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5 blur-2xl"/>
              <div className="relative flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-pink-600 grid place-items-center"><Instagram size={16}/></div><div><div className="font-black text-sm leading-none">@sage.edu.center</div><div className="text-xs text-white/60">1,240 posts • 18.4k followers</div></div></div><a href="https://instagram.com/sage.edu.center" target="_blank" className="bg-white text-[#12372A] px-4 py-2 rounded-full font-black text-xs">Follow</a></div>
              <div className="mt-6 grid grid-cols-3 gap-2">{["https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80","https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80","https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80","https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80"].map((src,i)=> <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-white/10 relative group cursor-pointer"><img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/><div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 text-[10px] font-bold text-white bg-black/40 backdrop-blur px-1.5 py-1 rounded-full">♥ {Math.floor(Math.random()*900)+100}</div></div>)}</div>
              <div className="mt-4 flex gap-2"><span className="flex-1 bg-white/10 border border-white/10 rounded-full px-3 py-2 text-xs font-semibold text-white/80">#SAGEWins #Band8 #StudyAbroad</span><a href="https://instagram.com/sage.edu.center" target="_blank" className="bg-[#D97342] text-white px-4 py-2 rounded-full font-black text-xs">View Feed</a></div>
            </div>

            <div className="bg-white border border-black/5 rounded-[28px] p-6">
              <h3 className="font-black text-[#12372A] flex items-center gap-2"><MapPin size={16} className="text-[#D97342]"/> Visit Us</h3>
              <div className="mt-3 aspect-[16/10] rounded-2xl overflow-hidden bg-[#FDF8F0] relative border border-black/5">
                <img src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=800&q=80" alt="" className="w-full h-full object-cover opacity-80"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-2xl p-3 flex items-center gap-3 shadow-xl">
                  <div className="w-10 h-10 rounded-full bg-[#12372A] text-white grid place-items-center"><MapPin size={16}/></div>
                  <div><div className="font-black text-sm text-[#12372A]">Dhaka, Bangladesh</div><div className="text-xs text-black/50">Online & Offline • Dhanmondi & Mirpur</div></div>
                  <button onClick={()=>toast("Opening maps — Dhaka, Bangladesh")} className="ml-auto bg-[#12372A] text-white px-3 py-1.5 rounded-full font-bold text-xs">Directions</button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold"><span className="bg-[#FDF8F0] border border-black/5 px-3 py-2 rounded-full flex items-center gap-1"><Clock size={12}/> 9AM — 9PM Daily</span><span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-2 rounded-full flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/> Counselors Online</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
