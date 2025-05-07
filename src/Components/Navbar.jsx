import React, { useState } from "react";
import Logo from "../assets/profile_logo1.png"; // Adjust path if needed
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      
      <nav className="navbar">
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="nav-links"
        >
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </button>

        <div id="nav-links" className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#" onClick={closeMenu}>About</a>
          <a href="#" onClick={closeMenu}>Services</a>
          <a href="#" onClick={closeMenu}>Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
