


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
firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();