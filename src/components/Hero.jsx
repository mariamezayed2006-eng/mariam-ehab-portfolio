import { useState } from 'react'
import { ArrowDown, FolderGit2, Bot } from 'lucide-react'
import Reveal from './Reveal.jsx'

const focusAreas = ['AI Automation', 'Data Science', 'Machine Learning', 'Generative AI', 'AI Agents']

function AvatarSlot() {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 ring-2 ring-violet-500/20 md:h-32 md:w-32"
        aria-hidden="true"
      >
        <Bot size={30} className="text-violet-300" />
      </div>
    )
  }

  return (
    <img
      src="/avatar.png"
      alt="Mariam Ehab — custom 2D avatar"
      width={128}
      height={128}
      className="h-24 w-24 rounded-full object-cover ring-2 ring-violet-500/40 md:h-32 md:w-32"
      onError={() => setMissing(true)}
    />
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/3 h-96 w-[42rem] rounded-full bg-violet-700/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <Reveal>
          <AvatarSlot />
        </Reveal>
        <div className="mt-7">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
              AI • Data Science • AI Automation
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
              Mariam Ehab
            </h1>
            <p className="mt-3 text-2xl font-bold leading-snug text-white md:text-3xl">
              Building Practical <span className="text-violet-300">AI-Powered Solutions</span>
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              Focused on data-driven applications, intelligent agents, and automation systems that
              solve real problems.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-500"
              >
                <FolderGit2 size={18} />
                View My Projects
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-violet-400/50 hover:bg-violet-500/10"
              >
                Get in Touch
                <ArrowDown size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
