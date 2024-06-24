
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyD68H4ltlxnRT1APkqcGWkABIfZ5mO0F_I",
    authDomain: "netflixgpt-4690a.firebaseapp.com",
    projectId: "netflixgpt-4690a",
    storageBucket: "netflixgpt-4690a.appspot.com",
    messagingSenderId: "292415212",
    appId: "1:292415212:web:5f0906121024768baea7c9",
    measurementId: "G-SF8RH57HGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);