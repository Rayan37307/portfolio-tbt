import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// React Icons for skills
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaFigma, FaWordpress } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql, SiCanva, SiMongodb, SiGreensock, SiPython, SiFramer, SiShopify, SiNextdotjs, SiPostgresql } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// Skills data
const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Gsap", icon: <SiGreensock className="text-green-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Mongodb", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-300" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "Framer", icon: <SiFramer className="text-purple-600" /> },
  { name: "Shopify", icon: <SiShopify className="text-green-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
];

const Skills = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: skillsRef.current[0]?.parentNode,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="bg-[#0d0d0d] text-white w-full h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          My <span className="text-[#ff6600]">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="p-4 bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-[0_0_10px_#ff6600] transition flex flex-col items-center justify-center text-center min-h-[100px] px-4 md:px-8 "
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2 flex justify-center">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm md:text-base font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
