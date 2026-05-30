import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    icon: "🛒",
    title: "Ecommerce Brands",
    color: "#ff6600",
    borderColor: "border-[#ff6600]/20",
    glowColor: "hover:border-[#ff6600]/50 hover:shadow-[0_0_24px_rgba(255,102,0,0.1)]",
    items: [
      "Custom storefronts",
      "Admin dashboards",
      "Order automation",
      "Analytics systems",
    ],
  },
  {
    icon: "📚",
    title: "Course Creators",
    color: "#3b82f6",
    borderColor: "border-blue-500/20",
    glowColor: "hover:border-blue-500/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.1)]",
    items: [
      "LMS platforms",
      "Student dashboards",
      "Progress tracking",
      "Community systems",
    ],
  },
  {
    icon: "🚀",
    title: "Startups",
    color: "#10b981",
    borderColor: "border-emerald-500/20",
    glowColor: "hover:border-emerald-500/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.1)]",
    items: [
      "MVP development",
      "SaaS products",
      "Internal tools",
      "Automation workflows",
    ],
  },
];

const WhoIHelp = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="who-i-help" className="bg-[#0d0d0d] text-white w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#ff6600] text-sm font-semibold tracking-widest uppercase mb-3">Ideal Clients</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Who I <span className="text-[#ff6600]">Work With</span>
          </h2>
          <p className="text-gray-400 font-outfit max-w-xl mx-auto text-lg">
            I partner with businesses that need custom software to grow, automate, and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`bg-[#111] rounded-2xl p-8 border ${client.borderColor} ${client.glowColor} transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{client.icon}</div>
              <h3
                className="text-xl font-bold mb-5"
                style={{ color: client.color }}
              >
                {client.title}
              </h3>
              <ul className="space-y-3">
                {client.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400 text-sm font-outfit">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: client.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIHelp;
