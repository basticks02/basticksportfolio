import React, { useState } from 'react';
import './DataCard.css';

export default function DataCard({ title, subtitle, description, date, image, link, logo }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`data-card ${isClicked ? 'expanded' : ''}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
      onClick={handleCardClick}
    >
      <div className={`data-overlay ${isClicked ? 'show-description' : ''}`}>
        {isClicked && (
          <div className="full-description">
            <p>{description}</p>
          </div>
        )}
      </div>
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
    </div>
  );
}
