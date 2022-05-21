// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8faT-f2aZUg1ehHaRcZ270qseKED71aU",
  authDomain: "doctor-home-99ee2.firebaseapp.com",
  projectId: "doctor-home-99ee2",
  storageBucket: "doctor-home-99ee2.appspot.com",
  messagingSenderId: "560379928171",
  appId: "1:560379928171:web:4cfc01f6629238a4975b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth