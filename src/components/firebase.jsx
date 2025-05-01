
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCtYJR3FMJTil72fTczoWLlQfaEBKIGvdo",
  authDomain: "techshop-8fda5.firebaseapp.com",
  projectId: "techshop-8fda5",
  storageBucket: "techshop-8fda5.firebasestorage.app",
  messagingSenderId: "173141885533",
  appId: "1:173141885533:web:d5161c305b24b5b6bcc3b4",
  measurementId: "G-QCRWPYEHR4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
