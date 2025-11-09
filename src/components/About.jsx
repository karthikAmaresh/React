import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <div className="profile-image">
              <div className="image-placeholder">
                {/* Add profile image here */}
                <div className="profile-circle"></div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-section">
              <h2 className="section-title">
                <span className="title-icon">●</span> Work Experience
              </h2>
              <div className="experience-list">
                <div className="experience-item">
                  <h3>Senior UX Designer</h3>
                  <p className="company">Tech Company Name</p>
                  <p className="duration">2022 - Present</p>
                  <p className="description">
                    Leading design initiatives for enterprise products, focusing on user-centered design principles
                    and creating seamless experiences across multiple platforms.
                  </p>
                </div>
                <div className="experience-item">
                  <h3>UX Designer</h3>
                  <p className="company">Design Studio</p>
                  <p className="duration">2020 - 2022</p>
                  <p className="description">
                    Collaborated with cross-functional teams to design and implement user interfaces
                    for web and mobile applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2 className="section-title">
                <span className="title-icon">●</span> Industry Exposure
              </h2>
              <div className="skills-container">
                <span className="skill-tag">UX Research</span>
                <span className="skill-tag">Product Design</span>
                <span className="skill-tag">Design Systems</span>
                <span className="skill-tag">Prototyping</span>
                <span className="skill-tag">User Testing</span>
                <span className="skill-tag">Wireframing</span>
              </div>
            </div>

            <div className="about-section">
              <h2 className="section-title">
                <span className="title-icon">●</span> Education
              </h2>
              <div className="education-list">
                <div className="education-item">
                  <h3>Master's in Design</h3>
                  <p className="institution">Design University</p>
                  <p className="year">2018 - 2020</p>
                </div>
                <div className="education-item">
                  <h3>Bachelor's in Design</h3>
                  <p className="institution">Design College</p>
                  <p className="year">2014 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
