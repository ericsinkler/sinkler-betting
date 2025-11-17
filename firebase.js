// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase/app";
import { getAnalytics } from "./firebase/analytics";
import { getAuth } from "./firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRrb7fTn_3EdEILPTZQv3n-JS2Epy2h_c",
  authDomain: "sinkler-betting.firebaseapp.com",
  projectId: "sinkler-betting",
  storageBucket: "sinkler-betting.firebasestorage.app",
  messagingSenderId: "739307560657",
  appId: "1:739307560657:web:bc03fbd047f0a7544aeff0",
  measurementId: "G-9MS4KS48XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);