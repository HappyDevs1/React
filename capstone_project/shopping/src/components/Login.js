import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className='form-group'>
        <label>Username</label>
        <input className='input-element' placeholder='username'/>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input className='input-element' placeholder='password'/>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login;