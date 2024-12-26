import React from 'react';
import './Navbar.css';

export default function Navbar({ transparent }) {
  return (
    <nav className={transparent ? 'navbar transparent' : 'navbar'} data-aos='fade-down'>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#current-updates">Updates</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#projects">Projects & Others</a></li>
      </ul>
      
    </nav>
  );
}
 