import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import projects from '../data/projects.js'

/**
 * Data-driven section: maps over `projects` array.
 * Numbering is automatic via the map index.
 * Scales to 5, 6, 10+ projects with no component changes.
 */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="// 03. Projects — Featured Work"
          title="Projects"
          description="My main evidence of practical skills — complete, working applications across machine learning, data analysis, and AI agents."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 100}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
