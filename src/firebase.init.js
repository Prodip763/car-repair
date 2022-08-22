// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9GFCtURFV5U6KzJSI9RJf-9A_yk8ntCA",
  authDomain: "car-services-25de3.firebaseapp.com",
  projectId: "car-services-25de3",
  storageBucket: "car-services-25de3.appspot.com",
  messagingSenderId: "281446241781",
  appId: "1:281446241781:web:7365802e3674fab758bcbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;