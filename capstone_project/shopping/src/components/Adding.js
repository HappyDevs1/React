import React from 'react';
import Layout from './Layout';
import Footer from './Footer'

function Adding({loggedIn}) {
  
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