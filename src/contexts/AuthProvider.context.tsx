import { authContext } from '@src/contexts'
import { auth } from '@src/firebase/firebase.config'
import { useUserAuth } from '@src/hooks/'

export const AuthContextProvider = ({ children }: { children?: JSX.Element }) => {
  const { logInUser, logOutUser, user, sessionLoading } = useUserAuth({ auth })

  return <authContext.Provider value={{ user, logInUser, logOutUser, sessionLoading }}> {children} </authContext.Provider>
}
