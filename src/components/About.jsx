import React from 'react';
import Button from './Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/About.css';

const About = () => {
  const aboutRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();

  const techStack = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind', 'Framer Motion'],
    backend: ['Node.js', 'Python', 'Express', 'Django', 'Firebase', 'MySQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Jest', 'Figma', 'Postman', 'Vercel']
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" ref={aboutRef}>About Me</h2>
        
        <div className="about-grid">
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                I'm a Full Stack Software Engineer with 5+ years of experience building 
                robust and scalable web applications. I specialize in creating elegant 
                solutions to complex problems, with a strong focus on performance, 
                accessibility, and user experience.
              </p>
              
              <div className="career-goals">
                <h3>Career Goals</h3>
                <p>
                  Currently leading frontend development at a fintech startup, aiming to 
                  transition into a solutions architect role. Passionate about mentoring 
                  junior developers and contributing to open-source projects that make a 
                  difference in the developer community.
                </p>
              </div>
            </div>
            
            <Button href="/resume.pdf" variant="outline" className="cv-button">
              📄 Download CV
            </Button>
          </div>
          
          <div className="skills-section" ref={skillsRef}>
            <h3>Technical Arsenal</h3>
            
            <div className="skills-grid">
              <div className="skill-category">
                <span className="skill-category-icon">🎨</span>
                <h4>Frontend</h4>
                <div className="skill-tags">
                  {techStack.frontend.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <span className="skill-category-icon">⚙️</span>
                <h4>Backend</h4>
                <div className="skill-tags">
                  {techStack.backend.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <span className="skill-category-icon">🛠️</span>
                <h4>Tools & DevOps</h4>
                <div className="skill-tags">
                  {techStack.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
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