import React, { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import home from "../assets/home-icon.png";
import about from "../assets/about-icon.png";
import skills from "../assets/skills-icon.png";
import certificate from "../assets/certificate-icon.png";
import social from "../assets/social-icon.png";
import project from "../assets/project-icon.png";
import contact from "../assets/contact-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar-navbar ${isOpen ? "open" : ""}`}>
      <div className="logo-container">
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      <nav className="navbar-links">
        <a href="#home">
          <img src={home} alt="home" />
          <span className="nav-text">Home</span>
        </a>
        <a href="#about">
          <img src={about} alt="about" />
          <span className="nav-text">About</span>
        </a>
        <a href="#skills">
          <img src={skills} alt="skills" />
          <span className="nav-text">Skills</span>
        </a>
        <a href="#certificates">
          <img src={certificate} alt="certificates" />
          <span className="nav-text">Certificates</span>
        </a>
        <a href="#projects">
          <img src={project} alt="projects" />
          <span className="nav-text">Project</span>
        </a>
        <a href="#social">
          <img src={social} alt="social" />
          <span className="nav-text">Social</span>
        </a>
        <a href="#contact">
          <img src={contact} alt="contact" />
          <span className="nav-text">Contact</span>
        </a>
      </nav>
    </aside>
  );
};

export default Navbar;
