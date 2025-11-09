import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ scrollY }) => {
  const [textOpacity, setTextOpacity] = useState(0.2);
  const [puzzleVisible, setPuzzleVisible] = useState(false);

  useEffect(() => {
    // Calculate opacity for "I Design With" text based on scroll
    // Starts at 0.2 (20%) and increases to 0.3 (30%) when scrolling
    const newOpacity = Math.min(0.2 + (scrollY / 800) * 0.1, 0.3);
    setTextOpacity(newOpacity);

    // Show puzzle pieces when scrolling down
    if (scrollY > 150) {
      setPuzzleVisible(true);
    } else {
      setPuzzleVisible(false);
    }
  }, [scrollY]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Landing animation - appears on page load */}
        <div className="hero-landing">
          <div className="hero-icon fade-in">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <path
                d="M30 10 Q35 15 30 20 Q25 15 30 10 M30 20 L30 70"
                stroke="var(--accent-color)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          <h2 className="hero-greeting fade-in" style={{ animationDelay: '0.2s' }}>
            Hi!
          </h2>
          
          <h1 className="hero-name fade-in" style={{ animationDelay: '0.4s' }}>
            I'm <span className="name-highlight">Shweta Mandwale</span>.
          </h1>
          
          <p className="hero-tagline fade-in" style={{ animationDelay: '0.6s' }}>
            An ardent designer striving to create meaningful solutions.
          </p>
        </div>

        {/* Scroll-triggered content */}
        <div className="hero-scroll-content">
          <h2 
            className="hero-design-text" 
            style={{ opacity: textOpacity }}
          >
            I Design With
          </h2>

          {/* Puzzle pieces container */}
          <div className={`puzzle-container ${puzzleVisible ? 'visible' : ''}`}>
            <div className="puzzle-piece puzzle-1">
              <div className="puzzle-content"></div>
            </div>
            <div className="puzzle-piece puzzle-2">
              <div className="puzzle-content"></div>
            </div>
            <div className="puzzle-piece puzzle-3">
              <div className="puzzle-content"></div>
            </div>
            <div className="puzzle-piece puzzle-4">
              <div className="puzzle-content"></div>
            </div>
          </div>

          <div className="hero-principles">
            <div className="principle fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="red-box"></div>
              <span className="principle-label">Strategic in</span>
              <span className="principle-value">intent.</span>
            </div>
            <div className="principle fade-in-up" style={{ animationDelay: '1s' }}>
              <span className="principle-label">Human in</span>
              <span className="principle-value">focus.</span>
              <div className="red-box"></div>
            </div>
            <div className="principle fade-in-up" style={{ animationDelay: '1.2s' }}>
              <div className="red-box"></div>
              <span className="principle-label">Systemic in</span>
              <span className="principle-value">vision.</span>
            </div>
          </div>

          <button className="replay-btn">REPLAY &gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
