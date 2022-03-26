import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVhaBwL0oeEbmHgJoPUUtdxcOIiz_RBnw",
  authDomain: "projectmanagerstudent.firebaseapp.com",
  projectId: "projectmanagerstudent",
  storageBucket: "projectmanagerstudent.appspot.com",
  messagingSenderId: "663929776014",
  appId: "1:663929776014:web:2246e669013457f547e6df",
  measurementId: "G-EDEG4QXQ37"
};	
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      console.log(user);
    }
  } catch (err) {
    console.log("a");
  }
};

export default firebaseConfig;