import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "70+", label: "GitHub Repositories", sub: "Public & private projects" },
  { value: "3+", label: "Years of Experience", sub: "Building web & mobile apps" },
  { value: "10+", label: "Full-Stack Projects", sub: "Shipped to production" },
  { value: "MERN", label: "Core Stack", sub: "+ Next.js, FastAPI, React Native" },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="stats" className="bg-[#0d0d0d] text-white w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#ff6600] text-sm font-semibold tracking-widest uppercase mb-3">By the Numbers</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Portfolio <span className="text-[#ff6600]">Stats</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-center hover:border-[#ff6600]/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#ff6600] mb-2">{s.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-gray-500 text-xs font-outfit">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
