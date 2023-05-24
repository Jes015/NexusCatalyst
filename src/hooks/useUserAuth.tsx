// Types
import type { IUser } from '../types'

// Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'

export const useUserAuth = () => {
  const user: IUser = { name: 'user', password: 'false' }

  const createUser = async (user: string, password: string) => {
    return await new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, user, password)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
    })
  }

  const signIn = async (user: string, password: string) => {
    return await new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, user, password)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
    })
  }

  const signOut = () => {}

  return { user, createUser, signIn, signOut }
}
