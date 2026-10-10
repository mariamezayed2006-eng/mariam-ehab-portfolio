import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-cream/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Direction" title="What I'm Working Toward" />
        <Reveal>
          <p className="max-w-3xl text-base leading-relaxed text-cream/80 md:text-lg">
            I&apos;m currently deepening my work in AI automation and LLM-powered
            applications — agent workflows, prompt engineering, and model deployment —
            alongside stronger foundations in data analysis and machine learning.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
