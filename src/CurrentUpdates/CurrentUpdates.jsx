import React, { useState, useEffect } from 'react';
import './CurrentUpdates.css';
import data from '../data.json';

export default function CurrentUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.currentUpdates.length);
    }, 6000); // Automatically cycle updates every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentUpdate = data.currentUpdates[currentIndex];
  const bio = data.bio[0];

  return (
    <section className="current-updates" id="current-updates">
      <h1>What's Happening..?</h1>

      <div className="update-container">
        <div className="update-main">
          {data.currentUpdates.map((update, index) => (
            <div
              key={index}
              className={`update-card ${currentIndex === index ? 'active' : 'inactive'}`}
            >
              <div
                className="update-background"
                style={{
                  backgroundImage: `url(${update.backgroundImage})`,
                }}
              ></div>
              <div className="update-text">
                <p className="update-title">{update.title}</p>
                <p className="update-date">{update.date}</p>
                <a 
                  href={`#timeline`} 
                  className="read-more-link"
                >
                  Read More <i class="fa-solid fa-chevron-down"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bio">
          <h3>Who Is He...?</h3>
          {bio.intro.split('. ').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}{index < bio.intro.split('. ').length - 1 ? '.' : ''}</p>
          ))}

          <h3>Let's Talk...</h3>
          <div className="contact-information"> 
            <span>
              <p><strong>Email</strong></p>
              <a href={`mailto:${bio.email}`}>{bio.email}</a>
            </span>

            <span>
              <p><strong>Phone</strong></p>
              <p>{bio.number}</p>
            </span>
          </div>

          <div className="other-handles">
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/ekomobongekanem" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a href="https://www.instagram.com/oluwa_basticks" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://github.com/basticks02" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <button 
              onClick={() => window.open(bio.resumeLink, '_blank')} 
              className="resume-button"
            >
              Resume <i className="fa-regular fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
