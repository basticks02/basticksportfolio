import React, { useState, useRef, useEffect } from 'react';
import './Timeline.css';
import DataCard from '../DataCard/DataCard';
import data from '../data.json';

export default function Timeline() {
  const [view, setView] = useState('2024');
  const filteredEvents = data.timeline.find((yearBlock) => yearBlock.year.toString() === view)?.events || [];

  const timelineRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (timelineRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    if (timelineRef.current) {
      timelineRef.current.addEventListener('scroll', updateScrollButtons);
    }
    return () => {
      if (timelineRef.current) {
        timelineRef.current.removeEventListener('scroll', updateScrollButtons);
      }
    };
  }, [filteredEvents]);

  const scrollLeftFunc = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRightFunc = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({
        top: 0,
        left: 300, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="timeline" id="timeline" data-aos='fade-up'>
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
      <div className="timeline-container">
        {canScrollLeft && (
          <button className="scroll-button left" onClick={scrollLeftFunc} aria-label="Scroll Left">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        )}

        {/* Timeline Grid */}
        <div className="timeline-grid" ref={timelineRef}>
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
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
            ))
          ) : (
            <p>No events to display for {view}</p>
          )}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button className="scroll-button right" onClick={scrollRightFunc} aria-label="Scroll Right">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        )}
      </div>
    </section>
  );
}
