import { useParams, Link, useNavigate } from 'react-router-dom'
import { coursesData } from './Courses'
import { ArrowLeft, Clock, Users, Star, Check, Video, Award, ShieldCheck, Timer, MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { useAppStore } from '../store/useAppStore'

export default function CourseDetail(){
  const { id } = useParams()
  const idx = Number(id)
  const c = coursesData[idx] || coursesData[0]
  const nav = useNavigate()
  const store = useAppStore()
  return (
    <div className="bg-[#FDF8F0] pt-24 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-[#12372A] hover:gap-3 transition"><ArrowLeft size={16}/> Back to Courses</Link>
        <div className="mt-4 grid lg:grid-cols-[1.4fr_0.6fr] gap-6">
          <div className="bg-white rounded-[28px] overflow-hidden border border-black/5 shadow-xl">
            <div className="h-64 md:h-80 relative overflow-hidden">
              <img src={c.img} alt="" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1.5 rounded-full text-white text-[11px] font-black tracking-widest" style={{background:c.accent}}>{c.badge}</span>
                <h1 className="serif font-black text-[28px] md:text-[40px] leading-none mt-3 drop-shadow">{c.title}</h1>
                <p className="font-bold opacity-90">{c.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold"><span className="bg-white text-[#12372A] px-3 py-1.5 rounded-full flex items-center gap-1"><Clock size={12}/>{c.duration}</span><span className="bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full">{c.band}</span><span className="bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1"><Users size={12}/>{c.students} • ★ {c.rating}</span></div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="serif font-black text-xl text-[#12372A]">What you’ll get</h3>
              <ul className="mt-4 grid md:grid-cols-2 gap-3">{c.features.map(f=> <li key={f} className="flex items-center gap-3 text-sm font-medium bg-[#FDF8F0] border border-black/5 rounded-2xl p-3"><span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 grid place-items-center shrink-0"><Check size={14} strokeWidth={3}/></span> {f}</li>)}</ul>
              <h3 className="serif font-black text-xl text-[#12372A] mt-8">Curriculum</h3>
              <div className="mt-4 grid md:grid-cols-2 gap-3">{c.curriculum.map((s,i)=> <div key={s} className="bg-white border border-black/5 rounded-2xl p-4 flex gap-3"><div className="w-8 h-8 rounded-full bg-[#12372A] text-white grid place-items-center font-black text-xs">{i+1}</div><div><div className="font-bold text-sm text-[#12372A]">{s}</div><div className="text-xs text-black/50">Live + recordings • Assignments • Feedback</div></div></div>)}</div>
              <div className="mt-8 bg-[#FDF8F0] border border-black/5 rounded-2xl p-4">
                <div className="font-black text-[#12372A] flex items-center gap-2"><Award size={16} className="text-[#D97342]"/> Who is this for?</div>
                <p className="text-sm text-black/60 mt-1">{c.who}</p>
              </div>
              <div className="mt-6 bg-[#12372A] rounded-2xl p-5 text-white flex gap-4">
                <Video size={20} className="shrink-0 text-[#C9A86A]"/>
                <div><div className="font-bold">Live classroom preview</div><div className="text-white/60 text-sm">Every class is recorded — miss nothing. British Council certified materials + prediction bank.</div></div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-[28px] border border-black/5 p-6 shadow-xl sticky top-24">
              <div className="text-xs font-black tracking-widest text-black/40">ENROLLMENT</div>
              <div className="mt-2 flex items-baseline gap-2"><span className="serif font-black text-3xl text-[#12372A]">{c.price}</span><span className="text-sm line-through text-black/30">{c.original}</span></div>
              <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-1"><ShieldCheck size={12}/> 3-day refund • 3× instalments</div>
              <button onClick={()=>{store.setSelectedCourse(idx as any); nav('/enroll')}} className="mt-5 w-full bg-[#D97342] hover:bg-[#c45f2e] text-white py-4 rounded-full font-black flex items-center justify-center gap-2">Enroll Now — {c.price} <ArrowRight size={16}/></button>
              <button onClick={()=>nav('/assessment')} className="mt-3 w-full bg-[#FDF8F0] border border-black/5 py-3 rounded-full font-bold text-sm">Check if this fits me</button>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#FDF8F0] rounded-xl p-2 border border-black/5"><Timer size={14} className="mx-auto"/><div className="font-bold mt-1">{c.duration.split('•')[0].trim()}</div></div>
                <div className="bg-[#FDF8F0] rounded-xl p-2 border border-black/5"><Users size={14} className="mx-auto"/><div className="font-bold mt-1">{c.students}</div></div>
                <div className="bg-emerald-50 rounded-xl p-2 border border-emerald-100"><Star size={14} className="mx-auto text-amber-500"/><div className="font-bold mt-1">{c.rating}★</div></div>
              </div>
              <div className="mt-4 flex gap-2">
                <a href="https://wa.me/8801790476222" target="_blank" className="flex-1 bg-[#25D366] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 text-sm"><MessageCircle size={14}/> WhatsApp</a>
                <a href="tel:+8801790476222" className="flex-1 bg-[#12372A] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 text-sm"><Phone size={14}/> Call</a>
              </div>
            </div>
            <div className="bg-[#12372A] rounded-[28px] p-5 text-white">
              <div className="font-black flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400"/> Trust & Certification</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70"><li>• British Council & IDP certified trainers</li><li>• Certificate with QR + blockchain verification</li><li>• Alumni visa success wall — 1,200+ abroad</li></ul>
              <Link to="/verify" className="mt-4 inline-flex bg-white text-[#12372A] px-4 py-2 rounded-full font-black text-xs">Verify a Certificate →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
