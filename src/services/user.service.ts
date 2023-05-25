import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type Auth } from 'firebase/auth'

const register = async (auth: Auth, email: string, password: string) => {
  return (await createUserWithEmailAndPassword(auth, email, password)).user
}

const logIn = async (auth: Auth, email: string, password: string) => {
  return (await signInWithEmailAndPassword(auth, email, password)).user
}

const logOut = async (auth: Auth) => {
  await signOut(auth)
}

export { register, logIn, logOut }
