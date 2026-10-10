import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import skills from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden border-t border-cream/10 bg-deepslate/20">
      <div aria-hidden="true" className="bg-dots-faint mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Technologies and practices from my coursework, training, and project work."
        />
        <Reveal>
          <div className="divide-y divide-cream/10 rounded-xl border border-cream/10 bg-night/60">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-3 px-5 py-5 md:flex-row md:items-start md:gap-6 md:px-7">
                <h3 className="min-w-44 text-sm font-semibold text-cream">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cream/10 bg-cream/[0.06] px-3 py-1 text-[13px] font-medium text-cream"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
