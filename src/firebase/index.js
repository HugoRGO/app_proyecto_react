// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
initializeApp ({
    apiKey: "AIzaSyAUgZx2YJRkZfS83epctVV8QOwAtr3Z13k",
    authDomain: "appproyecto-4ac8c.firebaseapp.com",
    projectId: "appproyecto-4ac8c",
    storageBucket: "appproyecto-4ac8c.appspot.com",
    messagingSenderId: "297671497193",
    appId: "1:297671497193:web:8866f4c2a53ca2dbf82778"
});

export const db = getFirestore();