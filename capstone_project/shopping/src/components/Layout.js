import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children, logIn }) => {
  const loginText = (props) => {
    if (props.logIn === false) {
      console.log("Not logged in")
    } else {
      console.log("Logged in")
    }
  }
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom bg-warning">
          <div className="container">
            <a className="navbar-brand" href="#">Grocery App</a>
          </div>
          <div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className='nav-link'>Home</div>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
            <div className='nav-link'>Register</div>
            </Link>
          </li>
          <li>
            <Link to="/login" style={{ textDecoration: 'none' }}>
            <div className='nav-link'>{loginText()}</div>
            </Link>
          </li>
        </ul>
      </div>
        </nav>
      </header>
      <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
