import React, { useState } from 'react';
import './Timeline.css';
import DataCard from '../DataCard/DataCard'; // Import DataCard component
import data from '../data.json';

export default function Timeline() {
  const [view, setView] = useState('2024');

  // Filter timeline data based on the selected year
  const filteredEvents = data.timeline.find((yearBlock) => yearBlock.year.toString() === view)?.events || [];

  return (
    <section className="timeline" id="timeline">
      <div className="timeline_head">
        <h1>Cool Stuff That Happened...</h1>
      </div>

      <div className="view-toggle">
        {/* Dynamically create buttons for each year */}
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
              logo={event.image} // Replace with an actual logo if available
              link={event.link}
              location={event.location}
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
