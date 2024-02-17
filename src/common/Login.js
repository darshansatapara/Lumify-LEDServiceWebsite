import React, { useState } from "react";
import Register from "./Registration";
import "../css/RegistrationLogin.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login attempt with your authentication system
  };
  const handleRegisterClick = () => {
    Navigate("/register");
  };

  return (
    <div className="mainContainer1">
    <div className="mainContainer">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <p onClick={handleRegisterClick} className="register-link ">Register here</p>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
