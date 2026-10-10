import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

function Cross({ className = '' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className={className} aria-hidden="true">
      <path d="M7 0v14M0 7h14" stroke="#949AB1" strokeWidth="1.2" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-cream/10 pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-wash absolute inset-0" />
        <div className="bg-grid-faint mask-fade-edges absolute inset-0" />
        <Cross className="absolute left-[8%] top-28 hidden opacity-70 md:block" />
        <Cross className="absolute right-[12%] top-40 hidden opacity-70 md:block" />
        <Cross className="absolute bottom-24 right-[38%] hidden opacity-70 lg:block" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <Reveal>
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-fog">
            <span className="inline-block h-px w-10 bg-mauve" aria-hidden="true" />
            Mariam Ehab — AI · Data Science · Automation
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-cream md:text-6xl">
            Turning AI and data into
            <br />
            <span className="text-mauve">practical solutions.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
            I focus on machine learning, data analysis, and automation — building
            models, analysis tools, and AI agents that solve concrete problems,
            from preprocessing and evaluation to tested, usable software.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-cream px-7 py-3 font-semibold text-night transition-colors hover:bg-mauve"
            >
              Let&apos;s Connect
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-[48px] items-center justify-center gap-1.5 text-sm font-semibold text-fog transition-colors hover:text-cream sm:justify-start"
            >
              See selected work
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rotate-45 border border-lav bg-night"
      />
    </section>
  )
}
