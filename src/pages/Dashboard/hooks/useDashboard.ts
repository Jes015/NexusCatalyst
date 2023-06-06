import { auth, db } from '@src/firebase/firebase.config'
import { type TItems } from '@src/types'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { CSectionsName } from '../constants'

export const useItemsData = () => {
  const [itemsData, setItemsData] = useState<TItems>()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.uid == null) return

      const docId = currentUser.uid
      const docReference = doc(db, `/Items/${docId}`)

      onSnapshot(docReference, (snapshot) => {
        if (snapshot.exists()) {
          setItemsData(snapshot.data())
        } else {
          setDoc(docReference, { [CSectionsName.Home]: [], [CSectionsName.Integrations]: [], [CSectionsName.RecommendedApps]: [], [CSectionsName.ToDo]: [] })
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    })
  }, [])

  return { itemsData }
}
