import { Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import projects from '../data/projects.js'
import contact from '../data/contact.js'

/**
 * Data-driven section: maps over `projects` array.
 * Numbering is automatic via the map index.
 * Scales to 5, 6, 10+ projects with no component changes.
 *
 * Note: per-project `github` fields in the data are currently empty,
 * so cards show no per-project repo buttons (nothing invented).
 * The profile link below uses the genuine GitHub URL from contact data.
 */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-cream/10 bg-deepslate/20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Complete, working applications across machine learning, data analysis, and AI agents."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 100}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <a
            href={contact.githubHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-lav/60 bg-transparent px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-cream"
          >
            <Code2 size={16} />
            More code on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
