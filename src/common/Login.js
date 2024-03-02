import React, { useState } from "react";
import Register from "./Registration";
import "../css/RegistrationLogin.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: email,
    password: password,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const handleInput = (e) => {
    setValues((ele) => ({ ...ele, [e.target.name]: [e.target.value] }));
  };

  return (
    <div className="mainContainer1">
      <div className="mainContainer">
        <div className="login-container">
          <h1 className="heading-register">Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
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
  );
};

export default Login;
