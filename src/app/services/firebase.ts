import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBcxc47awFmBpmFtRLjtRNJSpCzPQhVe9U",
  authDomain: "lista-compras-mari.firebaseapp.com",
  projectId: "lista-compras-mari",
  storageBucket: "lista-compras-mari.firebasestorage.app",
  messagingSenderId: "147946335625",
  appId: "1:147946335625:web:c8ee4cf664bbceda9fc558",
  measurementId: "G-4MTN2MP4SB"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)