import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created: ", userCredential.user);

      setName("");
      setEmail("");
      setContacts("");
      setPassword("");

      return <p>User has been created, Please proceed to login</p>

      await navigate("/login");
    } catch (error) {
      console.error("Error signing up user:", error);
    }
  }

  return (
        <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
          <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
            <div className="flex-1 bg-blue-900 text-center hidden md:flex">
              <div
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
                }}
              ></div>
            </div>
           
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div className=" flex flex-col items-center">
              <form onSubmit={handleSubmit}>
                <div className="text-center">
                  <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                    Student Sign up
                  </h1>
                  <p className="text-[12px] text-gray-500">
                    Hey enter your details to create your account
                  </p>
                </div>
                <div className="w-full flex-1 mt-8">
                  <div className="mx-auto max-w-xs flex flex-col gap-4">
                    <input
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                      className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                    />
                    <input
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                      className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                    />
                    <input
                    onChange={(event) => {
                      setContacts(event.target.value);
                    }}
                      className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="tel"
                      placeholder="Enter your phone"
                      value={contacts}
                    />
                    <input
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                      className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="password"
                      placeholder="Password"
                      value={password}
                    />
                    <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" type="submit">
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Sign Up</span>
                    </button>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      Already have an account?{" "}
                      <a href="">
                        <span className="text-blue-900 font-semibold">Sign in</span>
                      </a>
                    </p>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Signup;