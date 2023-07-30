// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe80K-YYqXeQHWbbLnTWxQsmeT7zahX_I",
  authDomain: "todo-app-ft-75b25.firebaseapp.com",
  projectId: "todo-app-ft-75b25",
  storageBucket: "todo-app-ft-75b25.appspot.com",
  messagingSenderId: "136428485832",
  appId: "1:136428485832:web:4074488a8efab08f3df9fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
