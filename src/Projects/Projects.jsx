import React from 'react';
import './Projects.css';
import data from '../data.json';

export default function Projects() {
  return (
    <section className="projects" id='projects'>
      <div className="timeline_head">
        <h1>Projects & Certifications...</h1>
      </div>
      <div className="project-list">
        {data.projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
