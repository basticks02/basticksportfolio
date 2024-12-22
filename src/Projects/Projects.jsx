import React, { useState } from 'react';
import './Projects.css';
import data from '../data.json';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project

  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <section className="projects" id="projects">
      <div className="timeline_head">
        <h1>Projects, Certs & Skills...</h1>
      </div>

      {/* Tab Navigation */}
      <div className="view-toggle">
        <button
          className={activeTab === 'projects' ? 'active' : ''}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={activeTab === 'certifications' ? 'active' : ''}
          onClick={() => setActiveTab('certifications')}
        >
          Certifications
        </button>
        <button
          className={activeTab === 'skills' ? 'active' : ''}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </div>

      {/* Content Rendering Based on Tab */}
      <div className="tab-content">
        {activeTab === 'projects' && (
          <div className="project-list">
            {data.projects.map((project, index) => (
              <div key={index} className="project-container">
                <div
                  className={`project-card ${
                    selectedProject === index ? 'active' : ''
                  }`}
                  onClick={() => handleProjectClick(index)}
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  {selectedProject !== index && (
                    <div className="project-overlay">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-date">{project.date}</p>
                    </div>
                  )}
                  {selectedProject === index && (
                    <div className="project-description">
                      <ul>
                        {project.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="project-details">
                  <p className="project-tech">
                    {project.technologies.join(', ')}
                  </p>
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-link"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="certifications-list">
            {data.certifications.map((cert, index) => (
              <div
                key={index}
                className="certification-card"
                style={{
                  backgroundImage: `url(${cert.image})`,
                }}
                onClick={() => window.open(cert.link, '_blank')}
              >
                <div className="certification-overlay">
                  <div className="certification-details">
                    <h3>{cert.name}</h3>
                    <p>{cert.date}</p>
                  </div>
                  <div className="arrow-container">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="">
            <p className="skill-title">Technical</p>
            <div className="skills-list">
              {data.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-logo"
                  />
                  <p className="skill-name">{skill.name}</p>
                  <p className="skill-level">{skill.proficiency}</p>
                </div>
              ))}
            </div>

            <div className="other-skills">
              <p className="skill-title">Other</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
