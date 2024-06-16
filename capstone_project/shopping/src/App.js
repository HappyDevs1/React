import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Layout from './components/Layout';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Route exact path='/'>
      <Main />
      </Route>
      <Route path='/login'>
      <Login />
      </Route>
      <Route path='/signup'>
      <SignUp />
      </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;