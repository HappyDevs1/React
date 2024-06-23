// Login.js
import React, { useState } from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in as:", userCredential.user);
      setLoggedIn(true);
      history.push("/adding")
    } catch (error) {
      console.error("Error logging in:", error);
    }
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Layout loggedIn={loggedIn} />
      <div className="element-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              type="email"
              className="input-element"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
              className="input-element"
              placeholder="password"
            />
          </div>
          <button type="submit" className="bg-warning">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
