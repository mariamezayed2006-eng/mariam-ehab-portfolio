import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import journey from '../data/journey.js'

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
    <section id="about" className="relative scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-dots-faint pointer-events-none absolute -right-10 top-10 hidden h-72 w-72 opacity-70 [mask-image:radial-gradient(closest-side,black,transparent)] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-cream/75 md:text-lg">
              I work on applied artificial intelligence: machine learning, data analysis,
              and automation. I focus on complete, working systems — clean preprocessing,
              evaluated models, tested code, and usable interfaces — and I learn by
              building rather than by theory alone.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 flex flex-wrap gap-2">
              {strengths.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/85"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 border-t border-cream/10 pt-8">
              <span aria-hidden="true" className="mb-4 block h-1 w-10 bg-mauve/70" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream">
                Background
              </h3>
              <p className="mt-3 font-semibold text-cream">{journey.education.title}</p>
              <p className="mt-1 leading-relaxed text-cream/75">{journey.education.detail}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
