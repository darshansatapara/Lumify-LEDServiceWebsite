import React, { useEffect, useState } from "react";
import "../css/RegistrationLogin.css";

import { useNavigate } from "react-router-dom";
import client from "../axios/axiosFile.js";
import Navbar from "./Navbar.js";
import ManagementDropdown from "./ManagementDropdown.js";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    management: "",
  });

  const handleManagementChange = (selectedManagement) => {
    setFormData({ ...formData, management: selectedManagement });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.log("password dosent match");
    }

    try {
      console.log(formData);
      const response = await client.post("/api/admin/emp/register", formData);
      alert("Signup successful!");
      localStorage.setItem("admintoken", response.data.authToken);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <>
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
            <ManagementDropdown onChange={handleManagementChange} />
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
