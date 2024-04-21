import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// import client from "./axios/axiosFile";
import { useAuth } from "../context/UserContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user,logOut } = useAuth();
  const navigate = useNavigate();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    logOut();
    navigate("/login");
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
        <div className="username">Hello! {user ? user.name : "User"}</div>
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
          {!localStorage.getItem("token") ? (
            <NavLink className="nav-links LoginLink" to="/login">
              Login
            </NavLink>
          ) : (
            <div>
              <NavLink onClick={handleLogout} className="nav-links LoginLink">
                Logout
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;