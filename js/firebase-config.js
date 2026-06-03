// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCl9wUtF-6ckFeVooTfb98j9GguY-Gay4",
    authDomain: "success-coaching-centre-34d05.firebaseapp.com",
    projectId: "success-coaching-centre-34d05",
    storageBucket: "success-coaching-centre-34d05.firebasestorage.app",
    messagingSenderId: "1086236132931",
    appId: "1:1086236132931:web:b0b70a59d08423f9b5b6f6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
