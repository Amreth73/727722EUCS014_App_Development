import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/Loginpage";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/HomePage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./day3/Home";
import About from "./day3/About";
import Contact from "./day3/Contact";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Service from "./day3/service";
import Blog from "./day3/Blog";
import Birthday from "./services/Birthday";
import Charity from "./services/Charity";
import Corporate from "./services/Corporate";
import Cultural from "./services/Cultural";
import Education from "./services/Education";
import PublicEvents from "./services/PublicEvents";
import Sports from "./services/Sports";
import Wedding from "./services/Wedding";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/education" element={<Education />} />
          <Route path="/publicevents" element={<PublicEvents />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/wedding" element={<Wedding />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
