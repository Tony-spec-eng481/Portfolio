import React from 'react';
import Button from './Button';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <span className="project-year">{project.year}</span>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          <Button href={project.github} variant="outline" className="project-link">
            <i className="icon-github"></i> Code
          </Button>
          <Button href={project.live} variant="primary" className="project-link">
            <i className="icon-live"></i> Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;