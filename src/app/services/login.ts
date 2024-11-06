import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, AuthProvider } from "firebase/auth"
import { auth } from "./firebase"

type ProviderType = "google" | "facebook"

const login = async (providerName: ProviderType = "google") => {
  let AuthProvider;

  if(providerName === "facebook") {
    AuthProvider = FacebookAuthProvider
  } else {
    AuthProvider = GoogleAuthProvider
  }

  const provider = new AuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)
    const credential = AuthProvider.credentialFromResult(result)

    const token = credential?.accessToken
    const user = result.user

    console.log(token)
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

export default login