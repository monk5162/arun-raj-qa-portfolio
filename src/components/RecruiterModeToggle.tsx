import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, X } from 'lucide-react'
import { useRecruiterMode } from '../hooks/useRecruiterMode'

export default function RecruiterModeToggle() {
  const { recruiterMode, toggleRecruiterMode } = useRecruiterMode()

  return (
    <>
      <motion.button
        onClick={toggleRecruiterMode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm shadow-glow-blue transition-colors ${
          recruiterMode
            ? 'bg-accent-cyan text-space-black'
            : 'bg-accent-blue text-white hover:bg-accent-blue/90'
        }`}
        aria-pressed={recruiterMode}
      >
        {recruiterMode ? <X size={16} /> : <Briefcase size={16} />}
        {recruiterMode ? 'Exit Recruiter Mode' : 'Recruiter Mode'}
      </motion.button>

      <AnimatePresence>
        {recruiterMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 glass-panel-strong rounded-full px-5 py-2 text-xs font-mono text-accent-cyan"
          >
            Recruiter Mode active — concise view enabled
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
