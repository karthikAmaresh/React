import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <div className="about-section">
              <h2 className="section-title">Work Experience</h2>
              <div className="divider"></div>
              
              <div className="experience-item">
                <h3>Senior Consultant - UX Designer</h3>
                <p className="company">Neudesic, an IBM Company | 2022 – 2024</p>
              </div>

              <div className="experience-item">
                <h3>Solution Designer</h3>
                <p className="company">LearningMate Solutions | 2020 – 2022</p>
              </div>

              <div className="experience-item">
                <h3>Student Researcher</h3>
                <p className="company">Remember Now Research Project</p>
                <p className="company">Harvard T.H. Chan School of Public Health | 2020 – 2021</p>
              </div>

              <div className="experience-item">
                <h3>Design Intern</h3>
                <p className="company">TATATRUSTS | 2019 - 2019</p>
              </div>
            </div>

            <div className="about-section">
              <h2 className="section-title">Industry Exposure</h2>
              <div className="divider"></div>
              
              <div className="exposure-item">
                <p>Led end-to-end design of <strong>Enterprise SaaS products</strong> securing IBM and Microsoft endorsements for enterprise deployment</p>
              </div>

              <div className="exposure-item">
                <p>Led RFP initiatives that secured <strong>new enterprise client engagements</strong> and <strong>revenue opportunities</strong></p>
              </div>

              <div className="exposure-item">
                <p><strong>40% improvement in task completion</strong> through strategic Intranet redesign</p>
              </div>

              <div className="exposure-item">
                <p>Translated <strong>organizational challenges into design interventions</strong> via research, and cross-functional workshops (IT/HR/Exec) ensuring adoption and change management success</p>
              </div>

              <div className="exposure-item">
                <p>Built <strong>Design Systems</strong> for enterprise consistency and accelerated development velocity</p>
              </div>
            </div>

            <div className="about-section">
              <h2 className="section-title">Education</h2>
              <div className="divider"></div>
              
              <div className="education-item">
                <h3>Master of Design in Strategic Design Management</h3>
                <p className="institution">National Institute of Design, Gandhinagar | 2024 – Present</p>
              </div>

              <div className="education-item">
                <h3>Bachelor of Design in Humanising Technology</h3>
                <p className="institution">NMIMS School of Design, Mumbai | 2017 – 2021</p>
              </div>

              <div className="action-buttons">
                <button className="action-btn">RESUME</button>
                <button className="action-btn">LINKEDIN</button>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="profile-image">
              <div className="image-placeholder">
                {/* Add profile image here */}
                <div className="profile-circle"></div>
              </div>
            </div>
            
            <div className="skills-container">
              <span className="skill-tag">Design Strategy</span>
              <span className="skill-tag">Product Design</span>
              <span className="skill-tag">Service Design</span>
              <span className="skill-tag">User Research</span>
              <span className="skill-tag">Behavioral Design</span>
              <span className="skill-tag">Value Creation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
