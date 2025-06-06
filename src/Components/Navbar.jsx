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
        <a href="#home"><img src={home} alt="home" />Home</a>
        <a href="#about"><img src={about} alt="" />About</a>
        <a href="#Experiance"><img src={experienec} alt="" />Experiance</a>
        <a href="#portfolio"><img src={project} alt="" />Project</a>
        <a href="#contact"><img src={contact} alt="" />Contect</a>
      </nav>
    </aside>
  );
};

export default Navbar;
