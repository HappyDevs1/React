import React, { useState } from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(event) {
    event
      .preventDefault()
      .then(() => {
        const userCredential = createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User created: ", userCredential.user);
      })
      .catch(() => {
        console.log("Error signing up user");
      });
  }
  return (
    <div>
      <Layout />
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
              value={email}
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
