import { createContext, useContext } from 'react'
import { type IUser } from '../types'

interface IContext {
  user: IUser
  signIn: (username: string, password: string) => Promise<unknown>
  createUser: (username: string, password: string) => Promise<unknown>
}

const authContext = createContext<IContext>({})

const useAuthContext = () => useContext(authContext)

export { authContext, useAuthContext }
