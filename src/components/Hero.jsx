import React from 'react';
import Button from './Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useScrollAnimation();

  return (
    <section id="home" className="hero">
       {/* Background Video */}
  <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/waterbackground.mp4" type="video/mp4" />
  </video>
  
      <div className="container hero-container">
        <div className="hero-content" ref={heroRef}>
          <span className="hero-greeting">👋 Hello, I'm</span>
          <h1 className="hero-name">John Warui</h1>
          <h2 className="hero-title">Full Stack Software Engineer</h2>
          <p className="hero-tagline">
            Building scalable, performant, and user-centric web applications 
            that solve real-world problems with elegant code.
          </p>
          <div className="hero-cta">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <a href="#about" className="scroll-link">
            <span className="scroll-text">Scroll Down</span>
            <span className="scroll-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;   