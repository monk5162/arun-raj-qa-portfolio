import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, FolderOpenDot, Mail, Github, ScanLine } from 'lucide-react'
import { personalInfo } from '../data/content'
import { useMousePosition } from '../hooks/useAnimations'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const mouse = useMousePosition()

  // Typewriter effect cycling through roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const pauseAtFull = 1800
    const pauseAtEmpty = 400

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAtFull)
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length)
      }, pauseAtEmpty)
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Mouse-responsive glow position (percent of viewport)
  const glowX = typeof window !== 'undefined' ? (mouse.x / window.innerWidth) * 100 : 50
  const glowY = typeof window !== 'undefined' ? (mouse.y / window.innerHeight) * 100 : 50

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 lg:px-10 pt-24 pb-16 overflow-hidden"
    >
      {/* Mouse-responsive glow */}
      <div
        className="ambient-effect pointer-events-none absolute inset-0 -z-10 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(94,231,255,0.08), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left: text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="section-eyebrow !text-gray-300">Available for QA opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05]"
          >
            ARUN RAJ
            <br />
            <span className="gradient-text">N.P</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 h-9 flex items-center"
          >
            <span className="font-mono text-lg sm:text-xl text-accent-cyan">
              {displayText}
              <span className="inline-block w-[2px] h-5 bg-accent-cyan ml-1 animate-blink align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-gray-400 text-base lg:text-lg max-w-xl leading-relaxed"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-white font-medium text-sm shadow-glow-blue hover:bg-accent-blue/90 hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-panel text-gray-200 font-medium text-sm hover:border-accent-cyan/40 transition-all hover:-translate-y-0.5"
            >
              <FolderOpenDot size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-panel text-gray-200 font-medium text-sm hover:border-accent-cyan/40 transition-all hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-panel text-gray-200 font-medium text-sm hover:border-accent-cyan/40 transition-all hover:-translate-y-0.5"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: avatar / HUD panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm aspect-square"
        >
          {/* Outer rotating ring */}
          <div className="ambient-effect absolute inset-0 rounded-full border border-accent-cyan/20 animate-spin-slow" />
          <div className="ambient-effect absolute inset-4 rounded-full border border-dashed border-accent-blue/20" />

          {/* Glass panel avatar placeholder */}
          <div className="absolute inset-8 rounded-full glass-panel-strong flex items-center justify-center overflow-hidden shadow-glow">
            {/* Replace this div with an <img src="/your-photo.jpg" /> for a personal photo */}
            <div className="relative w-full h-full flex items-center justify-center">
              <ScanLine size={64} className="text-accent-cyan/60" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/10 to-transparent" />
              {/* Scan line animation */}
              <div className="ambient-effect absolute left-0 right-0 h-px bg-accent-cyan/50 animate-scan" style={{ top: '50%' }} />
            </div>
          </div>

          {/* Floating HUD cards */}
          <motion.div
            className="ambient-effect absolute -left-6 top-8 glass-panel rounded-xl px-4 py-2 text-xs font-mono text-accent-cyan shadow-glow"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            STATUS: TESTING
          </motion.div>
          <motion.div
            className="ambient-effect absolute -right-4 bottom-12 glass-panel rounded-xl px-4 py-2 text-xs font-mono text-accent-blue shadow-glow"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            BUGS FOUND: 0
          </motion.div>
          <motion.div
            className="ambient-effect absolute left-1/2 -bottom-6 -translate-x-1/2 glass-panel rounded-xl px-4 py-2 text-xs font-mono text-white shadow-glow"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            QA READY
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
