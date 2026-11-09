import { useState } from 'react'
import { useAppStore } from '../store/useAppStore'
import { Timer, Calendar, ShieldCheck, Award, TrendingUp, Clock, Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Mocks(){
  const [date, setDate] = useState('2026-09-15')
  const [slot, setSlot] = useState('10:00 AM')
  const store = useAppStore()
  const book = ()=>{
    store.addMockBooking({date, slot})
    store.setToast(`Mock booked for ${new Date(date).toLocaleDateString()} at ${slot} — admit card sent via SMS`)
  }
  return (
    <div className="bg-white pt-24 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="bg-[#FDF8F0] rounded-[28px] border border-black/5 p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-[#D97342]/10 blur-2xl"/>
          <div className="inline-flex items-center gap-2 bg-[#12372A] text-white px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest"><Timer size={12}/> MOCK TEST & DIAGNOSTICS</div>
          <h1 className="serif font-black text-[32px] md:text-[44px] leading-none text-[#12372A] mt-4">Real Exam. <span className="text-[#D97342]">Real Pressure.</span> Real Results.</h1>
          <p className="text-sm text-black/50 max-w-xl mt-3 font-medium">British Council format • Instant band prediction • Detailed TR/CC/LR/GRA breakdown. Free for enrolled students.</p>
        </div>

        <div className="mt-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
          <div className="bg-[#FDF8F0] rounded-[28px] border border-black/5 p-6 md:p-8">
            <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-2xl bg-[#12372A] text-white grid place-items-center"><Timer size={20}/></div><div><h3 className="serif font-black text-xl leading-none text-[#12372A]">Book Your Mock</h3><div className="text-xs font-bold text-black/50">Choose date & slot — get admit card instantly</div></div></div>
            <div className="mt-6 grid grid-cols-3 gap-2">{[{l:"Listening",ico:"🎧",s:"8.0"},{l:"Reading",ico:"📖",s:"7.5"},{l:"Writing",ico:"✍️",s:"7.0"}].map(m=> <div key={m.l} className="bg-white rounded-2xl p-3 border border-black/5 text-center"><div className="text-lg">{m.ico}</div><div className="text-xs font-black tracking-widest text-black/40">{m.l.toUpperCase()}</div><div className="font-black text-[#12372A]">{m.s} avg</div></div>)}</div>
            <div className="mt-6 space-y-4">
              <div><label className="text-xs font-black tracking-widest text-black/60">SELECT DATE</label><div className="mt-2 grid grid-cols-3 gap-2">{['2026-09-15','2026-09-20','2026-09-27'].map(d=> <button key={d} onClick={()=>setDate(d)} className={`py-3 rounded-2xl border font-bold text-sm ${date===d?'bg-[#12372A] text-white border-[#12372A]':'bg-white border-black/10 text-black/70'}`}>{new Date(d).toLocaleDateString('en-GB',{day:'numeric', month:'short'})}</button>)}</div></div>
              <div><label className="text-xs font-black tracking-widest text-black/60">TIME SLOT</label><div className="mt-2 grid grid-cols-3 gap-2">{['10:00 AM','02:00 PM','06:00 PM'].map(s=> <button key={s} onClick={()=>setSlot(s)} className={`py-3 rounded-2xl border font-bold text-sm ${slot===s?'bg-[#D97342] text-white border-[#D97342]':'bg-white border-black/10 text-black/70'}`}>{s}</button>)}</div></div>
              <button onClick={book} className="w-full bg-[#12372A] hover:bg-black text-white py-4 rounded-full font-black flex items-center justify-center gap-2"><Calendar size={16}/> Book Mock — ৳500 (adjustable)</button>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-black/40"><ShieldCheck size={12}/> Free for enrolled students • 48-hour result</div>
            </div>

            {store.mockBookings.length>0 && (
              <div className="mt-6 bg-white rounded-2xl border border-black/5 p-4">
                <div className="text-xs font-black tracking-widest text-black/40">YOUR BOOKINGS</div>
                <div className="mt-3 space-y-2">{store.mockBookings.map(b=> <div key={b.id} className="flex items-center justify-between bg-[#FDF8F0] rounded-xl px-3 py-2.5 text-sm border border-black/5"><span className="font-bold">{b.id}</span><span className="text-black/60">{b.date} • {b.slot}</span><span className="bg-emerald-500 text-white text-xs font-black px-2 py-1 rounded-full">CONFIRMED</span></div>)}</div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-[#12372A] rounded-[28px] p-6 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/5 blur-2xl"/>
              <div className="relative">
                <h3 className="serif font-black text-xl leading-none flex items-center gap-2"><TrendingUp size={18} className="text-[#C9A86A]"/> Performance Tracking</h3><p className="text-white/60 text-sm mt-2">After each mock, you get a dashboard like this — see your band trajectory.</p>
                <div className="mt-5 bg-white rounded-2xl p-4 text-[#12372A]">
                  <div className="flex items-center justify-between"><span className="text-xs font-black tracking-widest text-black/40">LAST MOCK • 07 SEP 2026</span><span className="bg-[#12372A] text-white text-xs font-black px-2.5 py-1 rounded-full">Band 7.0</span></div>
                  <div className="mt-3 grid grid-cols-4 gap-2 text-center">{[{k:"L",v:"7.5"},{k:"R",v:"7.0"},{k:"W",v:"6.5"},{k:"S",v:"7.0"}].map(s=> <div key={s.k} className="bg-[#FDF8F0] rounded-xl p-2 border border-black/5"><div className="font-black">{s.v}</div><div className="text-[10px] font-bold text-black/40">{s.k}</div></div>)}</div>
                  <div className="mt-4 h-2 bg-black/5 rounded-full overflow-hidden"><div className="h-full w-[78%] bg-[#D97342] rounded-full"/></div>
                  <div className="mt-1 flex justify-between text-[11px] font-bold text-black/40"><span>Progress to 7.5</span><span>78%</span></div>
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2"><Award size={16} className="text-amber-600 shrink-0 mt-0.5"/><div className="text-xs leading-4"><span className="font-black">Feedback:</span> Task Response strong — work on lexical resource & complex sentences for +0.5 in Writing.</div></div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black/5 rounded-[28px] p-6">
              <h4 className="font-black text-[#12372A] flex items-center gap-2"><Clock size={16}/> What happens on mock day?</h4>
              <ol className="mt-3 space-y-3 text-sm">
                {[
                  "Arrive 30 min early — biometric check & briefing",
                  "Full 2h45m test under exam pressure (no phones)",
                  "Speaking on same day — BC examiner",
                  "Results in 48h + 1:1 review with mentor",
                ].map((t,i)=> <li key={t} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-[#FDF8F0] border border-black/5 grid place-items-center font-black text-xs text-[#12372A] shrink-0">{i+1}</span><span className="text-black/65 font-medium">{t}</span></li>)}
              </ol>
              <div className="mt-4 flex gap-2">{["ID required","British Council format","Prediction 94% accurate"].map(b=> <span key={b} className="text-xs font-bold bg-[#FDF8F0] border border-black/5 px-2.5 py-1 rounded-full">{b}</span>)}</div>
            </div>

            <div className="bg-[#FDF8F0] border border-black/5 rounded-[28px] p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white grid place-items-center"><Check size={16} strokeWidth={3}/></div>
              <div><div className="font-bold text-sm text-[#12372A]">Already enrolled? Mocks are free.</div><div className="text-xs text-black/50">Just pick a date — no payment needed.</div></div>
              <ArrowRight size={16} className="ml-auto opacity-30"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
