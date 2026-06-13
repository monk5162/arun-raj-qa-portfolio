import { motion } from 'framer-motion'
import { CheckSquare, ClipboardList, Wrench, Globe } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { skillCategories } from '../data/content'

const icons = [CheckSquare, ClipboardList, Wrench, Globe]

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A QA Toolkit Built for Reliability"
        description="From manual testing fundamentals to the tools and practices that keep delivery teams shipping confidently."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl p-6 hover:border-accent-cyan/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-accent-cyan" />
              </div>
              <h3 className="font-display font-semibold text-base text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-gray-400 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
