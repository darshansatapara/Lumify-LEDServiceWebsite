import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div>
          <NavLink to="/">
            <img
              src="logoes/flogo.jpeg"
              className="navbar-logo"
              alt="Your Company Logo"
            />
          </NavLink>
        </div>
        <div className="username">Hello! User</div>
        <button className="nav-menu-button" onClick={toggleMenu}>
        menu
        </button>

        <div className="FirstMenu">
          <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink to="/" className="nav-links" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="nav-links"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="nav-links"
                onClick={toggleMenu}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookservice"
                className="nav-links"
                onClick={toggleMenu}
              >
                Book Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bestproducts"
                className="nav-links"
                onClick={toggleMenu}
              >
                Best Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-links" onClick={toggleMenu}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mybookings"
                className="nav-links"
                onClick={toggleMenu}
              >
                My Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-links" onClick={toggleMenu}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
