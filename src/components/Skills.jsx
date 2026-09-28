import { Code2, BarChart3, Brain, Sparkles, Workflow, Globe, Database, Rocket, Wrench, FlaskConical, Layers } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import skills from '../data/skills.js'

const iconMap = {
  Programming: Code2,
  'Data Science': BarChart3,
  'Machine Learning': Brain,
  'AI & Generative AI': Sparkles,
  'AI Automation': Workflow,
  'Web / App Development': Globe,
  Databases: Database,
  'Deployment & Development': Rocket,
  Tools: Wrench,
  Testing: FlaskConical,
  Other: Layers,
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="// 02. Skills"
          title="Technical Skills"
          description="Technologies and practices from my coursework, training, and project work."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = iconMap[group.category] || Layers
            return (
              <Reveal key={group.category} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#10101E] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-semibold text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
