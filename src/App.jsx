import React, { useEffect } from 'react';
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

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="who-i-help">
        <WhoIHelp />
      </div>

      <div id="solutions">
        <Solutions />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="process">
        <Process />
      </div>

      <div id="stats">
        <Stats />
      </div>

      <div id="building">
        <CurrentlyBuilding />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="audit">
        <FreeAudit />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
