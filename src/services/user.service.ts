import { signInWithPopup, signOut, type Auth, type AuthProvider } from 'firebase/auth'

const logIn = async (auth: Auth, provider: AuthProvider) => {
  return (await signInWithPopup(auth, provider))
}

const logOut = async (auth: Auth) => {
  await signOut(auth)
}

export { logIn, logOut }
