import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-night">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-fog md:flex-row md:px-8">
        <p>Mariam Ehab — AI, Data Science &amp; AI Automation</p>
        <a
          href="#home"
          className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center gap-2 rounded-lg border border-cream/15 px-3 py-2 text-cream/85 transition-colors hover:border-cream hover:text-cream"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          Top
        </a>
      </div>
    </footer>
  )
}
