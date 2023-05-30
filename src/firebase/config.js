import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";


console.log("X")
console.log("2" + process.env.VITE_VUE_APP_FIREBASE_API_KEY)
console.log("3" + env.VITE_VUE_APP_FIREBASE_API_KEY )
console.log("4" + import.meta.env.VITE_VUE_APP_FIREBASE_API_KEY)
const firebaseConfig = {
    apiKey: process.env.VITE_VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VITE_VUE_APP_FIREBASE_PROJECT_ID + "firebaseapp.com",
    databaseURL:  "https://chatapp-c02f9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatapp-c02f9",
    storageBucket: process.env.VITE_VUE_APP_FIREBASE_PROJECT_ID + "appspot.com",
    messagingSenderId: "586992265067",
    appId: "1:586992265067:web:94c5c75ba6fa83825f4e2e",
    measurementId: "G-6ZNHHHS444"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app);

export { auth, database }
