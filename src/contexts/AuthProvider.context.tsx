// Custom hooks
import { useUserAuth } from '../hooks/'

// Context
import { authContext } from './'

export const AuthContextProvider = ({ children }: { children?: JSX.Element }) => {
  const { registerUser, logInUser, logOutUser, user, sessionLoading } = useUserAuth()

  return <authContext.Provider value={{ user, registerUser, logInUser, logOutUser, sessionLoading }}> {children} </authContext.Provider>
}
