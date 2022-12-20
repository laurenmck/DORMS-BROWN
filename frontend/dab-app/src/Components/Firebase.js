// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut,setPersistence,browserSessionPersistence} from "firebase/auth";
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
export const auth = getAuth(app);
export const signedIn = false;
export const storage = getStorage(app);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    hd: "brown.edu"
});

export const signInWithGoogle = () =>{
    // setPersistence(auth, browserSessionPersistence)
    //     .then(() => {
    //         console.log("session");
    //     })
    //     .catch((error) => {
    //         console.log("ERROR: "+error);
    //     });

    signInWithPopup(auth,provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profPic = result.user.photoURL;

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("photo",profPic);

        console.log(result);
    }).catch((error) => {
        console.log("ERROR:"+error);
    })
}

export const signOutWithGoogle = () =>{
    signOut(auth).then(() => {
        localStorage.clear();
        console.log("Sign out successful");
    }).catch((error)=> {
            console.log("ERROR: "+error);
        });
}