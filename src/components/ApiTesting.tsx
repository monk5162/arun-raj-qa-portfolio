import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { apiTestingCards } from '../data/content'

const methodColors: Record<string, string> = {
  GET: 'text-emerald-400 bg-emerald-400/10',
  POST: 'text-accent-cyan bg-accent-cyan/10',
  PUT: 'text-amber-400 bg-amber-400/10',
  DELETE: 'text-red-400 bg-red-400/10',
}

export default function ApiTesting() {
  return (
    <Section id="api-testing">
      <SectionHeading
        eyebrow="API Testing"
        title="Request, Validate, Assert"
        description="Postman-style validations covering response codes, schema checks, and assertion logic — with room to plug in real collections."
      />

      <div className="grid sm:grid-cols-2 gap-5">
        {apiTestingCards.map((card, i) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-panel rounded-2xl p-5 hover:border-accent-cyan/30 hover:shadow-glow transition-all font-mono"
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                  methodColors[card.method] ?? 'text-gray-400 bg-gray-400/10'
                }`}
              >
                {card.method}
              </span>
              <span className="text-xs text-emerald-400">{card.status} OK</span>
            </div>
            <p className="text-sm text-white font-semibold mb-2 font-display">{card.name}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{card.description}</p>
          </motion.div>
        ))}

        {/* Placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="glass-panel rounded-2xl p-5 border-dashed border-2 border-accent-cyan/15 flex flex-col items-center justify-center text-center min-h-[140px] sm:col-span-2"
        >
          <Upload size={20} className="text-accent-cyan/50 mb-2" />
          <p className="text-sm text-gray-400 font-mono">Postman collections coming soon</p>
        </motion.div>
      </div>
    </Section>
  )
}
