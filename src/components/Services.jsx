import { Sprout, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import services from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="// 06. Services"
          title="What I'm Working Toward"
          description="Areas I'm building skills in for future freelance work — not established client services."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service} delay={(i % 3) * 70}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300">
                  <Sprout size={16} />
                </span>
                <p className="text-[15px] font-medium text-slate-200">{service}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            Currently focused on building practical projects first
            <ArrowRight size={15} className="text-cyan-300" />
            <a href="#projects" className="font-medium text-violet-300 hover:text-violet-200">
              see featured work
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
