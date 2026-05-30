import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma, FaWordpress } from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMysql, SiMongodb, SiGreensock,
  SiPython, SiShopify, SiNextdotjs, SiPostgresql, SiN8N, SiExpo, SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const row1 = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "GSAP", icon: <SiGreensock className="text-green-300" /> },
  { name: "Shopify", icon: <SiShopify className="text-green-500" /> },
];

const row2 = [
  { name: "React Native", icon: <TbBrandReactNative className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "n8n", icon: <SiN8N className="text-red-500" /> },
  { name: "Expo", icon: <SiExpo className="text-white" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
];

const TechBadge = ({ name, icon }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border border-gray-800 rounded-xl mx-2 shrink-0">
    <span className="text-xl">{icon}</span>
    <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{name}</span>
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="bg-[#0d0d0d] text-white w-full py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12" ref={headingRef}>
        <p className="text-[#ff6600] text-sm font-semibold tracking-widest uppercase mb-3">Tech Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted <span className="text-[#ff6600]">Technologies</span>
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4 overflow-hidden">
        <div
          className="flex"
          style={{ animation: "techRow1 35s linear infinite", display: "inline-flex", whiteSpace: "nowrap" }}
        >
          {[...row1, ...row1, ...row1].map((t, i) => (
            <TechBadge key={i} name={t.name} icon={t.icon} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div
          className="flex"
          style={{ animation: "techRow2 35s linear infinite", display: "inline-flex", whiteSpace: "nowrap" }}
        >
          {[...row2, ...row2, ...row2].map((t, i) => (
            <TechBadge key={i} name={t.name} icon={t.icon} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes techRow1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes techRow2 {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
