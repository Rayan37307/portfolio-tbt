import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const webProjects = [
  {
    num: "01",
    featured: true,
    title: "LeadFly — AI Lead Automation Platform",
    type: "FastAPI · React · Agentic AI · Python",
    challenge: "Agencies spending hours manually finding and qualifying leads across scattered data sources.",
    solution: "Full-stack lead generation platform with agentic workflows that autonomously search, enrich, and score prospects.",
    outcome: "Automated prospect discovery at scale — dramatically reducing manual research time for outreach agencies.",
    tags: ["FastAPI", "React", "LangChain", "AI Agents", "Python"],
    live: null,
  },
  {
    num: "02",
    featured: false,
    title: "OmniGuard — AI Social Media Manager",
    type: "Next.js · FastAPI · Sentiment Analysis",
    challenge: "Managing multiple social media platforms manually leads to delayed responses and inconsistent brand voice.",
    solution: "AI-driven response engine monitoring multiple platforms simultaneously with brand sentiment analysis.",
    outcome: "Real-time automated engagement across platforms with consistent brand voice and reduced response lag.",
    tags: ["Next.js", "FastAPI", "NLP", "Automation"],
    live: null,
  },
  {
    num: "03",
    featured: false,
    title: "Lingo — Language Learning Platform",
    type: "Next.js 15 · TypeScript · Drizzle ORM",
    challenge: "Language learning apps lack engaging progression systems and sustainable monetization.",
    solution: "Full-stack Duolingo-style LMS with lesson flows, challenge progression, hearts system, and Stripe subscriptions.",
    outcome: "Production-ready subscription learning platform with gamified UX and admin panel.",
    tags: ["Next.js 15", "TypeScript", "Neon DB", "Stripe"],
    live: null,
  },
  {
    num: "04",
    featured: false,
    title: "Yoom — Realtime Video Conferencing",
    type: "Next.js · Stream SDK · WebRTC",
    challenge: "Teams need reliable, feature-rich video conferencing without enterprise-level costs.",
    solution: "HD real-time conferencing with meeting recording, live chat, screen sharing, and personal room links.",
    outcome: "Fully functional conferencing platform deployed on Vercel serving multiple concurrent users.",
    tags: ["Next.js", "Stream SDK", "WebRTC", "Real-time"],
    live: "https://yoom-yolo.vercel.app/",
  },
  {
    num: "05",
    featured: false,
    title: "Innovist BD — Multi-Vendor Marketplace",
    type: "React · Express.js · Cloud Deploy",
    challenge: "Multi-vendor marketplaces need complex automation for commissions, inventory, and seller management.",
    solution: "Multi-vendor architecture with seller dashboards, admin controls, and automated commission management.",
    outcome: "Live production marketplace handling multiple vendors with automated operations.",
    tags: ["React", "Express.js", "CI/CD", "Cloud"],
    live: "https://innovistbd.com/",
  },
  {
    num: "06",
    featured: false,
    title: "WishCare BD — Full-Stack eCommerce",
    type: "React · Express.js · Payment Gateway",
    challenge: "Bangladesh ecommerce needed high-performance APIs and integrated local payment processing.",
    solution: "End-to-end eCommerce with React frontend, Express.js backend, and integrated payment gateway.",
    outcome: "Optimized database schema and API response times built for high-traffic operations.",
    tags: ["React", "Express.js", "CI/CD", "Cloud"],
    live: null,
  },
  {
    num: "07",
    featured: false,
    title: "TZS International — Travel Platform",
    type: "WordPress · PHP · Custom APIs",
    challenge: "Travel agency lacked online presence and automated booking capability.",
    solution: "Responsive travel site with custom booking system and third-party availability API integrations.",
    outcome: "Live platform enabling online reservations and reducing manual booking workload.",
    tags: ["WordPress", "PHP", "Custom Plugins", "REST API"],
    live: "https://tzsinternationalbd.com/",
  },
  {
    num: "08",
    featured: false,
    title: "Khamar Nokhla Govt Primary School",
    type: "HTML · CSS · JavaScript",
    challenge: "School needed digital presence for guardian communication and community outreach.",
    solution: "Static site with teacher profiles, student testimonials, facility showcase, and guardian appointment form.",
    outcome: "Accessible school portal enabling guardian engagement and school discoverability.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://khamar-nokhla.vercel.app/",
  },
];

