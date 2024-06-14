import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom bg-primary">
          <div className="container">
            <a className="navbar-brand" href="#">Grocery App</a>
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
