import React from "react";

function Services() {
  return (
    <section id="services">
      <h2 className="section-title">What I Do</h2>
      <div className="services">
        <a href="/" className="service-card">
          <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
          <h3 className="service-title">Web Development</h3>
          <p>Custom websites built with modern technologies like React, Vue, and Node.js tailored to your business needs.</p>
        </a>

        <a href="/" className="service-card">
          <div className="service-icon"><i className="fas fa-mobile-alt"></i></div>
          <h3 className="service-title">App Development</h3>
          <p>Beautiful, functional mobile applications for iOS and Android that engage your users.</p>
        </a>

        <a href="/" className="service-card">
          <div className="service-icon"><i className="fas fa-paint-brush"></i></div>
          <h3 className="service-title">UI/UX Design</h3>
          <p>Thoughtful interfaces that provide seamless user experiences and drive conversions.</p>
        </a>
      </div>
    </section>
  );
}

export default Services;
