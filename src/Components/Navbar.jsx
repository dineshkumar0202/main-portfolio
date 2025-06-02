import React from 'react';
import "../App.css";
import logo from "../assets/logo.png"; 
import home from "../assets/home-icon.png";
import about from "../assets/about-icon.png";
import experienec from "../assets/experience-icon.png";
import project from "../assets/project-icon.png";
import contact from "../assets/contact-icon.png";

const Navbar = () => {
  return ( 
    <aside className="sidebar-navbar">
      <div className="logo-container">
        {/* <a className="logo-link" href="#">
          <img src={logo} alt="Logo" className="logo-img" />
        </a> */}
      </div>
      <nav className="navbar-links">
        <a href="#home"><img src={home} alt="home" /></a>
        <a href="#about"><img src={about} alt="" /></a>
        <a href="#services"><img src={experienec} alt="" /></a>
        <a href="#portfolio"><img src={project} alt="" /></a>
        <a href="#contact"><img src={contact} alt="" /></a>
      </nav>
    </aside>
  );
};

export default Navbar;
