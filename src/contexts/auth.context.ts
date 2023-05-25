import { createContext, useContext } from 'react'
import { type IUser } from '../types'

interface IContext {
  user: IUser
  logInUser: (username: string, password: string) => Promise<unknown>
  logOutUser: (username: string, password: string) => Promise<unknown>
  registerUser: (username: string, password: string) => Promise<unknown>
}

const authContext = createContext<IContext>({})

const useAuthContext = () => useContext(authContext)

export { authContext, useAuthContext }
