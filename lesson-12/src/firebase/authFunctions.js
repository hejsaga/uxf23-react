import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const createUser = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  if (res.user) {
    await updateProfile(auth.currentUser, {
      displayName: "test",
    });
  }
  // return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
  return auth.signOut();
};
