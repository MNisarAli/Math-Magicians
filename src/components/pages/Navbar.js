import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>Math Magicians</h2>
    <ul className="nav-list">
      <li>
        <NavLink exact="true" to="/" activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator" activeClassName="active">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quotes" activeClassName="active">Quotes</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
