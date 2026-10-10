import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-10 max-w-3xl md:mb-12">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-fog">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-cream md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-relaxed text-cream/75">{description}</p> : null}
    </Reveal>
  )
}
