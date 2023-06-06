import type { DocumentData, QuerySnapshot } from 'firebase/firestore'

const adaptItem = (response: QuerySnapshot<DocumentData>) => {
  const adaptedResponse = Object.entries(response.docs[0].data())[0][1]
  return adaptedResponse
}

export { adaptItem }
