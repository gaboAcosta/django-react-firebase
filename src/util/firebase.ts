// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcEAh8_1ubBfOOau5y8uouMNiZXudvwMc",
    authDomain: "django-react-firebase-ae183.firebaseapp.com",
    projectId: "django-react-firebase-ae183",
    storageBucket: "django-react-firebase-ae183.appspot.com",
    messagingSenderId: "681210263108",
    appId: "1:681210263108:web:b43b72c44b3d7400f5ee11",
    measurementId: "G-T4SEQX46G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);