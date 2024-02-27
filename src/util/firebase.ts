// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const getHeaders = async (): Promise<Headers> => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        throw new Error("No ha iniciado sesión")
    }
    const token = await currentUser.getIdToken()
    const autorization = `Bearer ${token}`
    const headers = new Headers({
        Authorization: autorization,
        "Content-Type": "application/json",
    })
    return headers
}

export const singInWithGoogle = () => {
    return signInWithPopup(auth, new GoogleAuthProvider())
}
