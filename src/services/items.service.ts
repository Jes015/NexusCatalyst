import { auth, db } from '@src/firebase/firebase.config'
import { type TSections } from '@src/pages/Dashboard/types/Section.types'
import { type IItem } from '@src/types'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const firestorePath = '/Items/'

const addItem = async (item: IItem, sectionName: TSections) => {
  if (auth.currentUser?.uid == null) return

  const userId = auth.currentUser.uid
  const documentReference = doc(db, firestorePath + userId)

  try {
    await updateDoc(documentReference, {
      [sectionName]: arrayUnion(item)
    })

    return true
  } catch (err) {
    console.error(err)
    return err
  }
}

const removeItem = async (item: IItem, sectionName: TSections) => {
  if (auth.currentUser?.uid == null) return

  const userId = auth.currentUser.uid
  const documentReference = doc(db, firestorePath + userId)

  try {
    await updateDoc(documentReference, {
      [sectionName]: arrayRemove(item)
    })

    return true
  } catch (err) {
    console.error(err)
    return err
  }
}

export { addItem, removeItem }
