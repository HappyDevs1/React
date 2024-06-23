import React from 'react';
import Layout from './Layout';
import Footer from './Footer'

function Adding() {
  return (
    <div>
      <Layout />
      <div>
        <h1>Grocery List</h1>
        <input placeholder='product name'/>
        <div>
        <input placeholder='quantity'/>
        <select />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Adding;