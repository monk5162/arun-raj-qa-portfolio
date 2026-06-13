import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Sparkles, TrendingUp } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { aboutTimeline } from '../data/content'

const icons = [GraduationCap, Briefcase, Sparkles, TrendingUp]

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="From Foundations to Automation"
        description="A timeline of the academic and professional path shaping a quality-first mindset — and the clear direction toward automation testing ahead."
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-blue/30 to-transparent lg:-translate-x-1/2" />

        <div className="space-y-10">
          {aboutTimeline.map((item, i) => {
            const Icon = icons[i % icons.length]
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 lg:gap-0 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Icon node */}
                <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-panel-strong flex items-center justify-center shadow-glow z-10">
                  <Icon size={18} className="text-accent-cyan" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${
                    isEven ? 'lg:pr-0 lg:mr-auto lg:text-right' : 'lg:pl-0 lg:ml-auto'
                  }`}
                >
                  <div className="glass-panel rounded-2xl p-6 hover:border-accent-cyan/30 transition-colors">
                    <p className="section-eyebrow mb-2">{item.year}</p>
                    <h3 className="font-display font-semibold text-lg text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-accent-cyan mb-3">{item.org}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
