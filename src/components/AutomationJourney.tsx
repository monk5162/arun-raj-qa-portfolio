import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Circle, ArrowDown } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { automationRoadmap } from '../data/content'

const statusConfig = {
  complete: { icon: CheckCircle2, color: 'text-emerald-400', ring: 'border-emerald-400/40' },
  'in-progress': { icon: Loader2, color: 'text-accent-cyan', ring: 'border-accent-cyan/40' },
  upcoming: { icon: Circle, color: 'text-gray-500', ring: 'border-gray-600/30' },
}

export default function AutomationJourney() {
  return (
    <Section id="automation" className="bg-space-navy/30">
      <SectionHeading
        eyebrow="Automation Journey"
        title="From Manual Mastery to Automated Pipelines"
        description="A clear, deliberate roadmap toward becoming a well-rounded automation-capable QA Engineer."
      />

      <div className="max-w-md mx-auto flex flex-col items-center">
        {automationRoadmap.map((step, i) => {
          const config = statusConfig[step.status as keyof typeof statusConfig]
          const Icon = config.icon

          return (
            <div key={step.label} className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`w-full glass-panel rounded-2xl p-5 flex items-center gap-4 border ${config.ring} ${
                  step.status === 'in-progress' ? 'shadow-glow' : ''
                }`}
              >
                <Icon
                  size={22}
                  className={`${config.color} flex-shrink-0 ${
                    step.status === 'in-progress' ? 'animate-spin-slow' : ''
                  }`}
                />
                <div>
                  <p className="font-display font-semibold text-white text-sm">{step.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{step.detail}</p>
                </div>
                {step.status === 'in-progress' && (
                  <span className="ml-auto text-xs font-mono text-accent-cyan px-2 py-1 rounded-full bg-accent-cyan/10 flex-shrink-0">
                    Active
                  </span>
                )}
              </motion.div>

              {i < automationRoadmap.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  className="py-2 text-accent-cyan/40"
                >
                  <ArrowDown size={18} />
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
