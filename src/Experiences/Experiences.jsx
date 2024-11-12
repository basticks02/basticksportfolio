import React, { useState } from 'react';
import './Experiences.css';
import data from '../data.json';

export default function Experiences() {
  const [view, setView] = useState('professional');
  const experiences = data.experiences[view];

  return (
    <section className="experiences" id='experiences'>
      <h2>Experiences</h2>
      <button onClick={() => setView('professional')}>Professional</button>
      <button onClick={() => setView('education')}>Education</button>
      
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <h3>{experience.company || experience.institution}</h3>
          <p>{experience.title || experience.degree}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </section>
  );
}
