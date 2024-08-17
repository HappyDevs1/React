import React, { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  };
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Todo App</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
