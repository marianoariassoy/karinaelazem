import { useState, createContext } from 'react'

export const Context = createContext(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lan, setLan] = useState<string>('es')
  const imagesstatics = 'http://localhost/sites/karina-backend/images-static'

  return <Context.Provider value={{ lan, setLan, imagesstatics }}>{children}</Context.Provider>
}
