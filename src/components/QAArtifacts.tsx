import { motion } from 'framer-motion'
import { FileText, Bug, BookOpen, Clock } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { qaArtifacts } from '../data/content'

const icons = [FileText, Bug, BookOpen]

export default function QAArtifacts() {
  return (
    <Section id="qa-artifacts" className="bg-space-navy/30">
      <SectionHeading
        eyebrow="QA Artifacts"
        title="Documentation Hub"
        description="A Jira-style view into the test cases, bug reports, and QA documentation produced across projects. Live uploads coming soon."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {qaArtifacts.map((artifact, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={artifact.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden hover:border-accent-cyan/30 hover:shadow-glow transition-all"
            >
              {/* Jira-style header bar */}
              <div className="flex items-center gap-3 px-5 py-4 bg-space-navy/60 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  <Icon size={16} className="text-accent-cyan" />
                </div>
                <h3 className="font-display font-semibold text-sm text-white">{artifact.title}</h3>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{artifact.description}</p>
                <div className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg bg-accent-cyan/5 text-accent-cyan/70 border border-accent-cyan/10">
                  <Clock size={12} />
                  {artifact.status}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
