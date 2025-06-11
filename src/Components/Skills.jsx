import React, { useEffect, useState } from 'react';
import '../App.css';

const Skills = () => {
  const initialBarSkills = [
    { label: 'Three.js', value: 25 },
    { label: 'Agular', value: 35 },
    { label: 'Bootrap', value: 47 },
    { label: 'Flutter', value: 69 },
    { label: 'Vibe code', value: 86 },
    { label: 'Github', value: 96 },
  ];

  const donutSkills = [
    { label: 'HTML', value: 93, color: '#e66' },
    { label: 'CSS', value: 88, color: '#67c' },
    { label: 'JavaScript', value: 70, color: '#cc6' },
    { label: 'React.js', value: 78, color: '#6cf' },
  ];

  const [animatedSkills, setAnimatedSkills] = useState(
    initialBarSkills.map(skill => ({ ...skill, value: 0 }))
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedSkills(initialBarSkills);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>

      <div className="bar-chart">
        {animatedSkills.map((skill, index) => (
          <div className="bar-item" key={index}>
            <div className="bar" style={{ height: `${skill.value}%` }}>
              <span>{skill.value}%</span>
            </div>
            <label>{skill.label}</label>
          </div>
        ))}
      </div>

      <div className="donuts-container">
        <h3>Frontend <br />Devep</h3>
        <div className="donuts">
          {donutSkills.map((skill, index) => (
            <div className="donut" key={index}>
              <svg viewBox="0 0 36 36">
                <circle
                  className="bg"
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#333"
                  strokeWidth="4"
                />
                <circle
                  className="fg"
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke={skill.color}
                  strokeWidth="4"
                  strokeDasharray={`${skill.value}, 100`}
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <div className="donut-label">
                {skill.value}%<br />
                <small>{skill.label}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
