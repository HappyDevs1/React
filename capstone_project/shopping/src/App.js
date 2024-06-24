import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Adding from "./components/Adding";
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
      </BrowserRouter>
    </div>
  );
}

export default App;
