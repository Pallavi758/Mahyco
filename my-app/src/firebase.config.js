import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig={
    apiKey: "AIzaSyAZaJHgHEgX6mapS8zOfAEPfH-mLkuYAmE",
  authDomain: "otp-login-d7be6.firebaseapp.com",
  projectId: "otp-login-d7be6",
  storageBucket: "otp-login-d7be6.appspot.com",
  messagingSenderId: "558980936828",
  appId: "1:558980936828:web:5cde77226b32de9229c5f9",
  measurementId: "G-XHRX6H7J52"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


