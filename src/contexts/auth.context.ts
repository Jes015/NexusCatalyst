import { createContext, useContext } from 'react'

interface IContext {
  name: string

}

const authContext = createContext<IContext | null>({ name: '' })

const useAuthContext = () => {
  const context = useContext(authContext)
  return context
}

export { authContext, useAuthContext }
