import React from "react";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="logo">MyPortfolio</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/project">Projects</a>
      </nav>
      <a href="#contact" className="hire-me-btn">Hire Me</a>
    </header>
  );
};

export default Header;
