import { RecruiterModeProvider } from './hooks/useRecruiterMode'
import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import CommandCenter from './components/CommandCenter'
import Experience from './components/Experience'
import Projects from './components/Projects'
import QAArtifacts from './components/QAArtifacts'
import BugTracker from './components/BugTracker'
import AutomationJourney from './components/AutomationJourney'
import ApiTesting from './components/ApiTesting'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RecruiterModeToggle from './components/RecruiterModeToggle'

export default function App() {
  return (
    <RecruiterModeProvider>
      <div className="relative min-h-screen">
        <AmbientBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <CommandCenter />
          <Experience />
          <Projects />
          <QAArtifacts />
          <BugTracker />
          <AutomationJourney />
          <ApiTesting />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <RecruiterModeToggle />
      </div>
    </RecruiterModeProvider>
  )
}
