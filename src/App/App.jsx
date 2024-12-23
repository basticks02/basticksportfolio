import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import CurrentUpdates from '../CurrentUpdates/CurrentUpdates';
import Timeline from '../Timeline/Timeline';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import './App.css';

export default function App() {
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsLaptop(window.innerWidth >= 1024);
    }
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleScroll() {
    setNavbarTransparent(window.scrollY < window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  if (!isLaptop) {
    return (
      <div className="no-laptop">
        <p>Opps! Seems you're using a small screen. Please use a laptop or larger screen (≥ 1024px) to view the site</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar transparent={navbarTransparent} />
      <Hero id="hero" />
      <CurrentUpdates id="current-updates" />
      <Experiences id="experiences" />
      <Timeline id="timeline" />
      <Projects id="projects" />
      <Footer id="footer" />
    </div>
  );
}
