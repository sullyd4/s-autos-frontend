// client/src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-hero">
      <div className="hero-content">
        <h1 className="hero-headline">Prestige on Every Mile</h1>
        <p className="hero-subheadline">
          Discover, acquire, and trade the world's most exceptional vehicles.
          Your exclusive automotive journey starts here.
        </p>
        <div className="hero-cta">
          <Link to="/signup" className="btn-landing">Become a Member</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;