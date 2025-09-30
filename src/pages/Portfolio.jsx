import React from "react";
import "./Portfolio.css"; // External CSS
import FitnessApp from "../assets/images/fitness.avif";
import EcommercePlatform from "../assets/images/ecommerce.avif";
import AnalyticsDashboard from "../assets/images/analytics.avif";


function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">My Work</h2>

      <div className="gallery">
        <div className="portfolio-item">
          <img src={EcommercePlatform} alt="E-commerce Platform" />
          <div className="portfolio-overlay">
            <h3>E-commerce Platform</h3>
            <p>Full-stack e-commerce solution with payment integration</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={FitnessApp} alt="Fitness App" />
          <div className="portfolio-overlay">
            <h3>Fitness Mobile App</h3>
            <p>Cross-platform fitness tracking application</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={AnalyticsDashboard} alt="Analytics Dashboard" />
          <div className="portfolio-overlay">
            <h3>Analytics Dashboard</h3>
            <p>Real-time data visualization for business metrics</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={FitnessApp} alt="UI Design System" />
          <div className="portfolio-overlay">
            <h3>UI Design System</h3>
            <p>Comprehensive design system for consistent branding</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={EcommercePlatform} alt="Corporate Website" />
          <div className="portfolio-overlay">
            <h3>Corporate Website</h3>
            <p>Modern responsive website for tech startup</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
