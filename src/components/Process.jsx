import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep-dive into your business goals, target users, constraints, and success metrics before writing a single line of code.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Define the architecture, tech stack, data models, and project roadmap with clear milestones and deliverables.",
    icon: "🗺",
  },
  {
    num: "03",
    title: "Development",
    desc: "Build scalable, production-grade solutions with clean code, modular architecture, and regular progress updates.",
    icon: "⚙️",
  },
  {
    num: "04",
    title: "Testing",
    desc: "Ensure quality, performance, and reliability across all user scenarios — devices, edge cases, and load conditions.",
    icon: "✅",
  },
  {
    num: "05",
    title: "Launch",
    desc: "Deploy with CI/CD pipelines, monitor post-launch performance, and iterate based on real-world usage data.",
    icon: "🚀",
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      stepsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-[#080808] text-white w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#ff6600] text-sm font-semibold tracking-widest uppercase mb-3">How I Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Development <span className="text-[#ff6600]">Process</span>
          </h2>
          <p className="text-gray-400 font-outfit max-w-xl mx-auto text-lg">
            A structured approach that turns business goals into shipped software.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[2.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (stepsRef.current[i] = el)}
                className="relative flex flex-col items-center text-center md:items-center"
              >
                {/* Circle with number */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#1a1a1a] border-2 border-[#ff6600]/40 flex items-center justify-center mb-5 text-xl group-hover:border-[#ff6600] transition-colors shrink-0">
                  <span>{step.icon}</span>
                </div>

                <div className="text-xs font-mono text-[#ff6600]/60 mb-1 tracking-wider">{step.num}</div>
                <h3 className="text-base font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm font-outfit leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
