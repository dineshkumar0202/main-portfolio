import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    // Animate donut numbers
    const animatePercentage = (el) => {
      const target = +el.dataset.target;
      let current = 0;
      const duration = 1000;
      const startTime = performance.now();

      function step(timestamp) {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        current = Math.floor(progress * target);
        el.textContent = current + "%";
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    };

    document.querySelectorAll(".percentage").forEach(animatePercentage);
  }, []);

  const barSkills = [
    { name: "Three.js", percent: 25, height: "8rem" },
    { name: "Angular", percent: 35, height: "10.5rem" },
    { name: "Bootstrap", percent: 47, height: "12rem" },
    { name: "Flutter", percent: 69, height: "14.5rem" },
    { name: "Vibe code", percent: 86, height: "17rem" },
    { name: "Github", percent: 96, height: "19.5rem" },
  ];

  const donutSkills = [
    { name: "HTML", percent: 93, color1: "#d04f4f", color2: "#eab8b8" },
    { name: "CSS", percent: 88, color1: "#5a8a9a", color2: "#a9d1df" },
    { name: "JavaScript", percent: 75, color1: "#d9b21a", color2: "#f0e8c9" },
    { name: "React.js", percent: 79, color1: "#2a7aff", color2: "#a9d1df" },
  ];

  return (
    <main className="skills-container">
      <section className="bar-section">
        <h1 className="section-title">Skills</h1>
        <div className="bar-chart">
          {barSkills.map((skill, i) => (
            <div className="bar-wrapper" key={i}>
              <div
                className="bar"
                style={{
                  "--bar-height": skill.height,
                  animation: `growHeight ${1.2 + i * 0.2}s ease forwards`,
                }}
              >
                <span className="bar-label">{skill.percent}%</span>
              </div>
              <span className="bar-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="donut-section">
        <h2 className="donut-title">Frontend Developer</h2>
        <div className="donut-wrapper">
          {donutSkills.map((skill, i) => (
            <div className="donut-skill" key={i}>
              <div
                className="donut"
                style={{
                  "--percentage": skill.percent,
                  "--color1": skill.color1,
                  "--color2": skill.color2,
                }}
              >
                <span className="percentage" data-target={skill.percent}>
                  0%
                </span>
              </div>
              <span className="donut-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;
