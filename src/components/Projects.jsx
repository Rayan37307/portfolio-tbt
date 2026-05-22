import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const webProjects = [
  {
    num: "01",
    badge: "Featured",
    title: "LeadFly — AI Lead Automation Platform",
    type: "FastAPI · React · Agentic AI · Python",
    description: "Full-stack lead generation platform automating prospect discovery and qualification across data sources. Agentic workflows that autonomously search, enrich, and score leads — enabling agencies to scale outreach without manual effort.",
    tags: ["FastAPI", "React", "LangChain", "AI Agents", "Python"],
    live: null
  },
  {
    num: "02",
    badge: null,
    title: "OmniGuard — AI Social Media Manager",
    type: "Next.js · FastAPI · Sentiment Analysis",
    description: "Simultaneous monitoring of multiple social media platforms. AI-driven response engine with brand monitoring, sentiment analysis, and automated engagement features.",
    tags: ["Next.js", "FastAPI", "NLP", "Automation"],
    live: null
  },
  {
    num: "03",
    badge: null,
    title: "Lingo — Language Learning Platform",
    type: "Next.js 15 · TypeScript · Drizzle ORM",
    description: "Full-stack Duolingo clone with lesson flows, challenge progression, hearts system, Stripe subscriptions, Clerk auth, and role-based admin panel.",
    tags: ["Next.js 15", "TypeScript", "Neon DB", "Stripe"],
    live: null
  },
  {
    num: "04",
    badge: null,
    title: "Yoom — Realtime Video Conferencing",
    type: "Next.js · Stream SDK · WebRTC",
    description: "HD real-time calls for multiple participants. Meeting recording, live chat, screen sharing, and secure invite-based access control with personal room links.",
    tags: ["Next.js", "Stream SDK", "WebRTC", "Real-time"],
    live: "https://yoom-yolo.vercel.app/"
  },
  {
    num: "05",
    badge: null,
    title: "Innovist BD — Multi-Vendor Marketplace",
    type: "React · Express.js · Cloud Deploy",
    description: "Multi-vendor architecture with seller dashboards, admin controls, automated commission management, dynamic product discovery, and real-time inventory.",
    tags: ["React", "Express.js", "CI/CD", "Cloud"],
    live: "https://innovistbd.com/"
  },
  {
    num: "06",
    badge: null,
    title: "WishCare BD — Full-Stack eCommerce Platform",
    type: "React · Express.js · Payment Gateway",
    description: "End-to-end eCommerce solution with React frontend, Express.js backend, and integrated payment gateway. Optimised database schema and API response times for high-traffic operations.",
    tags: ["React", "Express.js", "CI/CD", "Cloud"],
    live: null
  },
  {
    num: "07",
    badge: null,
    title: "TZS International — Travel Platform",
    type: "WordPress · PHP · Custom APIs",
    description: "Responsive travel agency website with custom booking system, third-party API integrations for availability and reservations, and modern UI/UX.",
    tags: ["WordPress", "PHP", "Custom Plugins", "REST API"],
    live: "https://tzsinternationalbd.com/"
  },
  {
    num: "08",
    badge: null,
    title: "Khamar Nokhla Govt Primary School",
    type: "HTML · CSS · JavaScript",
    description: "Static school website with home, about, and contact pages. Features appointment form for guardians, teacher profiles, student testimonials, and facility showcases.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://khamar-nokhla.vercel.app/"
  }
];

const mobileProjects = [
  {
    num: "01",
    badge: "Mobile",
    title: "Esycook — Recipe Discovery App",
    type: "React Native · PostgreSQL · Expo",
    description: "Full-stack React Native and PostgreSQL app featuring Clerk authentication with 6-digit verification and integrated YouTube tutorials. Users can search recipes, filter by category, save favorites, and toggle between eight color themes.",
    tags: ["React Native", "PostgreSQL", "Expo"],
    live: "https://github.com/Rayan37307/esycook"
  },
  {
    num: "02",
    badge: "Mobile",
    title: "BuyIt. — Mobile eCommerce Ecosystem",
    type: "React Native · Node.js · Stripe",
    description: "Comprehensive React Native e-commerce ecosystem with Stripe payments, Clerk social auth, TanStack Query data fetching, and a Node.js/Express admin dashboard.",
    tags: ["React Native", "Clerk", "Expo", "Stripe"],
    live: "https://github.com/Rayan37307/expo-node-ecommerce"
  },
  {
    num: "03",
    badge: "Mobile",
    title: "Whisper — Real-time Chat Platform",
    type: "React Native · WebSocket · Bun",
    description: "Full-stack chat ecosystem with custom WebSocket server for real-time messaging, typing indicators, and presence. Powered by a Bun, Express, and MongoDB backend with Clerk auth.",
    tags: ["React Native", "WebSocket", "MongoDB", "Expo"],
    live: "https://github.com/Rayan37307/trashchat"
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
      stagger: 0.15,
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
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-14 gap-6">
          <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          
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
        
        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToDisplay.map((project, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`project-card group relative flex flex-col rounded-2xl border transition-all duration-500 ${
                project.badge === 'Featured'
                  ? 'bg-gradient-to-br from-[#1a1a2e] to-[#1a1a1a] border-blue-500/30 hover:border-blue-400/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]'
                  : 'bg-[#1a1a1a] border-gray-800 hover:border-gray-600'
              }`}
            >
              {/* Top accent bar for featured card */}
              {project.badge === 'Featured' && (
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
              )}

              {/* Featured glow */}
              {project.badge === 'Featured' && (
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
              
              <div className="relative z-10 p-6 flex flex-col flex-1">
                {/* Number + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-mono tracking-wider ${
                    project.badge === 'Featured' ? 'text-blue-400' : 'text-gray-500'
                  }`}>
                    {project.num}{project.badge === 'Featured' ? ' · Featured' : ''}
                  </span>
                  <div className="pc-arr text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 12L12 2M12 2H5M12 2v7"></path>
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-snug mb-1.5 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Type */}
                <div className={`text-xs font-medium mb-3 ${
                  project.badge === 'Featured' ? 'text-blue-300' : 'text-cyan-400'
                }`}>
                  {project.type}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-gray-800/70 text-gray-300 px-2.5 py-1 rounded-full border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-auto">
                  {project.live ? (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors group/link"
                    >
                      Live Demo
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                        <path d="M2 12L12 2M12 2H5M12 2v7"></path>
                      </svg>
                    </a>
                  ) : (
                    <span className="text-sm text-gray-600">Private Project</span>
                  )}
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
