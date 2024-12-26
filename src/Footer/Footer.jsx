import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer-text'>
        <p>© 2024 Ekomobong Ekanem</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/basticks02" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ekomobongekanem" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/oluwa_basticks" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
