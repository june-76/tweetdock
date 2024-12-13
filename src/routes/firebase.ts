import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC6w9GYopJMLy_f22DGhW7zzD68pV7vwzM",
    authDomain: "tweetdock-96171.firebaseapp.com",
    projectId: "tweetdock-96171",
    storageBucket: "tweetdock-96171.firebasestorage.app",
    messagingSenderId: "534020399506",
    appId: "1:534020399506:web:ccd61d3120a57f681aa14b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
