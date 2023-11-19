
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStore } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyB0SLRAFY2s6ZNG41tnLiMUFO_gRgk7idM",
  authDomain: "ecoedventures-55dc3.firebaseapp.com",
  projectId: "ecoedventures-55dc3",
  storageBucket: "ecoedventures-55dc3.appspot.com",
  messagingSenderId: "244095951812",
  appId: "1:244095951812:web:d5a025c9c9a9a1abb97a91",
  measurementId: "G-FFNN9DK57P"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseStorage = getStore(firebaseApp);

export {app, auth, firebaseStorage }