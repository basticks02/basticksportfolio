import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const firstName = "EKOMOBONG";
  const lastName = "EKANEM";
  const [displayFirstName, setDisplayFirstName] = useState("");
  const [displayLastName, setDisplayLastName] = useState("");
  const chars = "!@#$%^&*()_+[]{}<>? ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let firstNameInterval, lastNameInterval;
    let currentFirstName = Array(firstName.length).fill("");
    let currentLastName = Array(lastName.length).fill("");
    let frame = 0;

    const decryptAnimation = (nameArray, setDisplay, finalName, delayMultiplier) => {
      return setInterval(() => {
        nameArray = nameArray.map((char, index) => {
          if (frame > index * 15 + delayMultiplier) {
            return finalName[index];
          }

          if (Math.random() > 0.01 + frame * 0.01) {
            return chars[Math.floor(Math.random() * chars.length)];
          } else {
            return finalName[index];
          }
        });

        setDisplay(nameArray.join(""));

        if (nameArray.join("") === finalName) {
          clearInterval(finalName === firstName ? firstNameInterval : lastNameInterval);
        }
        
        frame++;
      }, 50);
    };

    firstNameInterval = decryptAnimation(currentFirstName, setDisplayFirstName, firstName, 45);
    lastNameInterval = decryptAnimation(currentLastName, setDisplayLastName, lastName, 60);

    return () => {
      clearInterval(firstNameInterval);
      clearInterval(lastNameInterval);
    };
  }, [firstName, lastName]);

  return (
    <section className="hero" id="hero">
      <div className="hero-name">
        <div className="first-name" id="animated-first-name">{displayFirstName}</div>
        <div className="last-name" id="animated-last-name">{displayLastName}</div>
      </div>
    </section>
  );
}
