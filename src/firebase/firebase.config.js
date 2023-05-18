// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbbVHbRQvqEatR0tfQuKhJEWHxm9dH8KE",
    authDomain: "toy-marketplace-10467.firebaseapp.com",
    projectId: "toy-marketplace-10467",
    storageBucket: "toy-marketplace-10467.appspot.com",
    messagingSenderId: "1012313224274",
    appId: "1:1012313224274:web:8200dc0b106be87f619b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;