import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Contact from './components/Contact';





function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
