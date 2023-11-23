// firebase.js
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDptRLtJjWJ5_DU2x0WeKif5OKXYj8AWoQ",
    authDomain: "yaswanth-panguluri-ats-10562.firebaseapp.com",
    projectId: "yaswanth-panguluri-ats-10562",
    storageBucket: "yaswanth-panguluri-ats-10562.appspot.com",
    messagingSenderId: "590067682496",
    appId: "1:590067682496:web:853233cbb65d53a81eb125",
    measurementId: "G-1GWB3HTVCE"
  };

const app = initializeApp(firebaseConfig);

export { app };
