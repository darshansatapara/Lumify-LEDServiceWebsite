// Navbar.js

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/UserContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, fetchUserDetails } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    // Fetch user details after login
    fetchUserDetails();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
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
            {/* Navigation links */}
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
