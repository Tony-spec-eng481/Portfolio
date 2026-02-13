import React from 'react';
import ProjectCard from './ProjectCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Projects.css';

const Projects = () => {
  const projectsRef = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with real-time inventory, payment processing, and admin dashboard. Implements cart management, user authentication, and order tracking.',
      image: '/assets/images/ecommerce-project.jpg',
      tech: ['React', 'Firebase', 'Redux', 'Stripe', 'Tailwind'],
      github: 'https://github.com/johnwarui/ecommerce',
      live: 'https://ecommerce-demo.com',
      year: '2024'
    },
    {
      id: 2,
      title: 'Supermarket Management System',
      description: 'Comprehensive management system for supermarket operations including inventory tracking, employee management, sales analytics, and supplier management.',
      image: '/assets/images/supermarket-project.jpg',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'Material-UI'],
      github: 'https://github.com/johnwarui/supermarket-system',
      live: 'https://supermarket-demo.com',
      year: '2023'
    },
    {
      id: 3,
      title: 'Web Technologies School',
      description: 'Interactive learning platform for web technologies with coding challenges, video tutorials, project-based learning, and progress tracking.',
      image: '/assets/images/webtech-project.jpg',
      tech: ['React', 'Python', 'Django', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/johnwarui/webtech-school',
      live: 'https://webtech-school.com',
      year: '2024'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" ref={projectsRef}>Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-wrapper"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;