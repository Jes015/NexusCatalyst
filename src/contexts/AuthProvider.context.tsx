// Custom hooks
import { useUserAuth } from '../hooks/'

// Context
import { authContext } from './'

// Firebase config
import { auth } from '../firebase.config'

export const AuthContextProvider = ({ children }: { children?: JSX.Element }) => {
  const { registerUser, logInUser, logOutUser, user, sessionLoading } = useUserAuth({ auth })

  return <authContext.Provider value={{ user, registerUser, logInUser, logOutUser, sessionLoading }}> {children} </authContext.Provider>
}
