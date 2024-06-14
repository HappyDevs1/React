import React from 'react';
import Layout from './components/Layout';

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