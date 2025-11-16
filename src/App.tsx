import React from 'react';
import { Link } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
