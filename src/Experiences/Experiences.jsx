import React, { useState } from 'react';
import './Experiences.css';
import data from '../data.json';
import DataCard from "../DataCard/DataCard";

export default function Experiences() {
  const [view, setView] = useState('professional');
  const experiences = data.experiences[view];

  return (
    <section className="experiences" id="experiences">
      <div className="timeline_head">
        <h1>Important Things That Happened...</h1>
      </div>

      <div className="view-toggle">
        <button
          className={view === 'professional' ? 'active' : ''}
          onClick={() => setView('professional')}
        >
          Professional
        </button>
        <button
          className={view === 'education' ? 'active' : ''}
          onClick={() => setView('education')}
        >
          Education
        </button>
      </div>

      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <DataCard
            key={index}
            title={experience.company || experience.institution}
            subtitle={experience.title || experience.degree}
            description={experience.description}
            image={experience.image}
            link={experience.link}
          />
        ))}
      </div>
    </section>
  );
}
