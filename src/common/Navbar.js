import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("false");
  const [isLogin, setIsLogin] = useState();
  const [UserName, setUserName] = useState();
  const toggleMenu = () => {
    
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-menu-button">
          {isMenuOpen ? (
            <FontAwesomeIcon
              className="OpenIcon"
              onClick={toggleMenu}
              icon={faBars}
            />
          ) : (
            <FontAwesomeIcon
              className="OpenIcon"
              onClick={toggleMenu}
              icon={faX}
            />
          )}
        </div>
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
        <div className="FirstMenu">
          <ul className={!isMenuOpen ? "nav-menu" : "nav-menu active"}>
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
          </ul>

          <NavLink to="/login" className="nav-links LoginLink">
            {isLogin ? "Login" : "{ UserName }"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
