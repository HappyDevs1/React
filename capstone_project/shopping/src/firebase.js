import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3N1Y8JVztPck6ygkQEyqiwtf5nD4WMTU",
  authDomain: "shopping-calculator-af399.firebaseapp.com",
  projectId: "shopping-calculator-af399",
  storageBucket: "shopping-calculator-af399.appspot.com",
  messagingSenderId: "261786743462",
  appId: "1:261786743462:web:92e1bd8e81bae01b647a67"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to add a product to Firestore
const addProduct = async (userId, product) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "products"), product);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { auth, db, addProduct };
