import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Blog = () => {
  const navigate = useNavigate();
  const submit1 = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <div>venue</div>

      <Footer />
    </>
  );
};

export default Blog;
