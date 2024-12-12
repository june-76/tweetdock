import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCVWjd24_JdRmKIQLhpPxYEwYveUJrC-f0",
    authDomain: "tweetdock-48bbf.firebaseapp.com",
    projectId: "tweetdock-48bbf",
    storageBucket: "tweetdock-48bbf.firebasestorage.app",
    messagingSenderId: "718408251093",
    appId: "1:718408251093:web:bb8f639f122f6cfbdb545c",
    measurementId: "G-0SD7YL1BXF",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
