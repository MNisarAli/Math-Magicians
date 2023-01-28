import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>Math Magicians</h2>
    <ul className="nav-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="calculator">Calculator</Link>
      </li>
      <li>
        <Link to="quotes">Quotes</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
