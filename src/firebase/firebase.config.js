// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW9NGO4m_NQVNu8qGP5OyTtuRvoP-MFOs",
  authDomain: "event-managements-b1a26.firebaseapp.com",
  projectId: "event-managements-b1a26",
  storageBucket: "event-managements-b1a26.appspot.com",
  messagingSenderId: "785263810730",
  appId: "1:785263810730:web:9241f81569af24281318d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

export default auth;