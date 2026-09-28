import { GraduationCap, BookOpenCheck } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import journey from '../data/journey.js'

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="// 04. Education" title="Education" />
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl border border-violet-500/25 bg-violet-500/[0.06] p-6 md:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white">
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="font-semibold text-white">{journey.education.title}</h3>
              <p className="mt-1.5 leading-relaxed text-slate-400">{journey.education.detail}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Training() {
  return (
    <section id="training" className="scroll-mt-20 border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="// 05. Training & Activities"
          title="Training & Activities"
          description="Courses, clubs, and applied training supporting my AI and data science direction."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {journey.training.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="flex h-full items-start gap-3.5 rounded-2xl border border-white/10 bg-[#10101E] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                  <BookOpenCheck size={18} />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
