// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3N1Y8JVztPck6ygkQEyqiwtf5nD4WMTU",
  authDomain: "shopping-calculator-af399.firebaseapp.com",
  projectId: "shopping-calculator-af399",
  storageBucket: "shopping-calculator-af399.appspot.com",
  messagingSenderId: "261786743462",
  appId: "1:261786743462:web:92e1bd8e81bae01b647a67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

//Save user data
const saveUserData = async (user) => {
  try {
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export { auth, db, saveUserData };