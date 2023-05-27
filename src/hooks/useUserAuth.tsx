// React
import { useEffect, useState } from 'react'

// Types
import type { IUser } from '../types'

// Services
import { logIn, logOut, register } from '../services/user.service'

// Firebase
import { browserLocalPersistence, onAuthStateChanged, setPersistence } from 'firebase/auth'
import { auth } from '../firebase.config'

export const useUserAuth = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const [sessionLoading, setSessionLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          setUser(currentUser as IUser)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setSessionLoading(false)
        })
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

  const logOutUser = () => {
    logOut(auth)
      .catch(() => {
        console.log('Something went bad')
      })
  }

  return { user, registerUser, logInUser, logOutUser, sessionLoading }
}
