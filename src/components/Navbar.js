import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <h2>Math Magicians</h2>
      <nav>
        <button className={`menu_btn ${isOpen ? 'menu_btn_active' : ''}`} type="button" onClick={toggleMenu}>
          <span />
        </button>

        <ul className={`menu_box ${isOpen ? 'menu_box_open' : ''}`}>
          <li>
            <NavLink exact="true" to="/" activeclassname="active" className="menu_item" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/calculator" activeclassname="active" className="menu_item" onClick={toggleMenu}>
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes" activeclassname="active" className="menu_item" onClick={toggleMenu}>
              Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
