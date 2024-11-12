import React, { useState } from 'react';
import './Timeline.css';
import data from '../data.json';

export default function Timeline() {
  const [timelineData] = useState(data.timeline);

  return (
    <section className="timeline" id='timeline'>
      <h2>Timeline</h2>
      {timelineData.map((yearBlock) => (
        <div key={yearBlock.year} className="timeline-year">
          {yearBlock.events.map((event, index) => (
            <div key={index} className="timeline-event">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
