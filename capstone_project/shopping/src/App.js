import React from "react";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Adding from "./components/Adding";
import ProductsList from './components/ProductsList';
import "./App.css";
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/adding">
          <Adding />
        </Route>
        <Route path="/user/products">
          <ProductsList />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
