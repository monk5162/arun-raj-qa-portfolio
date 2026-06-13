import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 lg:py-28 px-6 lg:px-10 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 lg:mb-16"
    >
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-400 max-w-2xl text-base lg:text-lg">{description}</p>
      )}
      <div className="hud-line mt-6 max-w-xs" />
    </motion.div>
  )
}
