import React, { useState } from 'react';
import './DataCard.css';

export default function DataCard({
  title,
  company,
  subtitle,
  gpa,
  expectedGraduation,
  majors = [],
  minors = [],
  scholarshipsAwards = [],
  relevantCoursework = [],
  clubsActivities = [],
  description = "",
  date,
  image,
  link,
  logo,
  location,
  isEducation = true, // Conditional rendering for education
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  const displayTitle = company || title;

  return (
    <div
      className={`data-card ${isClicked ? 'expanded' : ''} ${isEducation ? 'education-card' : 'professional-card'}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleCardClick}
    >
      {/* Non-clicked card content */}
      {!isClicked && (
        <div className="data-content">
          <div className="data-header">
            <img src={logo} alt={`${displayTitle} logo`} className="data-logo" />
            <a href={link} target="_blank" rel="noopener noreferrer" className="data-title">
              {displayTitle}
            </a>
          </div>
          {subtitle && <p className="data-subtitle">{subtitle}</p>}
        </div>
      )}

      {/* Education Overlay */}
      {isClicked && isEducation && (
        <div className="data-overlay education-overlay">
          <div className="edu-info">
            <h1 className="data-title">{displayTitle}</h1>
            {description && (
              <p>
                <strong><i className="fa-solid fa-location-dot"></i></strong> {description}
              </p>
            )}
            {majors.length > 0 && (
              <p>
                <strong><i className="fa-solid fa-book"></i></strong> {majors.join(', ')}
              </p>
            )}
            {minors.length > 0 && <p><strong>Minors in</strong> {minors.join(', ')}</p>}
            {expectedGraduation && (
                <p>
                <strong><i className="fa-solid fa-graduation-cap"></i></strong> {expectedGraduation}
              </p>
            )}
            {gpa && <p><strong>GPA:</strong> {gpa}</p>}
          </div>

          <div className="detailed-info">
            {relevantCoursework.length > 0 && (
              <div>
                <h3>Relevant Coursework <i className="fa-solid fa-book-open"></i></h3>
                <ul>
                  {relevantCoursework.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            {scholarshipsAwards.length > 0 && (
              <div>
                <h3>Scholarships & Awards <i className="fa-solid fa-award"></i></h3>
                <ul>
                  {scholarshipsAwards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            )}
            {clubsActivities.length > 0 && (
              <div>
                <h3>Clubs & Activities <i className="fa-solid fa-puzzle-piece"></i></h3>
                <ul>
                  {clubsActivities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Professional Overlay */}
      {isClicked && !isEducation && (
        <div className="data-overlay professional-overlay">
            <div className="prof-info">
            <h1 className="data-title">{displayTitle}</h1>
            {location && (
                <p>
                    <i className="fa-solid fa-location-dot"></i> {location}
                </p>
            )}
            {subtitle && (
                <p className="data-subtitle">
                    <i className="fa-solid fa-briefcase"></i> {subtitle}
                </p>
            )}
            {date && (
                <p>
                    <i className="fa-regular fa-calendar"></i> {date}
                </p>
            )}
            </div>

            <div className="role-description">
            <h3>Role Description</h3>
            <ul>
                {description.split('. ').map((desc, index) => (
                <li key={index}>{desc.trim()}</li>
                ))}
            </ul>
            </div>
        </div>
        )}
    </div>
  );
}
