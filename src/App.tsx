import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Assessment from './pages/Assessment'
import Mocks from './pages/Mocks'
import Verify from './pages/Verify'
import Roadmap from './pages/Roadmap'
import Contact from './pages/Contact'
import Enroll from './pages/Enroll'
import { useAppStore } from './store/useAppStore'
import { MessageCircle, ArrowRight } from 'lucide-react'

function ScrollToTop(){
  const { pathname } = useLocation()
  useEffect(()=>{ window.scrollTo({top:0, behavior:'smooth'}) }, [pathname])
  return null
}

function Toast(){
  const { toast, setToast } = useAppStore()
  useEffect(()=>{
    if(toast){
      const t = setTimeout(()=> setToast(null), 3000)
      return ()=> clearTimeout(t)
    }
  }, [toast, setToast])
  return (
    <AnimatePresence>
      {toast && (
        <motion.div initial={{y:-80, opacity:0}} animate={{y:0, opacity:1}} exit={{y:-80, opacity:0}} className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-[#12372A] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold max-w-[90vw]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"/> <span className="truncate">{toast}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ScrollProgress(){
  const { scrollYProgress } = useScroll()
  return <motion.div className="fixed top-0 inset-x-0 h-1 bg-[#D97342] origin-left z-[60]" style={{scaleX: scrollYProgress}} />
}

function Layout(){
  const loc = useLocation()
  return (
    <div className="min-h-screen bg-[#FDF8F0] text-[#1A1A1A] overflow-x-hidden selection:bg-[#12372A] selection:text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        *{font-family: 'Plus Jakarta Sans', 'Inter', sans-serif}
        h1,h2,h3,.serif{font-family: 'Playfair Display', serif}
        ::-webkit-scrollbar{width:6px;height:6px} ::-webkit-scrollbar-thumb{background:#12372A;border-radius:999px} ::-webkit-scrollbar-track{background:#FDF8F0}
      `}</style>
      <ScrollProgress/>
      <ScrollToTop/>
      <Nav/>
      <AnimatePresence mode="wait">
        <motion.main key={loc.pathname} initial={{opacity:0, y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.35, ease:[0.16,1,0.3,1]}}>
          <Routes location={loc}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/courses/:id" element={<CourseDetail/>} />
            <Route path="/assessment" element={<Assessment/>} />
            <Route path="/mocks" element={<Mocks/>} />
            <Route path="/verify" element={<Verify/>} />
            <Route path="/roadmap" element={<Roadmap/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/enroll" element={<Enroll/>} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer/>
      <Toast/>
      {/* Sticky WhatsApp + scroll top */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
        <motion.a href="https://wa.me/8801790476222" target="_blank" whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="bg-[#25D366] text-white pl-2 pr-4 py-2 rounded-full shadow-[0_12px_32px_rgba(37,211,102,0.4)] flex items-center gap-2 font-black text-sm">
          <span className="w-8 h-8 rounded-full bg-white text-[#25D366] grid place-items-center"><MessageCircle size={16} fill="#25D366"/></span> Chat on WhatsApp
        </motion.a>
        <button onClick={()=> window.scrollTo({top:0, behavior:'smooth'})} className="hidden md:grid w-10 h-10 rounded-full bg-[#12372A] text-white place-items-center shadow-xl hover:bg-black transition">
          <ArrowRight size={16} className="-rotate-90"/>
        </button>
      </div>
    </div>
  )
}

export default function App(){
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  )
}
