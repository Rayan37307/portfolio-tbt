import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const building = [
  { icon: "🤖", title: "AI Automation Systems", desc: "Agentic pipelines for lead generation and business workflow automation." },
  { icon: "🛒", title: "Ecommerce Solutions", desc: "Custom storefront + admin dashboard for a growing BD ecommerce brand." },
  { icon: "📚", title: "LMS Platforms", desc: "Full-featured learning management system with subscription billing." },
  { icon: "⚡", title: "SaaS Applications", desc: "Multi-tenant SaaS product with role-based access and API integrations." },
];

const CurrentlyBuilding = () => {
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
    <section ref={sectionRef} id="building" className="bg-[#080808] text-white w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Currently Active
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Currently <span className="text-[#ff6600]">Building</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {building.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-base font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-outfit leading-relaxed">{item.desc}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 text-xs font-medium">In Progress</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
