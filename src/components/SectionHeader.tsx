import { ReactNode } from 'react'
export default function SectionHeader({ eyebrow, title, highlight, desc, children }: { eyebrow?: string, title: string, highlight?: string, desc?: string, children?: ReactNode}){
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        {eyebrow && <div className="inline-flex items-center gap-2 bg-[#12372A] text-white px-4 py-1.5 rounded-full text-[11px] font-black tracking-[1.5px]">{eyebrow}</div>}
        <h2 className="serif font-black text-[30px] md:text-[44px] leading-[0.9] tracking-tight text-[#12372A] mt-4">{title} {highlight && <span className="text-[#D97342]">{highlight}</span>}</h2>
        {desc && <p className="max-w-md text-[14px] leading-6 text-black/55 font-medium mt-3">{desc}</p>}
      </div>
      {children}
    </div>
  )
}
