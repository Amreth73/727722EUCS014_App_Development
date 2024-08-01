import React, { useState } from "react";
import "./loginadmin.css";
import { useNavigate } from "react-router-dom";
import Log from "./loginPage.json";
import Lottie from "lottie-react";
import axios from "axios";
const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Simple validation for demonstration
    if (email === "" || password === "") {
      setError("Both fields are required.");
      return;
    }
    setError("");

    try {
      const response = axios.get("http://localhost:8080/users");
      const user = (await response).data;
      console.log(user);
      const userd = user.find(
        (user) => user.email === email && user.password === password
      );

      // if (userd) {
      //   navigate("/admin-page");
      // }
      if (email == "admin@gmail.com" && password == "12345678") {
        // navigate("/admin-page");
        navigate("/dashboard");
      } else {
        console.log("Error amreth");
      }
    } catch (e) {
      console.error("Error message" + e);
      return;
    }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
