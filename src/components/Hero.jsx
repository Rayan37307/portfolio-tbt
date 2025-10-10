import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const iDotRef = useRef(null);
  const iStickRef = useRef(null);
  const typedWordRef = useRef(null);
  const cursorRef = useRef(null);
  const secondLineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const marqueeItems = [
    "🚀 Web Development",
    "💡 UI/UX Design",
    "⚡ Full Stack Projects",
    "🎨 Creative Coding",
    "🛠 Problem Solving",
  ];

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Clean up previous ScrollTriggers on re-renders
    const ctx = gsap.context(() => {
      // Calculate y movement based on screen size
      const yMovement = isMobile ? -100 : -150;
      const cursorHeight = isMobile ? 28 : 40;

      // ===== SCROLL TRIGGER HERO PIN =====
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Set initial position to prevent stick from moving
      gsap.set(iStickRef.current, {
        position: "absolute",
        bottom: 0,
      });

      // Animate only the dot moving up and transforming into cursor
      pinTl
        .to(iDotRef.current, {
          y: yMovement,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(iDotRef.current, {
          height: cursorHeight,
          width: 4,
          borderRadius: "2px",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .set(cursorRef.current, {
          display: "inline-block",
          opacity: 1,
        })
        .set(iDotRef.current, {
          opacity: 0,
          display: "none",
        })
        .to(typedWordRef.current, {
          text: "programmer",
          duration: 2,
          ease: "none",
        })
        .call(() => {
          // Start blinking cursor AFTER typing finishes
          gsap.to(cursorRef.current, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "power1.inOut",
          });
        });
    });

    return () => ctx.revert(); // Cleanup
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      className="hero-section bg-[#0d0d0d] relative h-screen w-full text-white flex flex-col justify-center items-center overflow-hidden px-4"
    >
      {/* Main heading */}
      <div className="relative z-10 text-center font-space w-full max-w-7xl">
        <h2 className="hero-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight flex flex-col items-center justify-center gap-2 md:gap-4">
          <span className="flex items-baseline gap-1 md:gap-2 min-h-[2.5rem] sm:min-h-[3.5rem] md:min-h-[5rem] lg:min-h-[6rem]">
            <span ref={typedWordRef} className="typed-word text-orange-500"></span>
            <span
              ref={cursorRef}
              className="inline-block w-[3px] md:w-1 h-7 sm:h-9 md:h-12 lg:h-14 bg-white opacity-0"
              style={{ display: "none" }}
            ></span>
          </span>
          <span ref={secondLineRef} className="flex items-center gap-1 md:gap-2 flex-wrap justify-center">
            <span>Bringing</span>
            <span className="relative inline-flex flex-col items-center w-3 sm:w-4 h-12 sm:h-14 md:h-16 lg:h-[70px] justify-end">
              <span
                ref={iDotRef}
                className="i-dot w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full absolute"
                style={{ top: '-5px' }}
              ></span>
              <span
                ref={iStickRef}
                className="i-stick w-2 sm:w-[10px] h-9 sm:h-10 md:h-12 lg:h-14 bg-white"
              ></span>
            </span>
            <span>deas to life</span>
          </span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="absolute font-space bottom-0 left-0 w-full overflow-hidden py-3 md:py-4 bg-gradient-to-t from-[#0d0d0d] to-transparent">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="mx-4 md:mx-8 text-sm md:text-lg font-semibold text-gray-400">
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;