import React, { useState } from 'react';
import './Timeline.css';
import DataCard from '../DataCard/DataCard';
import data from '../data.json';

export default function Timeline() {
  const [view, setView] = useState('2024');
  const filteredEvents = data.timeline.find((yearBlock) => yearBlock.year.toString() === view)?.events || [];

  return (
    <section className="timeline" id="timeline">
      <div className="timeline_head">
        <h1>Cool Stuff That Happened...</h1>
      </div>
      <div className="view-toggle">
        {data.timeline.map((yearBlock) => (
          <button
            key={yearBlock.year}
            className={view === yearBlock.year.toString() ? 'active' : ''}
            onClick={() => setView(yearBlock.year.toString())}
          >
            {yearBlock.year}
          </button>
        ))}
      </div>
      <div className="timeline-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <DataCard
              key={index}
              title={event.title}
              subtitle={event.type}
              description={event.description}
              date={event.date}
              image={event.image}
              location={event.location}
              link={event.link}
              className="timeline-card"
            />
          ))
        ) : (
          <p>No events to display for {view}</p>
        )}
      </div>
    </section>
  );
}
