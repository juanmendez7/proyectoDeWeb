import { getauth } from 'firebase/auth'
const auth = getauth()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0SLRAFY2s6ZNG41tnLiMUFO_gRgk7idM",
  authDomain: "ecoedventures-55dc3.firebaseapp.com",
  projectId: "ecoedventures-55dc3",
  storageBucket: "ecoedventures-55dc3.appspot.com",
  messagingSenderId: "244095951812",
  appId: "1:244095951812:web:d5a025c9c9a9a1abb97a91",
  measurementId: "G-FFNN9DK57P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);