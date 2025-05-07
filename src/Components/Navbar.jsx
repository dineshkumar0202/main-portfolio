import React, { useState } from "react";
import Logo from "../assets/profile_logo1.png"; // Adjust the path as necessary
import "../App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
<>
    <div className="logo-container" >
        <img src={Logo} alt="Logo" className="logo" />
        {/* <span className="logo-text">MyApp</span> */}
      </div>
    <nav className="navbar">
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#" onClick={() => setIsOpen(false)}>About</a>
        <a href="#" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
    </>
  );
}
