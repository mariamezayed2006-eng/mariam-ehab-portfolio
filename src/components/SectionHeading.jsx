import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-10 max-w-3xl md:mb-12">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-relaxed text-slate-400">{description}</p> : null}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-violet-500/60 via-violet-500/10 to-transparent" />
    </Reveal>
  )
}
