import { createContext, useContext } from 'react'

interface IContext {
  name: string

}

const authContext = createContext<IContext | null>({ name: '' })

const useAuthContext = () => useContext(authContext)

export { authContext, useAuthContext }
