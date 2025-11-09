import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Complete redesign of shopping experience",
      tags: ["UX Research", "UI Design", "Prototyping"],
      year: "2024"
    },
    {
      id: 2,
      title: "Healthcare App",
      description: "Patient management system",
      tags: ["Mobile Design", "User Testing"],
      year: "2023"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Data visualization and analytics",
      tags: ["Dashboard", "Data Viz"],
      year: "2023"
    },
    {
      id: 4,
      title: "Educational Platform",
      description: "Online learning experience",
      tags: ["Web Design", "Interaction"],
      year: "2022"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">
          <span className="title-icon">●</span> Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  {/* Project image placeholder */}
                </div>
                <div className="project-overlay">
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="check-this-out">
          <div className="cto-card">
            <h3>research paper/ white paper</h3>
            <p>Exploring design methodologies and user behavior patterns</p>
            <button className="cto-btn">Read More</button>
          </div>
        </div>

        <div className="credentials">
          <div className="credential-badge">
            <img src="/api/placeholder/100/100" alt="Certification" className="badge-img" />
          </div>
          <div className="credential-info">
            <h4>Sign in to see more</h4>
            <p>View detailed case studies and process documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
