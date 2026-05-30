import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.set(".about-text, .about-image", { opacity: 0, y: 80 });

    gsap.to(".about-text", {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });

    gsap.to(".about-image", {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 85%",
        end: "top 35%",
        scrub: 1.5,
      },
    });

    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, []);

  return (
    <section
      id="about"
      className="about-section w-full min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-10">

        {/* Text */}
        <div className="about-text rounded-2xl p-8 md:p-12 border border-gray-800 bg-[#111]">
          <p className="text-[#ff6600] text-sm font-semibold tracking-widest uppercase mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-1">
            <span className="text-[#ff6600]">Tasin Bin Tareq</span>
          </h2>
          <h3 className="text-xl font-semibold text-gray-300 mb-5">
            Full-Stack Developer & Automation Engineer
          </h3>

          <p className="text-gray-400 font-outfit text-base leading-relaxed mb-6">
            I'm a Full-Stack Developer and Automation Engineer focused on building systems that help businesses scale.
            My work combines modern web development, business automation, and user-focused product design to create
            solutions that generate measurable impact.
          </p>

          <p className="text-gray-400 font-outfit text-base leading-relaxed mb-6">
            From React Native mobile apps and Next.js web platforms to FastAPI backends and agentic AI workflows,
            I build production-grade systems end-to-end — with a bias toward shipping fast and clean architecture that scales.
          </p>

          <p className="text-[#ff6600] font-semibold font-mono tracking-wide text-sm">
            {'{ Beyond your Imaginations }'}
          </p>

          <a
            href="/files/tasin.pdf"
            download
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(255,102,0,0.35)]"
          >
            Download Resume →
          </a>
        </div>

        {/* Image */}
        <div className="about-image flex justify-center">
          <img
            src="/images/about.png"
            alt="Tasin Bin Tareq"
            className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover border border-gray-800"
            onError={(e) => { e.target.src = "/images/about.jpeg"; }}
          />
        </div>

      </div>
    </section>
  );
};

export default About;
