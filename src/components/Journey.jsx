import { BookOpenCheck, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import journey from '../data/journey.js'

export function Training() {
  return (
    <section id="training" className="scroll-mt-20 border-t border-cream/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Training"
          title="Training & Activities"
          description="Courses, clubs, and applied training supporting my AI and data science direction."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journey.training.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="flex h-full items-start gap-3.5 rounded-xl border border-cream/10 bg-deepslate/25 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream/10 text-mauve">
                  <BookOpenCheck size={18} />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold leading-snug text-cream">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 underline decoration-lav/70 underline-offset-4 transition-colors hover:text-mauve"
                      >
                        {item.title}
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  {item.detail ? (
                    <p className="mt-1 text-sm leading-relaxed text-cream/70">{item.detail}</p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
