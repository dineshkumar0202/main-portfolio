import React from "react";
import "../App.css";
import smiley from "../assets/yellow-smile.jpeg";

function Header() {
  return (
    <header className="paper-header">
      <div className="portfolio-title">
        <span className="year-badge">DINESHKUMAR</span>
        <h1>
          Web devel
          <span className="face-icon">
            <img src={smiley} alt="face" />
          </span>
          p<span className="o-slice">e</span>r
        </h1>
        <p className="subtitle">
          Graphic Design <span>•</span> Digital Art <span>•</span> Print Media
        </p>
        <a href="/resume.pdf" download className="cv-btn">
          <span className="cv-text">Resume-CV</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
