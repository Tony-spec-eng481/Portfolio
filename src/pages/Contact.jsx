import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaDribbble, FaEnvelope } from "react-icons/fa";
import "../assets/styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out!
          </p>

          <div className="contact-info">
            <a href="mailto:johnwarui639@gmail.com" className="email-btn">
              <FaEnvelope className="btn-icon" />
              johnwarui639@gmail.com
            </a>
            <p className="or-text">or connect with me on social media</p>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/john-warui-36a6a02b9/" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Tony-spec-eng481" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>
            <a href="https://wa.me/254746278212" target="_blank" rel="noreferrer" className="social-link">
              <FaWhatsapp className="social-icon" />
              <span>WhatsApp</span>
            </a>
            <a href="/kj" target="_blank" rel="noreferrer" className="social-link">
              <FaDribbble className="social-icon" />
              <span>Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;