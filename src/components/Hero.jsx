import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const marqueeItems = [
    "🚀 Web Development",
    "💡 UI/UX Design",
    "⚡ Full Stack Projects",
    "🎨 Creative Coding",
    "🛠 Problem Solving",
  ];

  useEffect(() => {
    // ===== ENTRY ANIMATION =====
    const tl = gsap.timeline();

    tl.from(".hero-watermark", {
      scale: 0.8,
      duration: 1,
      ease: "power3.out"
    })
    .from(".hero-image", {
      duration: 1,
      ease: "power3.out"
    }, "-=0.7")
    .from(".hero-heading", {
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

    // ===== SCROLL ANIMATION =====
    gsap.to(".hero-image", {
      y: -100,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(".hero-watermark", {
      scale: 1.3,
      opacity: 0.08,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  return (
    <section className="hero-section bg-[#0d0d0d] relative h-screen w-full text-white flex flex-col justify-center items-center overflow-hidden px-4">
      
      {/* Watermark background text */}
      <h1 className="hero-watermark absolute text-[400px] font-space font-extrabold text-gray-100 opacity-10 select-none z-0">
        TASIN
      </h1>

      {/* Main content */}
      <div className="relative z-10 text-center font-space">
        <div className="bg-transparent font-prata text-3xl md:text-6xl font-medium flex justify-center items-center gap-2">
          <span>i’m</span>
          <img 
            src="/images/PROGRAMMER.png" 
            alt="tarun" 
            className="hero-image w-56 h-20 rounded-full object-cover"
          />
          <span>Tasin</span>
        </div>

        {/* Big heading */}
        <h2 className="hero-heading text-4xl md:text-8xl font-bold leading-tight">
          Bringing Ideas to Reality
        </h2>
      </div>

      {/* Marquee */}
      <div className="absolute font-space bottom-0 w-full overflow-hidden py-4 backdrop-blur">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="mx-8 text-lg font-semibold text-gray-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
