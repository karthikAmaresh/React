import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      head: "HEAD",
      title: "Title",
      description: "description"
    },
    {
      id: 2,
      head: "HEAD",
      title: "Title",
      description: "description"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

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
              </div>
              <div className="project-info">
                <span className="project-head">{project.head}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="check-this-out">
          <h2 className="cto-title">Check This Out</h2>
          <div className="cto-card">
            <div className="cto-content">
              <p className="cto-text">research paper/<br/>white paper</p>
            </div>
            <div className="cto-footer">
              <span className="cto-head">HEAD</span>
              <h4 className="cto-card-title">Title</h4>
              <p className="cto-description">description</p>
            </div>
          </div>
        </div>

        <div className="credentials">
          <div className="credential-logo">
            <div className="logo-placeholder">
              {/* Logo placeholder */}
            </div>
          </div>
          <div className="credential-circle">
            <div className="circle-placeholder"></div>
          </div>
          <div className="credential-text">
            <p>logo in this color</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
