import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [isregister, setIsrergister] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsrergister(!isregister)}>
        {isregister ? "Switch to login" : "Switch to Register"}
      </button>
      {isregister ? <Register /> : <Login />}
    </div>
  );
}

export default App;
