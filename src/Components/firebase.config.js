// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBu-wBsAICbCSP5AW_-xf6MMQ2lviW3EQ",
  authDomain: "otp-login-web.firebaseapp.com",
  projectId: "otp-login-web",
  storageBucket: "otp-login-web.appspot.com",
  messagingSenderId: "734864864301",
  appId: "1:734864864301:web:91ba8d7d1480ee1fcb74a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);