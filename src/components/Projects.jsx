import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "TZS International",
    description: "Travel agency website with focus on international tours and travel packages. Features destination showcases, booking system, and tour management.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://dreamersclick.com/",
    github: "https://github.com/tasinck/tzs-international",
    badge: "Travel"
  },
  {
    title: "My Portfolio",
    description: "Personal portfolio website showcasing my work, skills, and projects. Features responsive design and modern UI/UX.",
    tech: ["React", "Tailwind CSS", "GSAP"],
    live: "https://tasin-beta.vercel.app/",
    github: "https://github.com/tasinck/portfolio",
    badge: "Portfolio"
  },
  {
    title: "Animated Portfolio",
    description: "Hackathon-winning portfolio with advanced animations and interactive elements. Built for a coding competition.",
    tech: ["React", "Framer Motion", "CSS"],
    live: "https://tasinx10.vercel.app/",
    github: "https://github.com/tasinck/animated-portfolio",
    badge: "Hackathon"
  },
  {
    title: "Solo Lingo",
    description: "Language learning platform with interactive lessons, progress tracking, and gamification elements.",
    tech: ["React", "Firebase", "JavaScript"],
    live: "https://solo-lingo.vercel.app/",
    github: "https://github.com/tasinck/solo-lingo",
    badge: "Education"
  },
  {
    title: "Phone Portfolio",
    description: "Creative portfolio designed to look like a virtual smartphone with app-style navigation.",
    tech: ["React", "CSS", "JavaScript"],
    live: "https://phone-portfolio.vercel.app/",
    github: "https://github.com/tasinck/phone-portfolio",
    badge: "Creative"
  },
  {
    title: "3D Portfolio",
    description: "Advanced 3D portfolio featuring interactive 3D models, animations, and immersive user experience.",
    tech: ["React", "Three.js", "Tailwind CSS"],
    live: "https://3d-portfolio-coral.vercel.app/",
    github: "https://github.com/tasinck/3d-portfolio",
    badge: "3D"
  },
  {
    title: "Anime Land",
    description: "Anime discovery platform with infinite scrolling, search functionality, and detailed anime information.",
    tech: ["React", "API Integration", "CSS"],
    live: "https://anime-land-three.vercel.app/",
    github: "https://github.com/tasinck/anime-land",
    badge: "Entertainment"
  },
  {
    title: "Teacher Portfolio",
    description: "Simple and elegant portfolio website for an educator, showcasing teaching experience and qualifications.",
    tech: ["React", "CSS", "JavaScript"],
    live: "https://shirin-akther1.vercel.app/",
    github: "https://github.com/tasinck/teacher-portfolio",
    badge: "Education"
  },
  {
    title: "Khamar Nokhla",
    description: "School website for Khamar Nokhla educational institution with student resources and management features.",
    tech: ["React", "Node.js", "Express"],
    live: "https://khamar-nokhla.vercel.app/",
    github: "https://github.com/tasinck/khamar-nokhla",
    badge: "Education"
  },
  {
    title: "Music School",
    description: "Music school website with course listings, instructor profiles, and online booking system.",
    tech: ["React", "UI Design", "CSS"],
    live: "https://music-school-ochre-kappa.vercel.app/",
    github: "https://github.com/tasinck/music-school",
    badge: "Education"
  },
  {
    title: "NTB Agency",
    description: "Web development agency website featuring services, client projects, and team information.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://ntb-project.vercel.app/",
    github: "https://github.com/tasinck/ntb-project",
    badge: "Agency"
  },
  {
    title: "Mini Store",
    description: "Simple e-commerce platform with product listings, shopping cart, and payment integration.",
    tech: ["React", "Stripe", "JavaScript"],
    live: "https://mini-store-delta.vercel.app/",
    github: "https://github.com/tasinck/mini-store",
    badge: "E-commerce"
  },
  {
    title: "Netflix Clone",
    description: "Frontend clone of Netflix UI with movie browsing, search functionality, and responsive design.",
    tech: ["React", "UI Clone", "CSS"],
    live: "https://netflix-clone-gamma-lemon-66.vercel.app/",
    github: "https://github.com/tasinck/netflix-clone",
    badge: "UI"
  },
  {
    title: "Figma Clone",
    description: "Graphics design software interface with drawing tools, layer management, and design collaboration.",
    tech: ["React", "Canvas API", "CSS"],
    live: "https://figma-clone-two-blush.vercel.app/",
    github: "https://github.com/tasinck/figma-clone",
    badge: "Design"
  },
  {
    title: "TJ Metal",
    description: "Metal company website with product catalog, industrial design, and business information.",
    tech: ["React", "Business", "CSS"],
    live: "https://metal-master.vercel.app/",
    github: "https://github.com/tasinck/metal-master",
    badge: "Business"
  },
  {
    title: "Justmatcha Store",
    description: "E-commerce website for matcha products with shopping cart, checkout flow, and inventory management.",
    tech: ["React", "E-commerce", "Payment"],
    live: "https://justmatcha.store/",
    github: "https://github.com/tasinck/justmatcha",
    badge: "E-commerce"
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
              {/* Badge */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
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
                <div className="mt-4 flex gap-3">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-gray-500 hover:bg-green-500 hover:text-black text-green-400 text-sm font-medium py-2 rounded-lg transition-colors"
                  >
                    Live Preview
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                  >
                    GitHub
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
