import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { EnvProps } from '../../@types/env'

const envVariables = process.env as EnvProps

const firebaseConfig = {
  apiKey: envVariables.FIREBASE_API_KEY,
  authDomain: envVariables.FIREBASE_PROJECT_ID,
  projectId: envVariables.FIREBASE_PROJECT_ID,
  storageBucket: envVariables.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envVariables.FIREBASE_MESSAGING_SENDER_ID,
  appId: envVariables.FIREBASE_APP_ID,
  measurementId: envVariables.FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()