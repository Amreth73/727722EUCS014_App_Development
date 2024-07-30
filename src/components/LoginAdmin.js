import React, { useState } from "react";
import "./loginadmin.css";
import { useNavigate } from "react-router-dom";
import Log from "./loginPage.json";
import Lottie from "lottie-react";
const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation for demonstration
    if (username === "" || password === "") {
      setError("Both fields are required.");
      return;
    }
    setError("");
    // Handle login logic here
    alert("Logged in successfully!");
  };
  return (
    <div className="admin">
      <Lottie animationData={Log} loop={true} />
      <div className="login-container">
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button
            type="submit"
            className="login-button"
            onClick={() => navigate("/admin-page")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
