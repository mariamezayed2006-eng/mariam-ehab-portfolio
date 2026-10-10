import { Mail, Code2, Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import contact from '../data/contact.js'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: contact.emailHref,
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: contact.githubLabel,
    href: contact.githubHref,
  },
  {
    icon: Briefcase,
    label: 'LinkedIn',
    value: contact.linkedinLabel,
    href: contact.linkedinHref,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-cream/10 bg-deepslate/20">
      <div aria-hidden="true" className="bg-pinstripe-faint mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="For internships, collaboration, or project inquiries, reach me directly:"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {contacts.map((c, i) => {
            const Icon = c.icon
            const isExternal = c.href.startsWith('http')
            return (
              <Reveal key={c.label} delay={i * 80}>
                <a
                  href={c.href}
                  {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="block rounded-xl border border-cream/10 bg-night/60 p-6 text-center transition-colors hover:border-lav"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-cream/10 text-mauve">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-3 font-semibold text-cream">{c.label}</h3>
                  <p className="mt-1.5 break-all font-mono text-sm text-cream/85">{c.value}</p>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
