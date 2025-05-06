import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "juanitaexpress-37e02.firebaseapp.com",
    databaseURL: "https://juanitaexpress-37e02-default-rtdb.firebaseio.com",
    projectId: "juanitaexpress-37e02",
    storageBucket: "juanitaexpress-37e02.appspot.com",
    messagingSenderId: "299379190774",
    appId: "1:299379190774:web:3f15f36c1d220f8a82b5d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database, signInWithPhoneNumber, RecaptchaVerifier, ref, get };