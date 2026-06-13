import { motion } from 'framer-motion'
import { Building2, MapPin, Calendar } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where the Testing Happens"
        description="Real-world QA cycles across mobile and web platforms — from defect discovery to verified resolution."
      />

      <div className="grid lg:grid-cols-2 gap-6">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-panel rounded-2xl p-6 lg:p-8 hover:border-accent-cyan/30 hover:shadow-glow transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} className="text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-white">{job.role}</h3>
                  <p className="text-sm text-accent-cyan">{job.company}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-5 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {job.period}
              </span>
            </div>

            <div className="hud-line mb-5" />

            <ul className="space-y-2.5">
              {job.highlights.map((h) => (
                <li key={h} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan/60 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
