import { authContext } from './'

export const AuthContextProvider = ({ children }: { children?: JSX.Element }) => {
  const user = { name: 'user', login: false }
  return <authContext.Provider value={user}> {children} </authContext.Provider>
}
