import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const handlechange = (event) => {
    event.preventDefault();
    alert(`login with Username: ${user}`);
    setuser("");
    setpassword("");
  };
  return (
    <div className="login1">
      <div>
        <h2>Login</h2>
      </div>
      <div className="login2">
        <form onSubmit={handlechange}>
          <div>
            <lable>USERNAME</lable>
            <input
              type="email"
              value={user}
              onChange={(e) => setuser(e.target.value)}
              required
            />
          </div>
          <div>
            <lable>Password</lable>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div>
            <lable>Confirm Password</lable>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
