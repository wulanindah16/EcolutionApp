import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCM3J9PgYKz9_XN9EF9av2G86SeRe67N0I",
    authDomain: "ecolution-app-a5901.firebaseapp.com",
    projectId: "ecolution-app-a5901",
    storageBucket: "ecolution-app-a5901.firebasestorage.app",
    messagingSenderId: "217535606481",
    appId: "1:217535606481:web:a3e9d60c7a4fc9db1ddff0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
