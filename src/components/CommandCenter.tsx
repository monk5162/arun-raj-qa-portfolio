import { motion } from 'framer-motion'
import { FolderCheck, Briefcase, Smartphone, Rocket } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { useCountUp } from '../hooks/useAnimations'

const icons = [FolderCheck, Briefcase, Smartphone, Rocket]

function StatCard({
  icon: Icon,
  label,
  value,
  display,
  delay,
}: {
  icon: typeof FolderCheck
  label: string
  value: number
  display?: string
  delay: number
}) {
  const { count, ref } = useCountUp(value, 1400)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="glass-panel-strong rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-glow transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
        <Icon size={22} className="text-accent-cyan" />
      </div>
      <div className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-2">
        {display ?? count}
      </div>
      <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{label}</p>
    </motion.div>
  )
}

export default function CommandCenter() {
  return (
    <Section id="command-center" className="bg-space-navy/30">
      <SectionHeading
        eyebrow="QA Command Center"
        title="Live Status Dashboard"
        description="A real-time snapshot of testing experience to date — and where the journey is headed next."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard icon={icons[0]} label="Projects Tested" value={4} delay={0} />
        <StatCard icon={icons[1]} label="Internships" value={2} delay={0.1} />
        <StatCard icon={icons[2]} label="Testing Domains" value={2} display="Mobile + Web" delay={0.2} />
        <StatCard icon={icons[3]} label="Automation Journey" value={0} display="In Progress" delay={0.3} />
      </div>
    </Section>
  )
}
