import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'
import Section, { SectionHeading } from './Section'
import { personalInfo } from '../data/content'

const contactItems = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personalInfo.linkedin },
  { icon: Github, label: 'GitHub', value: 'View repositories', href: personalInfo.github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // No backend configured — this opens the user's email client as a fallback.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'Website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Reliable Software Together"
        description="Open to QA opportunities, internships, and collaborations. Reach out directly or send a message below."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-panel-strong rounded-2xl p-6 lg:p-8 space-y-4"
        >
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-accent-cyan/40 hover:shadow-glow transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-cyan/10 transition-colors">
                <item.icon size={20} className="text-accent-cyan" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500">{item.label}</p>
                <p className="text-sm text-white font-medium">{item.value}</p>
              </div>
            </a>
          ))}
          <p className="text-xs text-gray-500 font-mono pt-2">
            Location: {personalInfo.location}
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-panel-strong rounded-2xl p-6 lg:p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <CheckCircle2 size={40} className="text-accent-cyan mb-4" />
              <p className="font-display font-semibold text-white text-lg mb-1">
                Opening your email client
              </p>
              <p className="text-sm text-gray-400">
                If it didn't open, email directly at {personalInfo.email}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-space-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-accent-cyan/50 transition-colors outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-space-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-accent-cyan/50 transition-colors outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-space-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-accent-cyan/50 transition-colors outline-none resize-none"
                  placeholder="Let's talk about an opportunity..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white font-medium text-sm shadow-glow-blue hover:bg-accent-blue/90 transition-colors"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
