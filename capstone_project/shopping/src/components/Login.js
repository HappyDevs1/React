import React, { useState } from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event
      .preventDefault()
      .then(() => {
        const userCredential = signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Logged in as:", userCredential.user);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  }

  return (
    <div>
      <Layout />
      <div className="element-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={(event) => {
                setEmail(event.target.event);
              }}
              value={email}
              type="email"
              className="input-element"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={(event) => {
                setPassword(event.target.event);
              }}
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
