import { db } from '@src/firebase/firebase.config'
import { doc, getDoc } from 'firebase/firestore'

const getUserItems = async (collectionName: string, uid: string) => {
  const documentReference = doc(db, collectionName, uid)
  const documentSnapshot = await getDoc(documentReference)
  let documentData = null
  if (documentSnapshot.exists()) {
    documentData = documentSnapshot.data()
  }

  return documentData
  // const adaptedItems = adaptItem(documentSnapshot)
}

export { getUserItems }
