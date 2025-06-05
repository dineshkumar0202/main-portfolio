import React from "react";
import Im from "../assets/mee.jpg";
import smiley from "../assets/yellow-smile.jpeg";
import "../script";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-titel">
        <h1>
          Ab
          <span className="face-icon">
            <img src={smiley} alt="face" />
          </span>{" "}
          ut Us !
        </h1>
      </div>
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
          <h2>
            Hello <span className="emoji">!</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            inventore velit alias veritatis rerum sit pariatur modi neque
            dignissimos quia exercitationem delectus, quae natus explicabo. Nisi
            praesentium, rerum officia ipsa provident nam cum minus quasi quia
            perspiciatis saepe accusantium modi iure natus! Voluptates cumque,
            tenetur est eum delectus dolorum a.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
