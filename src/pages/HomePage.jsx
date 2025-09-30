import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "./Portfolio";
import PromoBanner from "../components/PromoBanner";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import '../assets/styles/HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <PromoBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
