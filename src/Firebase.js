import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBLvYgroab5iZaEYgPxnF5HvkBfS7d-msQ",
    authDomain: "chatbot-casper.firebaseapp.com",
    databaseURL: "https://chatbot-casper-default-rtdb.firebaseio.com",
    projectId: "chatbot-casper",
    storageBucket: "chatbot-casper.appspot.com",
    messagingSenderId: "196880717119",
    appId: "1:196880717119:web:055289edca660a75076f8a",
    measurementId: "G-ZLXFBMS11M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)