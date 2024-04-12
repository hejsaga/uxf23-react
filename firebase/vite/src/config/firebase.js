import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

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

const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

async function fetchAllDocuments(uid) {
  const allTodos = [];
  const todosRef = collection(db, "users", uid, "todos");

  const todosSnapshot = await getDocs(todosRef);
  todosSnapshot.forEach((doc) => {
    allTodos.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return allTodos;
}

fetchAllDocuments();
