import React from 'react';
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-Image">
        <img src="logoes/heroImage.jpeg" alt="Hero" className="hero-image" />
        </div>
        <div className="hero-content">
          <h1>Brighter Homes, Smarter Homes</h1>
          <p>Upgrade your home with our innovative LED lighting solutions. Enjoy greater efficiency, enhanced ambiance, and improved control with our smart and stylish LED options.</p> 
          <button className="hero-button">Explore More</button> 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

