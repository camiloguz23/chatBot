import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDA2JS1FBJnbOfkyWarWhH5QD4vw5o8sgU",
    authDomain: "login-197b9.firebaseapp.com",
    projectId: "login-197b9",
    storageBucket: "login-197b9.appspot.com",
    messagingSenderId: "238090413269",
    appId: "1:238090413269:web:df5d1ef37c6ff98ce9ee5c"
  };
  
const config = initializeApp(firebaseConfig);

export const authLogin = () => {
    const auth = getAuth()
    const google = new GoogleAuthProvider()
    return signInWithPopup(auth,google)
}