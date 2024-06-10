import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5RHjgym-VD7Pz5VzqeqCf5SmSwQULYT0",
  authDomain: "test-project-f8572.firebaseapp.com",
  projectId: "test-project-f8572",
  storageBucket: "test-project-f8572.appspot.com",
  messagingSenderId: "842312810259",
  appId: "1:842312810259:web:2683fa6ed9dc929c4524e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
