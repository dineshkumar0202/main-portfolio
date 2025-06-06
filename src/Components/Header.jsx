import React, { useEffect } from "react";
import "../App.css";
import smiley from "../assets/yellow-smile.jpeg";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const el = document.querySelector(".parallax-wrapper");
      if (el) {
        const speed = parseFloat(el.getAttribute("data-speed")) || 1;
        el.style.transform = `translateY(${scrollY * speed * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="paper-header" id="parallax-header">
      <div className="parallax-wrapper" data-speed="2">
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
      </div>
    </header>
  );
}

export default Header;
