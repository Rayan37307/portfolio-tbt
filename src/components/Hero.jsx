import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const marqueeItems = [
    "🛒 Ecommerce Platforms",
    "🤖 AI Automations",
    "📚 LMS Platforms",
    "⚡ SaaS Applications",
    "📊 Admin Dashboards",
    "🔧 Business Automation",
    "📱 Mobile Apps",
    "🏗 Custom CRM Systems",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [badgeRef.current, headlineRef.current, subRef.current, ctaRef.current, statsRef.current],
        { y: 50, opacity: 0 }
      );
      gsap.to(
        [badgeRef.current, headlineRef.current, subRef.current, ctaRef.current, statsRef.current],
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.13,
          delay: 0.2,
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section bg-[#0d0d0d] relative min-h-screen w-full text-white flex flex-col justify-center items-center overflow-hidden px-6 pt-24 pb-24"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Orange ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ff6600]/7 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff6600]/30 bg-[#ff6600]/10 text-[#ff6600] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff6600] animate-pulse" />
          Full-Stack Developer & Automation Engineer
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.1] tracking-tight mb-6"
        >
          Building{" "}
          <span className="text-[#ff6600]">Ecommerce Platforms</span>,{" "}
          Automation Systems &{" "}
          <span className="text-[#ff6600]">Growth-Focused</span>{" "}
          Web Applications
        </h1>

        {/* Sub-headline */}
        <p
          ref={subRef}
          className="font-outfit text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I help ecommerce brands, course creators, and startups automate
          operations, improve conversions, and scale through custom software
          solutions.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:tasindevx@gmail.com"
            className="px-8 py-4 bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(255,102,0,0.35)] text-base"
          >
            Book a Discovery Call
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border border-gray-700 hover:border-[#ff6600] text-white hover:text-[#ff6600] font-semibold rounded-full transition-all duration-300 text-base cursor-pointer"
          >
            View Case Studies →
          </a>
        </div>

        {/* Quick stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "70+", label: "Repositories" },
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Shipped" },
            { value: "MERN", label: "+ Next.js Stack" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ff6600]">{s.value}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 border-t border-gray-800/40">
        <div className="flex whitespace-nowrap" style={{ animation: "heroMarquee 30s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="mx-8 text-sm font-medium text-gray-600">
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
