import React, { useState } from "react";

const Register = () => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handlechange = (event) => {
    event.preventDefault();
    alert(`Registered with Username: ${user}`);
    setuser("");
    setpassword("");
  };
  return (
    <div>
      <h2>Register</h2>
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
          <lable>PASSWORD</lable>
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
  );
};

export default Register;
