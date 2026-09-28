import { Mail, Code2, Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mariam.ezayed2006@gmail.com',
    href: 'mailto:mariam.ezayed2006@gmail.com',
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'github.com/mariamezayed2006-eng',
    href: 'https://github.com/mariamezayed2006-eng',
  },
  {
    icon: Briefcase,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mariam-ehab-895342339',
    href: 'https://www.linkedin.com/in/mariam-ehab-895342339/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="// 07. Contact"
          title="Let's Connect"
          description="I'm preparing for freelance-direction work in data analysis, machine learning, AI automation, and AI-powered tools."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {contacts.map((c, i) => {
            const Icon = c.icon
            const isExternal = c.href.startsWith('http')
            return (
              <Reveal key={c.label} delay={i * 80}>
                <a
                  href={c.href}
                  {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="block rounded-2xl border border-violet-500/25 bg-violet-500/[0.04] p-6 text-center transition-colors hover:border-violet-400/60 hover:bg-violet-500/[0.08]"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{c.label}</h3>
                  <p className="mt-1.5 break-all font-mono text-sm text-violet-200">{c.value}</p>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
