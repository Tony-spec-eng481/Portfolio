import React from 'react';
import profilePhoto from '../assets/images/person.webp';
import '../assets/styles/About.css';
import Header from '../components/Header';

const About = () => {
  const skills = [
    'React', 'Node.js', 'Java', 'JavaScript',
    'MongoDB', 'Git', 'Firebase'
  ];

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'None',
      period: '2025 - Present',
      description: 'Leading development of responsive web applications using React and implementing modern UI/UX designs.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2025',
      description: 'Built end-to-end web solutions for clients, integrated third-party APIs, and optimized application performance for better user experience.'
    }
  ];

  return (
    <div className="about-container">
        <Header />
      {/* Hero Section */}
      <section className="portfolio-hero about-hero">
        <div className="about-hero-content">
          <div className="about-hero-grid">
            <div className="about-hero-text">
              <h1 className="about-hero-title">
                Hi, I'm <span className="gradient-text">John Warui</span>
              </h1>
              <p className="about-hero-description">
                A passionate full-stack developer with 1 year of experience crafting 
                beautiful, functional, and user-centered digital experiences. I love 
                turning complex problems into simple, elegant solutions.
              </p>
              <div className="about-hero-buttons">
                <a href="/resume.pdf" className="glow-button" download>
                  Download Resume
                </a>
                <a href="/project" className="outline-button">
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="about-hero-image">
              <div className="image-container">
                <img 
                  src={profilePhoto} 
                  alt="John Warui - Software Engineer"
                  className="profile-image"
                />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-content">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="section-content">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experiences-list">
            {experiences.map((exp, index) => (
              <div key={index} className="portfolio-card experience-card">
                <div className="experience-grid">
                  <div className="experience-info">
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-period">{exp.period}</p>
                  </div>
                  <div className="experience-description">
                    <p>{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me-section">
        <div className="section-content">
          <div className="about-me-grid">
            <div className="about-me-text">
              <h2 className="section-title">About Me</h2>
              <div className="about-me-content">
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  contributing to open-source projects, or sharing knowledge through 
                  technical blog posts and community meetups.
                </p>
                <p>
                  I believe in continuous learning and staying ahead of the curve. 
                  Whether it's mastering a new framework, diving deep into system 
                  architecture, or exploring emerging technologies like AI and Web3, 
                  I'm always excited to expand my skill set.
                </p>
                <p>
                  My approach to development is user-first, performance-focused, and 
                  collaboration-driven. I thrive in environments where I can work 
                  closely with designers, product managers, and other developers to 
                  create something truly impactful.
                </p>
              </div>
            </div>
            
            <div className="about-me-sidebar">
              <div className="portfolio-card sidebar-card">
                <h3 className="sidebar-title">Quick Facts</h3>
                <ul className="facts-list">
                  <li>🎓 Software Engineering Degree</li>
                  <li>💼 1 Year Experience</li>
                  <li>🌍 Remote-First Mindset</li>
                  <li>☕ Coffee Enthusiast</li>
                  <li>🎯 Detail-Oriented</li>
                  <li>🚀 Innovation Focused</li>
                </ul>
              </div>
              
              <div className="portfolio-card sidebar-card">
                <h3 className="sidebar-title">Interests</h3>
                <div className="interests-container">
                  <span className="skill-tag">Travel</span>
                  <span className="skill-tag">Gaming</span>
                  <span className="skill-tag">Fitness</span>
                  <span className="skill-tag">Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-section">
        <div className="section-content contact-content">
          <div className="portfolio-card contact-card">
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
            <div className="contact-buttons">
              <a href="mailto:johnwarui639@gmail.com" className="glow-button">
                Get In Touch
              </a>
              <a 
                href="https://www.linkedin.com/in/john-warui-36a6a02b9/" 
                className="outline-button" 
                target="_blank" 
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

//Style this with an external css and add links to the buttons in this page make this page look attractive and responsive. Let their be livelyness to this page