import { personalInfo } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-display font-semibold text-white text-sm">{personalInfo.tagline}</p>
          <p className="text-xs text-gray-500 mt-1 font-mono">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-accent-cyan transition-colors">
            Email
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
