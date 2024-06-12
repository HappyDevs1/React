import React from 'react';
import Layout from './Layout';
import Footer from './Footer'

function SignUp() {
  return (
    <div>
      <Layout/>
      <div className='element-container'>
        <h1>Create account</h1>
      <form>
        <div className='form-group'>
        <label>Username</label>
        <input className='input-element' placeholder='username'/>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input className='input-element' placeholder='password'/>
        </div>
        <button className='bg-warning' type='submit'>Submit</button>
      </form>
      </div>
      <Footer/>
    </div>
  )
}

export default SignUp;