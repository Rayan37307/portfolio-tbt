import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const webProjects = [
  {
    title: "WishCare BD: High-Traffic E-commerce Solution",
    description: "Architected and optimized a high-performance e-commerce engine, handling concurrent transactions and large-scale data processing. Focused on system reliability, secure payment integration, and scalable backend architecture.",
    tech: ["System Architecture", "Scalability", "Payment Gateways"],
    live: "https://wishcarebd.com",
    badge: "Enterprise",
    image: "/images/wishcare.png"
  },
  {
    title: "TZS International: Resource Management System",
    description: "Developed an enterprise-grade platform for global logistics and recruitment management. Engineered complex data workflows and a robust administrative interface to streamline international operations.",
    tech: ["Enterprise Logic", "Data Workflows", "Global Infrastructure"],
    live: "https://tzsinternational.com",
    badge: "Enterprise",
    image: "/images/tzsinternational.png"
  },
  {
    title: "Apple iPhone 3D: High-Performance Graphics",
    description: "Engineered a cinematic 3D engine interface using WebGL for real-time interactive rendering. Implemented complex mathematical models for smooth physics-based animations and high-fidelity visual feedback.",
    tech: ["Three.js", "Computer Graphics", "Math Models"],
    live: "https://apple-iphone-web-3d.vercel.app",
    badge: "Graphics/3D",
    image: "/images/iphone.png"
  },
  {
    title: "BongoAbash: Real Estate Data Platform",
    description: "Built a sophisticated data-driven marketplace for the real estate sector, featuring advanced search algorithms and a highly responsive multi-platform interface for seamless property management.",
    tech: ["React", "Data Filtering", "Responsive Systems"],
    live: "https://bongoabash-luxury-real-estate-bangl.vercel.app/",
    badge: "Platform",
    image: "/images/bongo.png"
  },
  {
    title: "Yoom: Distributed Real-Time Communication",
    description: "Engineered a low-latency video conferencing system utilizing WebRTC and socket-based networking. Focused on efficient data transmission and real-time synchronization across distributed clients.",
    tech: ["WebRTC", "Socket.io", "Real-time Systems", "Distributed Logic"],
    live: "https://yoom-yolo.vercel.app/",
    badge: "Communication",
    image: "/images/yoom.png"
  }
];

const mobileProjects = [
  // Add mobile projects here
  {
    title: "Mobile App Project",
    description: "Description of your amazing mobile application built with modern technologies.",
    tech: ["React Native", "Firebase", "Expo"],
    live: "#",
    badge: "Mobile",
    image: "/images/PROGRAMMER.png"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Web');

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
  }, [activeTab]);

  const projectsToDisplay = activeTab === 'Web' ? webProjects : mobileProjects;

  return (
    <section id="projects" className="projects-section w-full py-20 bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading and Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <h2 className="text-4xl font-bold">🚀 Projects</h2>
          
          <div className="flex bg-[#1a1a1a] p-1 rounded-xl border border-gray-800">
            {['Web', 'Mobile'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="project-card bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              {/* Badge */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.badge && (
                    <span className="bg-blue-500 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-bold whitespace-nowrap">
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