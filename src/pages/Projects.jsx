import React, { useState } from "react";
import "../assets/styles/Project.css";
import HymnBookImage from "../assets/images/hymnbook.png";
import Ecommerce from "../assets/images/ecommerce.avif";
import Calculator from "../assets/images/Calculator.png";
import Header from "../components/Header";

export default function Projects() {
  const [projects] = useState([
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration.",
      image: Ecommerce,
      link: "https://github.com/your-ecommerce",
      remarks: ["Great UI!", "Would love to see more payment options."],
    },
    {
      title: "HymnBook Mobile App",
      description: "Cross-platform app for accessing and managing hymns.",
      image: HymnBookImage,
      link: "https://github.com/your-hymnbook-app",
      remarks: ["This is inspiring!", "Does it support offline access?"],
    },
    {
      title: "Calculator App",
      description: "A simple calculator application built with React.",
      image: Calculator,
      link: "https://github.com/your-calculator-app",
      remarks: ["Very user-friendly!", "Can you add more functions?"],
    },
  ]);

  return (
    <div className="projects-container">
      {/* Page Intro */}
      <Header />
      {/* Hero Section */}
      <section className="projects-hero">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          A collection of the work I've done — from web apps to mobile
          solutions, blending creativity with functionality.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                View Project
              </a>

              {/* Remarks Section */}
              <div className="remarks-section">
                <h3>What People Say</h3>
                <ul>
                  {project.remarks.map((remark, rIndex) => (
                    <li key={rIndex}>{remark}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
