import React, { useState } from "react";
import "../css/RegistrationLogin.css";
import { useNavigate } from "react-router-dom";
import client from "../axios/axiosFile";
import { useAuth } from "../context/UserContext";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { fetchUserDetails } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("hello");
      const response = await client.post("/api/login", values);
      if (response.data.success) {
        alert("Login success");
        localStorage.setItem("token", response.data.authToken);
        fetchUserDetails(response.data.email);
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Invalid credentials");
      console.log("Error response data:", error.response);
    }
  };

  const handleInput = (e) => {
    setValues((ele) => ({ ...ele, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Navbar />
      <div className="mainContainer1">
        <div className="mainContainer">
          <div className="login-container">
            <h1 className="heading-register">Login</h1>
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
              <button type="submit">Login</button>
            </form>
            <p className="not-account">
              Don't have an account?
              <span
                onClick={() => navigate("/register")}
                className="register-link "
              >
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
