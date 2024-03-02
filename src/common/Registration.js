import React, { useState } from "react";
import "../css/RegistrationLogin.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error,setError] = useState("");
  const [values, setValues] = useState({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if(password!=confirmPassword) {
      setError("password doesn`t match")
    }
  };
  const handleInput = (e) => {
    setValues((ele) => ({ ...ele, [e.target.name]: [e.target.value] }));
  };

  return (
    <div className="mainContainer">
      <div className="register-container">
        <h1 className="heading-register">Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInput}
          />
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleInput}
          />
          
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
