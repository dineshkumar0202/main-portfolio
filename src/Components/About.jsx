import React from "react";
import Im from "../assets/mee.jpg";


function About() {
  return (
    <section id="about" className="about-section">
        <h1>About Us</h1>
      <div className="about-card">
        {/* Left: Photo Frame */}
        <div className="photo-frame">
          <img src={Im} alt="Profile" className="profile-pic" />
          <div className="frame-label">DK !</div>
          <div className="emoji-sticker top-left">👽</div>
          <div className="emoji-sticker bottom-right">😎</div>
        </div>

        {/* Right: Intro Only */}
        <div className="about-info">
          <h2>Hello <span className="emoji">!</span></h2>
          <p>
            I'm Max Kumar, a creative web developer passionate about interactive
            design and 3D experiences. I build fast, user-centered apps using React,
            3.js and modern web tech.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
