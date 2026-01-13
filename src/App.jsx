import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Products from "./components/products";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import About from "./components/about";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
