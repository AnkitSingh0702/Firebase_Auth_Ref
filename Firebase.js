import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCGMZSKL_xOYN6vSGloUcr23He3hfpZf_s",
    authDomain: "learning-e6739.firebaseapp.com",
    projectId: "learning-e6739",
    storageBucket: "learning-e6739.appspot.com",
    messagingSenderId: "412936179780",
    appId: "1:412936179780:web:7922cf8801640604df6c11"
  };
  const app = initializeApp(firebaseConfig); 
  export const auth = getAuth(app); 