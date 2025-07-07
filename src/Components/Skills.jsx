import React, { useState, useEffect } from "react";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/reactjs.png";
import tailwind from "../assets/icons/tailwindcss.png";
import bootstrap from "../assets/icons/bootstrap.png";
import figma from "../assets/icons/figma.png";
import flutter from "../assets/icons/flutter.png";
import firebase from "../assets/icons/firebase.png";
import node from "../assets/icons/nodejs.png";
import mongodb from "../assets/icons/mongodb.png";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Figma", icon: figma },
  { name: "Flutter", icon: flutter },
  { name: "Firebase", icon: firebase },
  { name: "Node.js", icon: node },
  { name: "MongoDB", icon: mongodb },
];

const Skills = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 60); // speed of rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2>My Skills</h2>
      </div>
      <div className="arrow-indicator" />
      <div className="skills-wheel">
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index + rotation;
          const radians = (angle * Math.PI) / 180;
          const radius = 130;
          const x = radius * Math.cos(radians);
          const y = radius * Math.sin(radians);
          const isInFront = angle % 360 > 345 || angle % 360 < 15;
          const scale = isInFront ? 1.5 : 1;

          return (
            <div
              key={index}
              className="skill-icon"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                title={skill.name}
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
