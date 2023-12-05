import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import AmbilSampah from "./pages/AmbilSampah";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Footer from "./components/Footer";
import PickupSuccess from "./pages/PickupSuccess";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ambil-sampah" element={<AmbilSampah />} />
        <Route path="/ambil-sampah/berhasil" element={<PickupSuccess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
