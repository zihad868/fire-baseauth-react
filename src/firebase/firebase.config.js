// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTVjyPNiUuaFm8rW1oZR469QLFXimF1Ik",
  authDomain: "auth-react-9da90.firebaseapp.com",
  projectId: "auth-react-9da90",
  storageBucket: "auth-react-9da90.appspot.com",
  messagingSenderId: "137367507700",
  appId: "1:137367507700:web:04775397e830fc9a75c4a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;