import { ReactNode, createContext, useState, Dispatch } from 'react'

type NewType = Dispatch<boolean>

interface ContextInterface123 {
  localLanguage: boolean
  setLocalLanguage: NewType
}

export const LanguageContext = createContext<ContextInterface123>({
  localLanguage: true,
  setLocalLanguage: () => 0,
})

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [localLanguage, setLocalLanguage] = useState(true)
  return (
    <LanguageContext.Provider value={{ localLanguage, setLocalLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
