import { type IUser } from '@src/types'
import { createContext, useContext } from 'react'

interface IContext {
  user: IUser | null
  logInUser: (username: string, password: string) => Promise<unknown>
  registerUser: (username: string, password: string) => Promise<unknown>
  logOutUser: () => void
  sessionLoading: boolean
}

const authContext = createContext<IContext>({})

const useAuthContext = () => useContext(authContext)

export { authContext, useAuthContext }
