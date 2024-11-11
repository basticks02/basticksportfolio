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

  const handleScroll = () => {
    setNavbarTransparent(window.scrollY < window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar transparent={navbarTransparent} />
      <Hero id="hero" />
      <CurrentUpdates id="current-updates" />
      <Timeline id="timeline" />
      <Experiences id="experiences" />
      <Projects id="projects" />
      <Footer id="footer" />
    </div>
  );
}
