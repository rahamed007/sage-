import { motion } from 'framer-motion'
import { Target, Crown, Globe, Quote, Users, Award, Sparkles, GraduationCap, Heart, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <div className="bg-[#FDF8F0] pt-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="bg-white rounded-[28px] border border-black/5 p-6 md:p-10 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#C9A86A]/10 blur-3xl"/>
          <div className="inline-flex items-center gap-2 bg-[#12372A] text-white px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest"><Sparkles size={12}/> ABOUT SAGE EDUCATION CENTRE</div>
          <h1 className="serif font-black text-[34px] md:text-[54px] leading-[0.9] tracking-tight text-[#12372A] mt-4">Wisdom is not<br/><span className="text-[#D97342]">taught. It’s guided.</span></h1>
          <p className="mt-4 text-[15px] leading-7 text-black/60 max-w-3xl font-medium">Founded in Dhaka in 2018, SAGE was built on a simple belief: every Bangladeshi student deserves a personal, world-class pathway to global opportunity — not a crowded lecture hall. Today we serve 40,000+ test-takers a year, with a 92% target-band hit rate and an average Band 7.5+.</p>
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">{[{k:"2018",l:"Founded"},{k:"40k+",l:"Learners / yr"},{k:"4.9★",l:"Google Rating"}].map(s=> <div key={s.k} className="bg-[#FDF8F0] rounded-2xl p-4 text-center border border-black/5"><div className="serif font-black text-2xl text-[#12372A]">{s.k}</div><div className="text-[11px] font-bold text-black/50">{s.l}</div></div>)}</div>
        </motion.div>

        {/* Horizontal pillars - scroll sequence */}
        <div className="mt-8">
          <div className="text-center mb-8"><div className="inline-flex items-center gap-2 bg-white border border-black/5 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest text-[#12372A]"><Zap size={12}/> THREE PILLARS</div><h2 className="serif font-black text-3xl text-[#12372A] mt-3">Our Philosophy, in Motion.</h2><p className="text-sm text-black/50 max-w-xl mx-auto mt-2">Scroll — each pillar comes into focus with its own 3D glass sphere, just like the original SAGE blueprint.</p></div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {n:"01", title:"Personalization", icon:Target, color:"#12372A", grad:"from-[#12372A] via-[#1A5D1A] to-[#2d7a2d]", desc:"We start with a diagnostic that maps your exact profile across Listening, Reading, Writing, Speaking — down to task-response vs cohesion. Your mentor builds a weekly sprint plan, not a generic syllabus. No batch of 40 watching a whiteboard; your doubts are answered in minutes, not next week.", bullets:["AI diagnostic + human review","Weekly 1:1 sprint planning","Unlimited doubt hours","Custom homework bank"]},
              {n:"02", title:"Quality", icon:Crown, color:"#D97342", grad:"from-[#D97342] via-[#E87A3C] to-[#F4A46A]", desc:"Band 9 trainers (British Council & IDP certified), Cambridge 10-19 + authentic SAGE mocks that replicate real exam pressure — including the nervous walk into the speaking room. We don’t teach tricks; we build examiners’ muscle memory.", bullets:["Band 9 faculty, avg 8 years exp","48 full mock banks","Real exam simulation labs","Detailed TR & CC feedback"]},
              {n:"03", title:"Accessibility", icon:Globe, color:"#8B7355", grad:"from-[#8B7355] via-[#C9A86A] to-[#E8D5B0]", desc:"If quality is only for the elite, it’s failed. SAGE runs hybrid & offline batches from Dhanmondi & Mirpur to your living room, with bKash/Nagad instalments, lifetime recordings, and a free diagnostic for every new student — no strings.", bullets:["Online + Offline + Hybrid","3× instalments via bKash/Nagad","Lifetime recording access","Free diagnostic & counseling"]},
            ].map((v,i)=>(
              <motion.div key={v.n} initial={{opacity:0, y:20, filter:"blur(6px)"}} whileInView={{opacity:1, y:0, filter:"blur(0px)"}} viewport={{once:true, amount:0.3}} transition={{delay:i*0.15, duration:0.7}} className="bg-white rounded-[28px] p-6 md:p-7 border border-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] relative overflow-hidden group hover:shadow-[0_24px_48px_rgba(18,55,42,0.14)] hover:-translate-y-1 transition-all">
                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#FDF8F0] blur-2xl"/>
                <div className="relative">
                  <motion.div animate={{rotate:[0, 8, -6, 0], scale:[1,1.04,1]}} transition={{duration:6+i, repeat:Infinity, ease:"easeInOut"}} className={`w-20 h-20 rounded-full bg-gradient-to-br ${v.grad} p-[1.5px] shadow-[0_12px_32px_rgba(0,0,0,0.18)]`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur grid place-items-center relative overflow-hidden">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/40 to-white/70 opacity-60"/>
                      <div className="absolute top-2 left-3 w-6 h-6 rounded-full bg-white/70 blur-[4px]"/>
                      <v.icon size={26} className="relative text-white drop-shadow-md"/>
                    </div>
                  </motion.div>
                  <div className="absolute -bottom-1 left-4 w-12 h-3 rounded-full bg-black/10 blur-[6px]"/>
                </div>
                <div className="mt-6 flex items-center gap-3"><span className="serif font-black text-[#C9A86A] text-sm">{v.n}</span><span className="h-px flex-1 bg-black/10"/><span className="text-[10px] font-black tracking-widest text-[#12372A]/40">{v.title.toUpperCase()}</span></div>
                <h3 className="serif font-black text-2xl text-[#12372A] mt-3">{v.title}</h3>
                <p className="mt-3 text-[13.5px] leading-6 text-black/60 font-medium">{v.desc}</p>
                <ul className="mt-4 space-y-2">{v.bullets.map(b=> <li key={b} className="flex items-center gap-2 text-xs font-semibold text-black/70"><span className="w-1.5 h-1.5 rounded-full" style={{background:v.color}}/>{b}</li>)}</ul>
                <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full opacity-0 group-hover:opacity-100 transition" style={{background:v.color}}/>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & founder */}
        <div className="mt-8 grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="bg-[#12372A] rounded-[28px] p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/5 blur-2xl"/>
            <div className="relative flex gap-4"><Quote size={32} className="text-[#C9A86A] shrink-0 opacity-80"/><div><p className="serif text-[18px] md:text-[23px] leading-7 font-semibold">“We exist to democratize global opportunity — making a Band 7.5+ not a privilege, but a personal, achievable plan for every Bangladeshi student.”</p><div className="mt-6 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=15" className="w-11 h-11 rounded-full object-cover border-2 border-white/20" alt=""/><div><div className="font-bold text-sm leading-none">Founder, SAGE Education</div><div className="text-xs text-white/60">Dhaka • Since 2018</div></div></div></div></div>
          </div>
          <div className="bg-white border border-black/5 rounded-[28px] p-6 flex flex-col justify-center">
            <div className="grid grid-cols-3 divide-x divide-black/5 text-center">{[{v:"40k+",l:"Test Takers / Year"},{v:"1,200+",l:"Band 7.5+ Achievers"},{v:"4.9★",l:"Google Rating"}].map(s=> <div key={s.v} className="px-2"><div className="serif font-black text-2xl text-[#12372A]">{s.v}</div><div className="text-[11px] font-bold text-black/50">{s.l}</div></div>)}</div>
            <div className="mt-6 bg-[#FDF8F0] rounded-2xl p-4 border border-black/5">
              <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#12372A]"><Heart size={12} className="text-[#D97342]"/> WHY STUDENTS STAY</div>
              <ul className="mt-3 space-y-2 text-sm font-medium text-black/65"><li>• Mentor replies in &lt; 5 minutes, even at midnight</li><li>• Free re-take of any module you miss</li><li>• Alumni visa & SOP circle — pay it forward</li></ul>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-8 bg-white rounded-[28px] border border-black/5 p-6 md:p-8">
          <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-[#12372A] text-white grid place-items-center"><GraduationCap size={18}/></div><h3 className="serif font-black text-xl text-[#12372A]">Meet the Mentors</h3><span className="ml-auto text-xs font-black tracking-widest bg-[#FDF8F0] border border-black/5 px-3 py-1.5 rounded-full">Band 9 • BC Certified</span></div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {["https://i.pravatar.cc/200?img=11","https://i.pravatar.cc/200?img=32","https://i.pravatar.cc/200?img=16"].map((img,i)=> (
              <div key={i} className="bg-[#FDF8F0] rounded-2xl p-4 border border-black/5 flex gap-4 items-center">
                <img src={img} className="w-16 h-16 rounded-2xl object-cover" alt=""/>
                <div><div className="font-black text-[#12372A]">{["Rafiq Hasan","Sarah Karim","Imran Chowdhury"][i]}</div><div className="text-xs font-bold text-[#D97342]">{["Writing & Reading • Band 9","Speaking • BC Examiner","Listening • IDP Certified"][i]}</div><div className="text-xs text-black/50 mt-1">{["1,800+ students to 7.5+","Cambridge Speaking labs","Prediction accuracy 94%"][i]}</div></div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center"><Link to="/courses" className="inline-flex items-center gap-2 bg-[#D97342] text-white px-6 py-3 rounded-full font-black text-sm">Meet Your Mentor — Explore Courses <Award size={14}/></Link></div>
        </div>

        <div className="py-10 flex justify-center"><Link to="/assessment" className="inline-flex items-center gap-2 bg-[#12372A] text-white px-8 py-4 rounded-full font-black">Find My Perfect Course <Users size={16}/></Link></div>
      </div>
    </div>
  )
}
