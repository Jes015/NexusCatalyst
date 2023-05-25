// Custom hooks
import { useUserAuth } from '../hooks/'

// Context
import { authContext } from './'

export const AuthContextProvider = ({ children }: { children?: JSX.Element }) => {
  const { registerUser, logInUser, logOutUser, user } = useUserAuth()

  return <authContext.Provider value={{ registerUser, logInUser, logOutUser, user }}> {children} </authContext.Provider>
}
