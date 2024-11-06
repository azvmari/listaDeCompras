import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, provider } from "./firebase"

type ProviderType = "google" | "facebook"

const login = (providerName: ProviderType = "google") => {
  if (providerName === "google") {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result)
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user

        console.log(token)
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default login