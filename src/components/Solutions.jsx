import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    icon: "🛒",
    title: "Ecommerce Platforms",
    desc: "Custom storefronts, payment systems, inventory management, and multi-vendor marketplaces.",
  },
  {
    icon: "📚",
    title: "Learning Management Systems",
    desc: "Course delivery, lesson flows, progress tracking, subscription billing, and student portals.",
  },
  {
    icon: "⚡",
    title: "SaaS Applications",
    desc: "Subscription platforms, role-based access, API integrations, and scalable cloud architecture.",
  },
  {
    icon: "🤖",
    title: "AI Automations",
    desc: "Agentic workflows, data pipelines, lead generation automation, and intelligent processing systems.",
  },
  {
    icon: "📊",
    title: "Admin Dashboards",
    desc: "Analytics interfaces, reporting tools, management panels, and real-time data visualization.",
  },
  {
    icon: "🔧",
    title: "Internal Business Tools",
    desc: "Workflow automation, team productivity systems, internal APIs, and process digitization.",
  },
  {
    icon: "👥",
    title: "CRM Systems",
    desc: "Lead management, customer tracking, sales pipelines, and automated follow-up workflows.",
  },
  {
    icon: "🏠",
    title: "Client Portals",
    desc: "Onboarding flows, project tracking, file sharing, invoicing, and client communication hubs.",
  },
];

const Solutions = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="bg-[#080808] text-white w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#ff6600] text-sm font-semibold tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Solutions I <span className="text-[#ff6600]">Build</span>
          </h2>
          <p className="text-gray-400 font-outfit max-w-xl mx-auto text-lg">
            End-to-end custom software tailored to your business model and growth goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((sol, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-[#ff6600]/40 hover:shadow-[0_0_20px_rgba(255,102,0,0.07)] transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{sol.icon}</div>
              <h3 className="text-base font-bold mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                {sol.title}
              </h3>
              <p className="text-gray-500 text-sm font-outfit leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
