// React
import { useEffect, useState } from 'react'

import { logIn, logOut } from '@src/services/'
import type { IUser } from '@src/types'
import { browserLocalPersistence, onAuthStateChanged, setPersistence, type Auth, type AuthProvider } from 'firebase/auth'

interface IParams {
  auth: Auth
}

export const useUserAuth = ({ auth }: IParams) => {
  if (auth == null) throw new Error('Auth is missing')

  const [user, setUser] = useState<IUser | null>(null)
  const [sessionLoading, setSessionLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
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
  }, [auth])

  const logInUser = async (provider: AuthProvider) => {
    return await new Promise((resolve, reject) => {
      logIn(auth, provider)
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

  return { user, logInUser, logOutUser, sessionLoading }
}
