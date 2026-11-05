import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WhoIHelp from './components/WhoIHelp';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Process from './components/Process';
import Stats from './components/Stats';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import About from './components/About';
import FreeAudit from './components/FreeAudit';
import Contact from './components/Contact';


const App = () => {

  return (
    <div className="min-h-screen bg-[#060607] text-[var(--ink)]">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <WhoIHelp />
        <Solutions />
        <Projects />
        <Process />
        <Stats />
        <CurrentlyBuilding />
        <About />
        <FreeAudit />
        <Contact />
      </main>
    </div>
  );
};

export default App;
