import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../axios/axiosFile";
import { Dropdown } from "primereact/dropdown";
import ManagementDropdown from "./ManagementDropdown";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    management: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await client.post("/api/admin/emp/login", values);
      if (response.data.success) {
        alert("Login success");
        localStorage.setItem("adminToken", response.data.authToken);
        navigate("/admin/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Invalid credentials");
    }
  };

  const handleInput = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mainContainer1">
      <div className="mainContainer">
        <div className="login-container">
          <h1 className="heading-register">Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="loginUserlabel">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleInput}
            />
            <label htmlFor="password" className="loginUserlabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleInput}
            />
            <ManagementDropdown onChange={handleChange} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
