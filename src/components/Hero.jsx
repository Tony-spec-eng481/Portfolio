import React from "react";
import Photo from "../assets/images/person.webp";
//import "../assets/styles/main.css"; // Import the CSS file

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Florant</h1>
        <p className="tagline">
          Web Designer & App Developer creating digital experiences that matter
        </p>
        <div className="hero-buttons">
          <a href="/contact" className="btn">Get in Touch</a>
          <a href="/project" className="btn btn-outline">View My Work</a>
        </div>
      </div>   
      <div className="hero-image">
        <img src={Photo} alt="Florant - Web Designer and App Developer" />
      </div>
    </section>
  );
}

export default Hero;