import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ scrollY }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
    
    // Detect which section is in view based on scroll position
    const sections = ['home', 'about', 'projects', 'contact'];
    const windowHeight = window.innerHeight;
    
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [scrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">SHWETA MANDWALE</span>
          <span className="logo-dot">.</span>
        </div>
        
        <ul className="navbar-menu">
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a onClick={() => scrollToSection('home')}>HOME</a>
            <div className="nav-underline"></div>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a onClick={() => scrollToSection('about')}>ABOUT</a>
            <div className="nav-underline"></div>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <a onClick={() => scrollToSection('projects')}>PROJECTS</a>
            <div className="nav-underline"></div>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a onClick={() => scrollToSection('contact')}>CONTACT</a>
            <div className="nav-underline"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
