import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Smartphone, Globe2, Tag } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { projects } from '../data/content'

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Tested. Verified. Shipped."
        description="Four projects spanning mobile inventory systems, a warehouse web platform, and a full-stack academic application — each tested end-to-end."
      />

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const isOpen = expandedId === project.id
          const isMobile = project.subtitle.toLowerCase().includes('mobile')

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-2xl p-6 lg:p-7 hover:border-accent-cyan/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    {isMobile ? (
                      <Smartphone size={20} className="text-accent-cyan" />
                    ) : (
                      <Globe2 size={20} className="text-accent-cyan" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.overview}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan"
                  >
                    <Tag size={11} />
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setExpandedId(isOpen ? null : project.id)}
                className="flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-accent-electric transition-colors"
                aria-expanded={isOpen}
              >
                {isOpen ? 'Show less' : 'View testing details'}
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="hud-line my-4" />
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="section-eyebrow mb-1.5">Testing Scope</p>
                        <p className="text-gray-400 leading-relaxed">{project.scope}</p>
                      </div>
                      <div>
                        <p className="section-eyebrow mb-1.5">Key Contributions</p>
                        <ul className="space-y-1.5">
                          {project.contributions.map((c) => (
                            <li key={c} className="text-gray-400 flex items-start gap-2">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan/60 flex-shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="section-eyebrow mb-1.5">Challenge Solved</p>
                        <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
                      </div>
                      <div>
                        <p className="section-eyebrow mb-1.5">Lesson Learned</p>
                        <p className="text-gray-400 leading-relaxed">{project.lessons}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
