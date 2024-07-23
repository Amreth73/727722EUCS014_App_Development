import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/Loginpage";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <Homepage />
    </div>
  );
}

export default App;
