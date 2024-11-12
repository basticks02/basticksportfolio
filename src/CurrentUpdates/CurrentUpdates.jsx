import React, { useState, useEffect } from 'react';
import './CurrentUpdates.css';
import data from '../data.json';

export default function CurrentUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('slide-out');
      setTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.currentUpdates.length);
        setSlideDirection('slide-in');
      }, 500);

      setTimeout(() => {
        setSlideDirection('');
        setTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentUpdate = data.currentUpdates[currentIndex];
  const bio = data.bio[0];

  return (
    <section className="current-updates" id="current-updates">
      <h1>What's Happening?</h1>

      <div className="update-container">
        <div className={`update-main ${transitioning ? 'transitioning' : ''}`}>
            <div 
              className={`update-card ${slideDirection}`}
              style={{
                backgroundImage: `url(${currentUpdate.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="update-overlay">
                <h3>{currentUpdate.title}</h3>
                <p>{currentUpdate.date}</p>
                <p>{currentUpdate.description}</p>
                <div className="update-links">
                  {currentUpdate.link && (
                    <a href={currentUpdate.link} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  )}
                </div>
              </div>
            </div>
        </div>

        <div className="bio">
          <h3>Who Is He...?</h3>
          <p>{bio.intro}</p>
          <h3>Let's Talk</h3>
          <a href={`mailto:${bio.email}`}>{bio.email}</a>
          <p>{bio.number}</p>
        </div>
      </div>
    </section>
  );
}
