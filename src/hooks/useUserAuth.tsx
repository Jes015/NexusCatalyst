// React
import { useEffect, useState } from 'react'

// Types
import type { IUser } from '../types'

// Services
import { logIn, logOut, register } from '../services/user.service'

// Firebase
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'

export const useUserAuth = () => {
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser as IUser)
    })
  }, [])
  const registerUser = async (email: string, password: string) => {
    return await new Promise((resolve, reject) => {
      register(auth, email, password)
        .then(() => {
          resolve('User registered')
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  const logInUser = async (email: string, password: string) => {
    return await new Promise((resolve, reject) => {
      logIn(auth, email, password)
        .then(() => {
          resolve('User logged')
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  const logOutUser = async () => {
    await logOut(auth)
  }

  return { user, registerUser, logInUser, logOutUser }
}
