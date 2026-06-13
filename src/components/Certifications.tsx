import { motion } from 'framer-motion'
import { Award, ShieldCheck } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <Section id="certifications" className="bg-space-navy/30">
      <SectionHeading
        eyebrow="Certifications"
        title="Verified Credentials"
        description="Professional simulations and certifications that extend the QA skill set beyond functional testing."
      />

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="relative glass-panel-strong rounded-2xl p-6 lg:p-8 hover:shadow-glow transition-all overflow-hidden"
          >
            {/* HUD corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent-cyan/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent-cyan/30 rounded-br-2xl" />

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                <Award size={22} className="text-accent-cyan" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-white">{cert.title}</h3>
                <p className="text-sm text-accent-cyan">{cert.issuer}</p>
              </div>
            </div>

            <p className="text-xs font-mono text-gray-500 mb-4">{cert.date}</p>

            <div className="hud-line mb-4" />

            <ul className="space-y-2">
              {cert.highlights.map((h) => (
                <li key={h} className="text-sm text-gray-400 flex items-start gap-2">
                  <ShieldCheck size={15} className="text-accent-cyan/60 flex-shrink-0 mt-0.5" />
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
