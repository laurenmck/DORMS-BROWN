// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrdAyREJC4XLqCZKQK-R6iZO0OVTgrHTg",
    authDomain: "cs32-aff78.firebaseapp.com",
    projectId: "cs32-aff78",
    storageBucket: "cs32-aff78.appspot.com",
    messagingSenderId: "623767962146",
    appId: "1:623767962146:web:de31a63545ace4d521007b",
    measurementId: "G-R14ZZE078X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
