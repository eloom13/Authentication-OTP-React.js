// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVmCBOnZhtjtxoSu3_GypVx1y_aVqW6qU",
  authDomain: "auth-development-1a35a.firebaseapp.com",
  projectId: "auth-development-1a35a",
  storageBucket: "auth-development-1a35a.appspot.com",
  messagingSenderId: "697529033534",
  appId: "1:697529033534:web:0780d6b4f52222c45b426f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;