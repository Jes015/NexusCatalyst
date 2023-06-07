// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_DhEB_EJlAeXlexzO4tLXSZtV8WHXp8Q',
  authDomain: 'nexus-catalyst.firebaseapp.com',
  projectId: 'nexus-catalyst',
  storageBucket: 'nexus-catalyst.appspot.com',
  messagingSenderId: '41827086052',
  appId: '1:41827086052:web:8c6abc93bee91cff0e86f1'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
