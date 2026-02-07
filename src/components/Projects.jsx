import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Imaginify: AI-Powered SaaS Platform (Monetized)",
    description: "Engineered a full-stack, AI-driven image manipulation SaaS with robust user authentication, credit-based monetization, and advanced generative AI integrations. Demonstrates expertise in scalable SaaS architecture and AI product development.",
    tech: ["Next.js", "Cloudinary AI", "Clerk Auth", "MongoDB"],
    live: "https://imaginify.vercel.app",
    badge: "AI Product",
    image: "/images/flash.png"
  },
  {
    title: "WishCare BD: High-Traffic E-commerce (Production-Ready)",
    description: "Developed and optimized WishCare Bangladesh's official e-commerce platform, handling significant traffic and secure transactions. Showcases proficiency in performance tuning, conversion-focused UI/UX, and scalable commercial architecture.",
    tech: ["High-performance E-commerce Architecture", "SEO", "Payment Gateways"],
    live: "https://wishcarebd.com",
    badge: "E-commerce",
    image: "/images/wishcare.png"
  },
  {
    title: "TZS International: Enterprise Recruitment Platform",
    description: "Built a comprehensive professional platform for a global manpower and travel agency, managing complex international recruitment and logistics. Highlights capability in enterprise UI, lead generation, and global data architecture.",
    tech: ["Enterprise UI", "Lead Generation", "Global Brand Identity"],
    live: "https://tzsinternational.com",
    badge: "Enterprise",
    image: "/images/tzsinternational.png"
  },
  {
    title: "Apple iPhone 3D: Advanced WebGL/3D Showcase",
    description: "Created a visually stunning, cinematic 3D interactive experience using WebGL and scroll-triggered animations. Demonstrates mastery of complex frontend math, advanced animations, and high-performance 3D rendering.",
    tech: ["Three.js", "GSAP", "React Three Fiber"],
    live: "https://apple-iphone-web-3d.vercel.app",
    badge: "WebGL/3D",
    image: "/images/iphone.png"
  },
  {
    title: "BongoAbash: Luxury Real Estate Marketplace",
    description: "Designed and developed a premium online marketplace for the luxury real estate sector in Bangladesh. Showcases expertise in crafting sophisticated, visually-driven interfaces for high-value industries.",
    tech: ["React", "Tailwind CSS", "Responsive Grid Systems"],
    live: "https://bongoabash-luxury-real-estate-bangl.vercel.app/",
    badge: "Real Estate",
    image: "/images/bongo.png"
  },
  {
    title: "Yoom: Video Conference & Meeting",
    description: "Developed a comprehensive video conferencing platform, offering a seamless meeting experience with robust features for communication and collaboration. Showcases real-time interaction capabilities and scalable architecture for modern communication needs.",
    tech: ["Next.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    live: "https://yoom-yolo.vercel.app/",
    badge: "Video Conferencing",
    image: "/images/yoom.png"
  }
];
const Projects = () => {
  useEffect(() => {
    gsap.set(".project-card", { opacity: 0, y: 50 });

    gsap.to(".project-card", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        end: "top 40%",
        scrub: 1.2,
      }
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <section id="projects" className="projects-section w-full py-20 bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10">🚀 Projects</h2>
        
        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
                        <div
                          key={index}
                          className="project-card bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-300 flex flex-col"
                        >
                          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                          {/* Badge */}
                          <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start">                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.badge && (
                    <span className="bg-blue-500 text-xs px-2 py-1 rounded-full font-bold">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-2 flex-1">{project.description}</p>

                {/* Tech stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-800 px-2 py-1 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-4">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full text-center border border-gray-500 hover:bg-green-500 hover:text-black text-green-400 text-sm font-medium py-2 rounded-lg transition-colors block"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
