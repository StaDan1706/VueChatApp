import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from "firebase/app";

loadFonts()

const firebaseConfig = {
    apiKey: "AIzaSyDjZk-KhSRtcPcWl6yi-gR5xC_I7ANmiQE",
    authDomain: "chatapp-c02f9.firebaseapp.com",
    databaseURL: "https://chatapp-c02f9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatapp-c02f9",
    storageBucket: "chatapp-c02f9.appspot.com",
    messagingSenderId: "586992265067",
    appId: "1:586992265067:web:94c5c75ba6fa83825f4e2e",
    measurementId: "G-6ZNHHHS444"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
.use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')
