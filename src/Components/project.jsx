import React, { useState } from 'react';
import smiley from "../assets/yellow-smile.jpeg";

const filters = ['All', 'Frontend', 'Full-stack', 'Flutter', 'UI/UX'];

const items = [
  { image: smiley, github: '#', live: '#', category: 'Frontend' },
  { image: smiley, github: '#', live: '#', category: 'Frontend' },
  { image: smiley, github: '#', live: '#', category: 'Frontend' },
  { image: smiley, github: '#', live: '#', category: 'Frontend' },
  { image: smiley, github: '#', live: '#', category: 'Frontend' },
  { image: smiley, github: '#', live: '#', category: 'Full-stack' },
  { image: smiley, github: '#', live: '#', category: 'Full-stack' },
  { image: smiley, github: '#', live: '#', category: 'Flutter' },
  { image: smiley, github: '#', live: '#', category: 'Flutter' },
  { image: smiley, github: '#', live: '#', category: 'UI/UX' },
  { image: smiley, github: '#', live: '#', category: 'UI/UX' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? items
    : items.filter(item => item.category === activeFilter);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
