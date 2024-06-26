import React, { useEffect, useState } from "react";
import "../css/RegistrationLogin.css";

import { useNavigate } from "react-router-dom";
import client from "../axios/axiosFile.js";
import Navbar from "./Navbar.js";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Register");
    if (formData.password !== formData.confirmPassword) {
      console.log("password dosent match");
    }

    try {
      const response = await client.post("/api/register", formData);
      alert("Signup successful!");
      localStorage.setItem("token", response.data.authToken);
      navigate("/login");
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="register-container">
          <h1 className="heading-register">Register</h1>
          <form onSubmit={handleSubmit} method="post">
            <label htmlFor="name" className="registeruserlabel">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email" className="registeruserlabel">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="password" className="registeruserlabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="confirmPassword" className="registeruserlabel">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit" className="register-button">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
