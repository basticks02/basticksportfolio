import React, { useState } from 'react';
import './DataCard.css';

export default function DataCard({ title, subtitle, description, date, image, link, logo, location, className }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`data-card ${isClicked ? 'expanded' : ''} ${className || ''}`} // Add custom className here
      style={{
        backgroundImage: `url(${image})`,
      }}
      onClick={handleCardClick}
    >
      {!isClicked && (
        <div className="data-content">
          <div className="data-header">
            <img src={logo} alt={`${title} logo`} className="data-logo" />
            <a href={link} target="_blank" rel="noopener noreferrer" className="data-title">
              {title}
            </a>
          </div>
          {subtitle && <p className="data-subtitle">{subtitle}</p>}
          {date && <p className="data-date">{date}</p>}
        </div>
      )}

      {isClicked && (
        <div className="data-overlay show-description">
          <div className="full-description">
            <p><strong>Location:</strong> {location || 'Not Available'}</p>
            <p><strong>Description:</strong> {description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
