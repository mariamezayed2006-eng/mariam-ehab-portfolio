import { User, Compass } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const strengths = [
  'Fast learner',
  'Problem solving',
  'Teamwork',
  'Time management',
  'Active listening',
  'Communication',
  'Detail-oriented',
  'Patient',
  'Adaptable',
  'Comfortable learning new technologies',
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="// 01. About"
          title="About Me"
          description="Computer Science student focused on turning AI concepts into working, practical projects."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                  <User size={18} />
                </span>
                <h3 className="text-lg font-semibold text-white">Background</h3>
              </div>
              <p className="leading-relaxed text-slate-400">
                I&apos;m a 2nd-year Computer Science student at the Egyptian Chinese University,
                specializing in Artificial Intelligence, Data Science, and AI Automation.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                I&apos;m interested in building practical AI-powered solutions, data-driven
                applications, intelligent agents, and automation systems — learning by building
                real projects rather than studying theory alone.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                  <Compass size={18} />
                </span>
                <h3 className="text-lg font-semibold text-white">Current Direction</h3>
              </div>
              <p className="leading-relaxed text-slate-400">
                My main interests are AI Automation, Data Science, Machine Learning, Generative AI,
                and AI Agents. I&apos;m building a portfolio around practical AI applications and
                preparing for freelance opportunities involving data analysis, machine learning, AI
                automation, and AI-powered tools.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
