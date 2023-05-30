import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

<<<<<<< HEAD



=======
>>>>>>> 2b7382c93548073baed4c63b25fcf27451e72d2c
const firebaseConfig = {
    apiKey: import.meta.env.VITE_VUE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_VUE_APP_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_VUE_APP_FIREBASE_PROJECT_ID + "appspot.com",
    messagingSenderId: import.meta.env.VITE_VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_VUE_APP_FIREBASE_MESSAGING_APP_ID,
    measurementId: import.meta.env.VITE_VUE_APP_FIREBASE_MESSAGING_MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);



const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app);

export { auth, database }
