import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const finalText = "EKOMOBONG EKANEM";
  const [displayText, setDisplayText] = useState("");
  const chars = "!@#$%^&*()_+[]{}<>? ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let interval;
    let currentText = Array(finalText.length).fill("");
    let frame = 0;

    const decryptAnimation = () => {
      interval = setInterval(() => {
        currentText = currentText.map((char, index) => {
          // Start showing the correct character after a certain number of frames to prevent excessive delay
          if (frame > index * 15 + 30) {
            return finalText[index];
          }

          // Otherwise, randomly change the character with an increasing probability of being correct
          if (Math.random() > 0.01 + frame * 0.01) {
            return chars[Math.floor(Math.random() * chars.length)];
          } else {
            return finalText[index];
          }
        });

        setDisplayText(currentText.join(""));

        // Stop when the text is fully decrypted
        if (currentText.join("") === finalText) {
          clearInterval(interval);
        }
        
        frame++;
      }, 50);
    };

    decryptAnimation();

    return () => clearInterval(interval);
  }, [finalText]);

  return (
    <section className="hero" id="hero">
      <div className="hero-name" id="animated-name">
        {displayText}
      </div>
    </section>
  );
}
