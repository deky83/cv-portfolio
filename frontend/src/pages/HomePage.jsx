import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSkills from '../components/AboutSkills';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSkills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;