import { motion } from 'framer-motion'

/**
 * Ambient background: animated grid, floating gradient orbs, and floating dots.
 * Hidden entirely in Recruiter Mode via the .ambient-effect class + .recruiter-mode override.
 */
export default function AmbientBackground() {
  return (
    <div className="ambient-effect fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base color */}
      <div className="absolute inset-0 bg-space-black" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Gradient orb 1 */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-[420px] h-[420px] rounded-full bg-accent-blue/20 blur-[100px] animate-float"
      />

      {/* Gradient orb 2 */}
      <motion.div
        className="absolute bottom-[5%] right-[10%] w-[480px] h-[480px] rounded-full bg-accent-cyan/15 blur-[120px] animate-float-delay"
      />

      {/* Gradient orb 3 */}
      <motion.div
        className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full bg-accent-electric/10 blur-[90px] animate-pulse-slow"
      />

      {/* Floating dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent-cyan/30"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              animation: `float ${8 + (i % 5)}s ease-in-out infinite ${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-space-black/60" />
    </div>
  )
}
