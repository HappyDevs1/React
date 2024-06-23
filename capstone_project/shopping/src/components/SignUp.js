// SignUp.js
import React, { useState } from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  async function handleSignUp(event) {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created: ", userCredential.user);
      setRegistered(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error signing up user:", error);
    }
  }

  return (
    <div>
      <Layout registered={registered} />
      <div className="element-container">
        <h1>Create account</h1>
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
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
                setPassword(event.target.value);
              }}
              value={password}
              type="password"
              className="input-element"
              placeholder="password"
            />
          </div>
          <button className="bg-warning" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
