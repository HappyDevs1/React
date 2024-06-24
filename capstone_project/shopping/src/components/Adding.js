import React from 'react';
import Layout from './Layout';
import Footer from './Footer';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Adding({loggedIn}) {
  const addProduct = async (userId, product) => {
    try {
      const docRef = await addDoc(collection(db, "users", userId, "products"), product);
      console.log("Document written with ID:", docRef.id)
    } catch (e) {
      console.error("Error adding document:", e)
    }
  }
  return (
    <div>
      <Layout loggedIn={loggedIn} />
      <div className="element-container">
        <h1>Add new product</h1>
        <form >
          <div className="form-group">
            <label>Product name</label>
            <input placeholder='product name' className='input-element'/>
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input placeholder='quantity' className='input-element'/>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input placeholder='price' className='input-element'/>
          </div>
          <button type="submit" className="bg-warning">
            Add
          </button>
        </form>
        <div class="table-responsive-sm">
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Adding;