const mobileProjects = [
  {
    num: "01",
    featured: true,
    title: "Esycook — Recipe Discovery App",
    type: "React Native · PostgreSQL · Expo",
    challenge: "Mobile users needed a rich recipe app with personalization and multimedia learning.",
    solution: "Full-stack RN app with Clerk auth, YouTube tutorial integration, favorites, and 8 color themes.",
    outcome: "Feature-complete recipe platform with search, filtering, and personalized experience.",
    tags: ["React Native", "PostgreSQL", "Expo"],
    live: "https://github.com/Rayan37307/esycook",
  },
  {
    num: "02",
    featured: false,
    title: "BuyIt. — Mobile eCommerce Ecosystem",
    type: "React Native · Node.js · Stripe",
    challenge: "Mobile shoppers need a seamless purchase experience with secure payments and social login.",
    solution: "Complete RN e-commerce app with Stripe payments, Clerk social auth, and Node.js/Express admin dashboard.",
    outcome: "End-to-end mobile commerce solution with admin control and real-time inventory.",
    tags: ["React Native", "Clerk", "Expo", "Stripe"],
    live: "https://github.com/Rayan37307/expo-node-ecommerce",
  },
  {
    num: "03",
    featured: false,
    title: "Whisper — Real-time Chat Platform",
    type: "React Native · WebSocket · Bun",
    challenge: "Teams need real-time mobile messaging with typing indicators and presence without third-party lock-in.",
    solution: "Custom WebSocket server with real-time messaging, typing indicators, and Bun/MongoDB backend.",
    outcome: "Low-latency chat ecosystem with custom infrastructure, no third-party messaging dependency.",
    tags: ["React Native", "WebSocket", "MongoDB", "Expo"],
    live: "https://github.com/Rayan37307/trashchat",
  },
];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`project-card group relative flex flex-col rounded-2xl border transition-all duration-500 ${
        project.featured
          ? 'bg-gradient-to-br from-[#1a1a2e] to-[#141414] border-[#ff6600]/25 hover:border-[#ff6600]/50 hover:shadow-[0_0_30px_-5px_rgba(255,102,0,0.2)]'
          : 'bg-[#111] border-gray-800 hover:border-gray-600'
      }`}
    >
      {project.featured && (
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#ff6600] to-transparent opacity-50" />
      )}

      <div className="relative z-10 p-6 flex flex-col flex-1">
        {/* Number + badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-sm font-mono tracking-wider ${project.featured ? 'text-[#ff6600]' : 'text-gray-500'}`}>
            {project.num}{project.featured ? ' · Featured' : ''}
          </span>
          <div className="text-gray-500 group-hover:text-[#ff6600] transition-colors duration-300">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12L12 2M12 2H5M12 2v7" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold leading-snug mb-1.5 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Type */}
        <div className={`text-xs font-medium mb-4 ${project.featured ? 'text-[#ff6600]' : 'text-cyan-400'}`}>
          {project.type}
        </div>

        {/* Challenge → Solution → Outcome */}
        <div className="space-y-3 mb-4 flex-1">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Challenge</span>
            <p className="text-gray-400 text-sm font-outfit leading-relaxed mt-1">{project.challenge}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Solution</span>
            <p className="text-gray-400 text-sm font-outfit leading-relaxed mt-1">{project.solution}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-[#ff6600]/70 uppercase tracking-wider">Outcome</span>
            <p className="text-gray-300 text-sm font-outfit leading-relaxed mt-1">{project.outcome}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-800/60 text-gray-400 px-2.5 py-1 rounded-full border border-gray-700/40"
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
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#ff6600] transition-colors group/link"
            >
              Live Demo
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                <path d="M2 12L12 2M12 2H5M12 2v7" />
              </svg>
            </a>
          ) : (
            <span className="text-sm text-gray-700">Private Project</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Web');

  useEffect(() => {
    gsap.set(".project-card", { opacity: 0, y: 50 });
    gsap.to(".project-card", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, [activeTab]);

  const projectsToDisplay = activeTab === 'Web' ? webProjects : mobileProjects;

  return (
    <section id="projects" className="projects-section w-full py-24 bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[#ff6600] text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Case <span className="text-[#ff6600]">Studies</span>
            </h2>
            <p className="text-gray-400 font-outfit mt-3 max-w-md">
              Real problems solved with custom software solutions.
            </p>
          </div>

          <div className="flex bg-[#1a1a1a] p-1 rounded-xl border border-gray-800 self-start md:self-auto">
            {['Web', 'Mobile'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#ff6600] text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToDisplay.map((project, index) => (
            <ProjectCard key={`${activeTab}-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
