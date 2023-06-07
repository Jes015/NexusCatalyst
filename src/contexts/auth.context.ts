import { type IUser } from '@src/types'
import { type AuthProvider } from 'firebase/auth'
import { createContext, useContext } from 'react'

interface IContext {
  user: IUser | null
  logInUser: (provider: AuthProvider) => Promise<unknown>
  logOutUser: () => void
  sessionLoading: boolean
}

const authContext = createContext<IContext>({})

const useAuthContext = () => useContext(authContext)

export { authContext, useAuthContext }
