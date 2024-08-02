import React, { useState } from "react";
import "./loginadmin.css";
import { useNavigate } from "react-router-dom";
import Log from "./loginPage.json";
import Lottie from "lottie-react";

import { useToast } from "@chakra-ui/react";
import axios from "axios";
const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toast = useToast();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Simple validation for demonstration
    if (email === "" || password === "") {
      setError("Both fields are required.");
      return;
    }
    setError("");

    try {
      const response = axios.get(`http://localhost:5000/admin/get/${email}`);
      const user = (await response).data;
      console.log(user);
      const userd = user.find(
        (user) => user.email === email && user.password === password
      );

      if (userd) {
        navigate("/admin-page");
      } else {
        toast({
          title: "Incorrect information!",
          // description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (e) {
      toast({
        title: "Wrong mailId!",
        // description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
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
