import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { bugTrackerEntries } from '../data/content'

const levelColors: Record<string, string> = {
  CRITICAL: 'text-red-400',
  HIGH: 'text-orange-400',
  MEDIUM: 'text-yellow-400',
  RESOLVED: 'text-emerald-400',
}

function TerminalLine({ entry, delay }: { entry: (typeof bugTrackerEntries)[number]; delay: number }) {
  const fullText = `[${entry.level}] ${entry.title} — ${entry.description}`
  const [text, setText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setText(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(interval)
    }, 18)
    return () => clearInterval(interval)
  }, [started, fullText])

  const levelLength = entry.level.length + 2
  const levelPart = text.slice(0, levelLength)
  const restPart = text.slice(levelLength)

  return (
    <div className="font-mono text-sm leading-relaxed">
      <span className={levelColors[entry.level] ?? 'text-gray-300'}>{levelPart}</span>
      <span className="text-gray-300">{restPart}</span>
      {started && text.length < fullText.length && (
        <span className="inline-block w-2 h-4 bg-accent-cyan ml-1 animate-blink align-middle" />
      )}
    </div>
  )
}

export default function BugTracker() {
  return (
    <Section id="bug-tracker">
      <SectionHeading
        eyebrow="Bug Tracker Terminal"
        title="Live Defect Log"
        description="A simulated terminal view of the kinds of defects identified, triaged, and resolved during recent testing cycles."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="glass-panel-strong rounded-2xl overflow-hidden max-w-3xl"
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-5 py-3 bg-space-navy/80 border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex items-center gap-2 ml-3 text-xs font-mono text-gray-500">
            <Terminal size={13} />
            bug-tracker — defect-log.sh
          </div>
        </div>

        {/* Terminal body */}
        <div className="p-5 lg:p-6 space-y-3 min-h-[180px]">
          <p className="font-mono text-xs text-gray-500 mb-2">$ tail -f defect-log.sh</p>
          {bugTrackerEntries.map((entry, i) => (
            <TerminalLine key={entry.title} entry={entry} delay={i * 1200} />
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
