// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCS6cLFu5t_9g1XVM5rnhpZHC_iKqBwVbI",
  authDomain: "social-media-app-39464.firebaseapp.com",
  projectId: "social-media-app-39464",
  storageBucket: "social-media-app-39464.appspot.com",
  messagingSenderId: "650422207855",
  appId: "1:650422207855:web:9b1335f48d61f419cf149a",
  measurementId: "G-9MTL0MNEJJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const logIn = async (email:string, password:string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};
export const register= async (
  name:string,
  email:string,
  password:string,
  intersets:Array<string>,
  profilePicture:string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      displayName: name,
      intersets: intersets,
      email: email,
      photoURL: profilePicture,
    });
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};
export const logout = () => {
  signOut(auth);
  console.log("logged out successfully");
};

// Firebase folder structure should be better
// firebase
//    > firebaseConfig.ts
//    > authService.ts
//    > postService.ts
//    ....
// 
