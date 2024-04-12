import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWcS9p_H3Qf74Sffn-r_o-N_vxtK3s0p4",
  authDomain: "uxf23-9d3c0.firebaseapp.com",
  projectId: "uxf23-9d3c0",
  storageBucket: "uxf23-9d3c0.appspot.com",
  messagingSenderId: "225696932817",
  appId: "1:225696932817:web:44444e43ee5f3037abb6f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function App() {
  const [count, setCount] = useState(0);

  async function fetchAllDocuments() {
    const allTodos = [];
    const posts = collection(db, "posts");

    const todosSnapshot = await getDocs(posts);
    todosSnapshot.forEach((doc) => {
      allTodos.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return allTodos;
  }

  useEffect(() => {
    fetchAllDocuments();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
