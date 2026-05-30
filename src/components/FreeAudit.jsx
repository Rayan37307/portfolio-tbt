import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const auditPoints = [
  { icon: "📉", label: "Conversion leaks", desc: "Identify where visitors drop off or don't take action." },
  { icon: "⚙️", label: "Automation opportunities", desc: "Find manual work that can be systemized and scaled." },
  { icon: "🚀", label: "Performance issues", desc: "Spot bottlenecks in speed, UX, and technical architecture." },
];

const FreeAudit = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="audit" className="bg-[#0d0d0d] text-white w-full py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={contentRef}>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#ff6600]/20 rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#ff6600]/10 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff6600]/30 bg-[#ff6600]/10 text-[#ff6600] text-sm font-medium mb-6">
              Free Offer
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Need a Website, LMS or{" "}
              <span className="text-[#ff6600]">Automation System?</span>
            </h2>

            <p className="text-gray-400 font-outfit text-lg mb-10 max-w-xl mx-auto">
              I offer a free audit where I'll identify exactly what's holding your business back.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-10 text-left">
              {auditPoints.map((point, i) => (
                <div key={i} className="bg-[#0d0d0d]/60 border border-gray-800 rounded-xl p-5">
                  <div className="text-2xl mb-3">{point.icon}</div>
                  <div className="text-sm font-bold text-white mb-1">{point.label}</div>
                  <div className="text-gray-500 text-xs font-outfit leading-relaxed">{point.desc}</div>
                </div>
              ))}
            </div>

            <a
              href="mailto:tasindevx@gmail.com?subject=Free Audit Request&body=Hi Tasin, I'd like to request a free audit for my business."
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#ff6600] hover:bg-[#e55a00] text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(255,102,0,0.4)] text-base"
            >
              Request Free Audit →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAudit;
