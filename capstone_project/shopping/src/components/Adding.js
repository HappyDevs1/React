import React, { useState } from 'react';
import Layout from './Layout';
import Footer from './Footer';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Adding({ loggedIn }) {
  const [user] = useAuthState(auth);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      console.error("No user is signed in.");
      return;
    }

    const product = {
      name: productName,
      quantity: quantity,
      price: price,
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, "users", user.uid, "products"), product);
      console.log("Product added successfully!");
      // Clear form fields after successful addition
      setProductName("");
      setQuantity("");
      setPrice("");
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <div>
      <Layout loggedIn={loggedIn} />
      <div className="element-container">
        <h1>Add new product</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product name</label>
            <input
              placeholder='product name'
              className='input-element'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              placeholder='quantity'
              className='input-element'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              placeholder='price'
              className='input-element'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-warning">
            Add
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Adding;
