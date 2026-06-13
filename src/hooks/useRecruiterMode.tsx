import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface RecruiterModeContextType {
  recruiterMode: boolean
  toggleRecruiterMode: () => void
}

const RecruiterModeContext = createContext<RecruiterModeContextType | undefined>(undefined)

export function RecruiterModeProvider({ children }: { children: ReactNode }) {
  const [recruiterMode, setRecruiterMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (recruiterMode) {
      root.classList.add('recruiter-mode')
    } else {
      root.classList.remove('recruiter-mode')
    }
  }, [recruiterMode])

  const toggleRecruiterMode = () => setRecruiterMode((prev) => !prev)

  return (
    <RecruiterModeContext.Provider value={{ recruiterMode, toggleRecruiterMode }}>
      {children}
    </RecruiterModeContext.Provider>
  )
}

export function useRecruiterMode() {
  const context = useContext(RecruiterModeContext)
  if (!context) {
    throw new Error('useRecruiterMode must be used within RecruiterModeProvider')
  }
  return context
}
