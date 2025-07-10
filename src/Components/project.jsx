import React, { useState } from 'react';
import card from "../assets/yellow-smile.jpeg";
import smiley from "../assets/yellow-smile.jpeg";

const filters = ['All', 'Frontend', 'Full-stack', 'Flutter', 'UI/UX'];

const items = [
  { image: card, github: '#', live: '#', category: 'Frontend' },
  { image: card, github: '#', live: '#', category: 'Frontend' },
  { image: card, github: '#', live: '#', category: 'Frontend' },
  { image: card, github: '#', live: '#', category: 'Frontend' },
  { image: card, github: '#', live: '#', category: 'Frontend' },
  { image: card, github: '#', live: '#', category: 'Full-stack' },
  { image: card, github: '#', live: '#', category: 'Full-stack' },
  { image: card, github: '#', live: '#', category: 'Flutter' },
  { image: card, github: '#', live: '#', category: 'Flutter' },
  { image: card, github: '#', live: '#', category: 'UI/UX' },
  { image: card, github: '#', live: '#', category: 'UI/UX' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? items
    : items.filter(item => item.category === activeFilter);

  return (
    <div className="projects-container" id='projects'>
       <div className="project-title">
              <h1>
                Pr
                <span className="face-icon">
                  <img src={smiley} alt="face" />
                </span>{" "}
                jects!
              </h1>
            </div>
      <div className="projects-wrapper">
        <div className="sidebar">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredItems.slice(0, 10).map((item, index) => (
            <div key={index} className={`project-card project-${index + 1}`}>
              <img src={item.image} alt={`Project ${index + 1}`} className="project-image" />
              <div className="project-overlay">
                <a href={item.github} className="project-link">GitHub</a>
                <a href={item.live} className="project-link">Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
