import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import PortfolioGrid from './components/PortfolioGrid';
import ContactSection from './components/Contacts';
import PresetTester from './components/PresetTester';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <ImageSlider />
      <PortfolioGrid />
      <PresetTester />
       <ContactSection />
      <Footer />
    </div>
  );
}