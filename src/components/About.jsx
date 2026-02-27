import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.set(".about-text, .about-image", { opacity: 0, y: 150 });

    gsap.to(".about-text", {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      }
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
      }
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <section
      id="about"
      className="about-section w-full min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6"
    >
      <div className="font-space max-w-6xl w-full grid md:grid-cols-2 items-center gap-8">
        
        {/* Text Section */}
        <div className="about-text rounded-2xl p-5 sm:p-8 md:p-12 shadow-lg border border-[#222]">
          <p className="text-lg sm:text-xl font-[Outfit] mb-2">About me</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            <span className="text-blue-500 font-bold">Tasin Bin Tareq</span>
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold leading-snug">
            I’m your <span className="text-white font-bold">Full Stack Developer</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
            From designing beautiful interfaces to making sure everything runs smoothly behind the scenes,
            I’ve got you covered. Let’s turn your ideas into interactive wonders that make waves online.
            With me by your side, your website will be more than just pixels.
          </p>
          <p className="text-[#ff6600] mt-6 font-semibold font-mono tracking-wide text-sm sm:text-base">
            {'{ Beyond your Imaginations }'}
          </p>

          {/* Download Resume Button */}
          {/* <a
            href="/files/tarunck-resume.pdf" // <-- Place your resume in /public/files/
            download
            className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            📄 Download Resume
          </a> */}
        </div>

        {/* Image Section */}
        <div className="about-image flex justify-center">
          <img
            src="/images/tasin.jpeg"
            alt="Tarun"
            className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
