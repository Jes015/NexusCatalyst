// Custom hooks
import { useUserAuth } from '../hooks/useUserAuth'

// Context
import { authContext } from './'

export const AuthContextProvider = ({ children }: { children?: JSX.Element }) => {
  const { createUser, signIn, user } = useUserAuth()

  return <authContext.Provider value={{ user, createUser, signIn }}> {children} </authContext.Provider>
}
