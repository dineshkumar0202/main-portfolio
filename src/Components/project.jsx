import React, { useState } from 'react';

const filters = ['All', 'Frontend', 'Full-stack', 'Flutter', 'UI/UX'];

const items = [
  { image: 'https://source.unsplash.com/120x160/?coffee', github: '#', live: '#', category: 'Frontend' },
  { image: 'https://source.unsplash.com/120x160/?donut', github: '#', live: '#', category: 'Frontend' },
  { image: 'https://source.unsplash.com/120x160/?orange', github: '#', live: '#', category: 'Frontend' },
  { image: 'https://source.unsplash.com/120x160/?drink', github: '#', live: '#', category: 'Frontend' },
  { image: 'https://source.unsplash.com/120x160/?splash', github: '#', live: '#', category: 'Full-stack' },
  { image: 'https://source.unsplash.com/120x160/?clock', github: '#', live: '#', category: 'Full-stack' },
  { image: 'https://source.unsplash.com/120x160/?pineapple', github: '#', live: '#', category: 'Flutter' },
  { image: 'https://source.unsplash.com/120x160/?orange-slice', github: '#', live: '#', category: 'Flutter' },
  { image: 'https://source.unsplash.com/120x160/?hand', github: '#', live: '#', category: 'UI/UX' },
  { image: 'https://source.unsplash.com/120x160/?candy', github: '#', live: '#', category: 'UI/UX' },
  { image: 'https://source.unsplash.com/120x160/?fruit', github: '#', live: '#', category: 'UI/UX' },
  { image: 'https://source.unsplash.com/120x160/?banana', github: '#', live: '#', category: 'UI/UX' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? items
    : items.filter(item => item.category === activeFilter);

  return (
  <div className="projects-container">
    <h1 className="projects-title">Projects</h1> {/* Move heading here */}
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
        {filteredItems.map((item, index) => (
          <div key={index} className="project-card">
            <img src={item.image} alt={`Project ${index + 1}`} className="project-image" />
          </div>
        ))}
      </div>
    </div>
  </div>
);
}