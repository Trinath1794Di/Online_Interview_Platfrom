
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "online-interview-3eaff.firebaseapp.com",
  projectId: "online-interview-3eaff",
  storageBucket: "online-interview-3eaff.firebasestorage.app",
  messagingSenderId: "44664506082",
  appId: "1:44664506082:web:8a1ac4ae87a5540fd240bb"
};
  

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}







// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "online-interview-3eaff.firebaseapp.com",
//   projectId: "online-interview-3eaff",
//   storageBucket: "online-interview-3eaff.firebasestorage.app",
//   messagingSenderId: "44664506082",
//   appId: "1:44664506082:web:8a1ac4ae87a5540fd240bb"
// };




// authDomain: "interviewiq-ba6ba.firebaseapp.com",
//   projectId: "interviewiq-ba6ba",
//   storageBucket: "interviewiq-ba6ba.firebasestorage.app",
//   messagingSenderId: "862159592601",
//   appId: "1:862159592601:web:7308d702cd708076ddec08"
// };