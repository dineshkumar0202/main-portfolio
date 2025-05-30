import React from "react";
import { FaHome, FaUser, FaBell, FaCamera, FaSignOutAlt } from "react-icons/fa";
import "..App.css"; 
import logo from "../assets/logo1.png"; // Adjust the path as necessary

const Navbar = () => {
  return ( 
    <header className="sidebar-navbar">
      <a className="logo" href="#">
        <img src={logo} alt="logo" />
      </a>
      <nav className="navbar">
        <a href="#home"> Home</a>
        <a href="#about"> About</a>
        <a href="#services"> Services</a>
        <a href="#portfolio"> Portfolio</a>
        <a href="#contact"> Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
