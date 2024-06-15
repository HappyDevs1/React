import React from 'react';
import Layout from './Layout';
import Footer from './Footer';

function Main() {
  return (
    <div>
      <Layout />
      <div className='element-container'>
      <h1>Welcome to the Shopping Calculator</h1>
      <p>This is the app to assist you when shopping, <br />The objective of this app is to assist people in <br /> ensuring that they plan before making shopping <br /> This project aim to ensure that the money that a <br /> has planned to spend at the shop is exactly <br /> how much the user spend. This promote good spending <br /> behaviour by the user and maximize their savings.</p>
      </div>
    </div>
  )
}

export default Main;