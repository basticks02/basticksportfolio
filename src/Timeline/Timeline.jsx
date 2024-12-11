import React, { useState } from 'react';
import './Timeline.css';
import data from '../data.json';

export default function Timeline() {
  const [timelineData] = useState(data.timeline);
  const [view, setView] = useState('2024');

  return (
    <section className="timeline" id='timeline'>
      <div className='timeline_head'>
        <h1>Cool Stuff That Happened...</h1>
      </div>

      <div className="view-toggle">
        <button
          className={view === '2024' ? 'active' : ''}
          onClick={() => setView('2024')}
        >
          2024
        </button>
        <button
          className={view === '2023' ? 'active' : ''}
          onClick={() => setView('2023')}
        >
          2023
        </button>
        <button
          className={view === '2022' ? 'active' : ''}
          onClick={() => setView('2022')}
        >
          2022
        </button>
        <button
          className={view === '...' ? 'active' : ''}
          onClick={() => setView('...')}
        >
          ...
        </button>
      </div>

      

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
