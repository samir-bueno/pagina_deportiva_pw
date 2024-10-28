// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw0ssH8c0-l_2HTRDyNCiA3nt9zgWXFFY",
  authDomain: "uniondepo-d4ff5.firebaseapp.com",
  projectId: "uniondepo-d4ff5",
  storageBucket: "uniondepo-d4ff5.appspot.com",
  messagingSenderId: "155148121868",
  appId: "1:155148121868:web:642d16718dc5da05ecbb29",
  measurementId: "G-1G6GLWM524",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
