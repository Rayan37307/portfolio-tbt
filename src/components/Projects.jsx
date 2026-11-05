import { useState } from "react";
import { IconArrowUpRight } from "./icons";

const webProjects = [
  {
    num: "01",
    featured: true,
    title: "LeadFly",
    subtitle: "AI lead automation platform",
    type: "FastAPI · React · Agentic AI",
    challenge: "Agencies spending hours manually finding and qualifying leads across scattered data sources.",
    solution: "Full-stack lead generation platform with agentic workflows that autonomously search, enrich and score prospects.",
    outcome: "Automated prospect discovery at scale, cutting manual research out of outreach.",
    tags: ["FastAPI", "React", "LangChain", "AI Agents"],
    live: null,
  },
  {
    num: "02",
    title: "OmniGuard",
    subtitle: "AI social media manager",
    type: "Next.js · FastAPI · Sentiment analysis",
    challenge: "Managing multiple platforms manually leads to delayed responses and an inconsistent brand voice.",
    solution: "AI-driven response engine monitoring several platforms at once with brand sentiment analysis.",
    outcome: "Real-time engagement with a consistent voice and far less response lag.",
    tags: ["Next.js", "FastAPI", "NLP", "Automation"],
    live: null,
  },
  {
    num: "03",
    title: "Lingo",
    subtitle: "Language learning platform",
    type: "Next.js 15 · TypeScript · Drizzle ORM",
    challenge: "Language apps rarely get progression systems and monetisation right at the same time.",
    solution: "Duolingo-style LMS with lesson flows, challenge progression, a hearts system and Stripe subscriptions.",
    outcome: "Production-ready subscription platform with gamified UX and an admin panel.",
    tags: ["Next.js 15", "TypeScript", "Neon", "Stripe"],
    live: null,
  },
  {
    num: "04",
    title: "Yoom",
    subtitle: "Real-time video conferencing",
    type: "Next.js · Stream SDK · WebRTC",
    challenge: "Teams need reliable, feature-rich conferencing without enterprise pricing.",
    solution: "HD conferencing with recording, live chat, screen sharing and personal room links.",
    outcome: "Deployed conferencing platform serving concurrent users.",
    tags: ["Next.js", "Stream SDK", "WebRTC"],
    live: "https://yoom-yolo.vercel.app/",
  },
  {
    num: "05",
    title: "Innovist BD",
    subtitle: "Multi-vendor marketplace",
    type: "React · Express.js · Cloud",
    challenge: "Marketplaces need automation for commissions, inventory and seller management.",
    solution: "Multi-vendor architecture with seller dashboards, admin controls and automated commissions.",
    outcome: "Live marketplace running multiple vendors with automated operations.",
    tags: ["React", "Express.js", "CI/CD"],
    live: "https://innovistbd.com/",
  },
  {
    num: "06",
    title: "WishCare BD",
    subtitle: "Full-stack ecommerce",
    type: "React · Express.js · Payments",
    challenge: "Local ecommerce needed high-performance APIs and integrated payment processing.",
    solution: "End-to-end commerce with a React frontend, Express backend and payment gateway integration.",
    outcome: "Optimised schema and API response times built for high traffic.",
    tags: ["React", "Express.js", "Payments"],
    live: null,
  },
  {
    num: "07",
    title: "TZS International",
    subtitle: "Travel platform",
    type: "WordPress · PHP · Custom APIs",
    challenge: "A travel agency with no online presence and manual booking handling.",
    solution: "Responsive travel site with a custom booking system and third-party availability APIs.",
    outcome: "Live platform taking reservations online and reducing manual workload.",
    tags: ["WordPress", "PHP", "REST API"],
    live: "https://tzsinternationalbd.com/",
  },
  {
    num: "08",
    title: "Khamar Nokhla School",
    subtitle: "Government primary school portal",
    type: "HTML · CSS · JavaScript",
    challenge: "A school needed a digital home for guardian communication and community outreach.",
    solution: "Static site with teacher profiles, student testimonials, facilities and an appointment form.",
    outcome: "Accessible portal improving guardian engagement and discoverability.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://khamar-nokhla.vercel.app/",
  },
];

const storeProjects = [
  {
    num: "01",
    featured: true,
    title: "Piku",
    subtitle: "Pet supplies storefront",
    type: "Next.js · TypeScript · COD checkout",
    image: "/images/piku.jpg",
    challenge: "A pet brand selling food, treats, toys and grooming supplies had no storefront — orders came through DMs.",
    solution: "Next.js storefront with a full catalogue, wishlist, cart drawer, account area and home-delivery checkout built around cash on delivery.",
    outcome: "Live store where customers browse by category, build a cart and order without messaging anyone.",
    tags: ["Next.js", "TypeScript", "Tailwind", "COD"],
    live: "https://pukkipets.vercel.app",
  },
  {
    num: "02",
    title: "BUNON",
    subtitle: "Fashion and lifestyle store",
    type: "Next.js · Stripe · Editorial content",
    image: "/images/bunon.jpg",
    challenge: "A contemporary clothing label needed more than a product grid — collections, craft story and store info in one place.",
    solution: "Multi-page Next.js store: product detail pages, men/women/kids collections, editorial blog, craft and stores pages, policy pages, Stripe checkout and COD.",
    outcome: "Complete brand commerce site live in production with two payment paths.",
    tags: ["Next.js", "Stripe", "Tailwind", "SEO"],
    live: "https://astheticbunon.vercel.app",
  },
  {
    num: "03",
    title: "Mrittika",
    subtitle: "Handcrafted pottery store",
    type: "Next.js · Headless commerce · COD",
    image: "/images/mrittika.jpg",
    challenge: "A pottery studio selling handmade ceramics needed a storefront as considered as the work itself.",
    solution: "Gallery-led Next.js storefront with product pages, quick view, compare, wishlist and a cart flow tuned for slow, browse-heavy buying.",
    outcome: "Live studio store selling one-off pieces from mugs to wall tiles.",
    tags: ["Next.js", "Tailwind", "Cart", "COD"],
    live: "https://mrittikacrafts.vercel.app",
  },
  {
    num: "04",
    title: "SkinLookBD",
    subtitle: "Skincare storefront + admin API",
    type: "Astro · Tailwind · PHP REST admin",
    image: "/images/skinlook.jpg",
    challenge: "An authentic-import skincare retailer needed a fast, Bangla-first storefront it could run itself.",
    solution: "Astro static storefront on a custom PHP REST admin API — brands, categories, product pages, cart, accounts, wishlist and a self-managed catalogue.",
    outcome: "Live store serving global K-beauty and derma brands across Bangladesh.",
    tags: ["Astro", "Tailwind", "PHP REST", "Bangla SEO"],
    live: "https://skinlookbd.com",
  },
  {
    num: "05",
    title: "Dot & Key BD",
    subtitle: "Shopify store build",
    type: "Shopify · Horizon theme · Liquid",
    image: "/images/dotandkey.png",
    challenge: "The Bangladesh distributor of Dot & Key needed a branded Shopify store that matched the parent brand and sold locally.",
    solution: "Shopify store on the Horizon theme with deep customisation — hero carousels, concern-based collections, custom sections, digital wallets and COD.",
    outcome: "Live branded store with a full skin-concern catalogue and a local checkout flow.",
    tags: ["Shopify", "Horizon", "Liquid", "CRO"],
    live: "https://dotandkeybd.com",
  },
  {
    num: "06",
    title: "WishCareBD",
    subtitle: "Science-forward selfcare store",
    type: "Shopify · Horizon theme · Liquid",
    image: "/images/wishcare.webp",
    challenge: "A dermatologist-recommended skincare and haircare brand selling across 15+ concern collections had to make one Shopify storefront carry both a science-led story and a shop-by-concern journey.",
    solution: "Shopify store on the Horizon theme with customised brand and section blocks — concern-based collections, bestseller and combo merchandising, a tinted-sunscreen and lip-care range, digital wallets and COD at checkout.",
    outcome: "Live store covering skin, hair, sun and body care with a 50+ product catalogue and local payment methods in place.",
    tags: ["Shopify", "Horizon", "Liquid", "Merchandising"],
    live: "https://wishcarebd.com",
  },
  {
    num: "07",
    title: "Innovist BD",
    subtitle: "Multi-brand beauty retail store",
    type: "Shopify · Dawn theme · Multi-brand catalogue",
    image: "/images/innovist.webp",
    challenge: "A beauty distributor running several D2C brands — Bare Anatomy, Chemist at Play and Sunscoop — needed one Bangladesh storefront that kept each brand's range shoppable without splitting into separate sites.",
    solution: "Shopify store on a customised Dawn theme: per-brand store and bestseller pages, 50+ concern-led collections across hair, skin and body, brand-specific combo merchandising, digital wallets and COD.",
    outcome: "Single live storefront carrying three brand ranges with brand-level landing pages and a shared checkout.",
    tags: ["Shopify", "Dawn", "Multi-brand", "Liquid"],
    live: "https://innovistbd.com",
  },
];

const mobileProjects = [
  {
    num: "01",
    featured: true,
    title: "Esycook",
    subtitle: "Recipe discovery app",
    type: "React Native · PostgreSQL · Expo",
    challenge: "Mobile users needed a rich recipe app with personalisation and multimedia learning.",
    solution: "Full-stack RN app with Clerk auth, YouTube tutorial integration, favourites and eight colour themes.",
    outcome: "Feature-complete recipe platform with search, filtering and a personalised feed.",
    tags: ["React Native", "PostgreSQL", "Expo"],
    live: "https://github.com/Rayan37307/esycook",
  },
  {
    num: "02",
    title: "BuyIt.",
    subtitle: "Mobile ecommerce ecosystem",
    type: "React Native · Node.js · Stripe",
    challenge: "Mobile shoppers need a seamless purchase flow with secure payments and social login.",
    solution: "RN commerce app with Stripe payments, Clerk social auth and a Node/Express admin dashboard.",
    outcome: "End-to-end mobile commerce with admin control and real-time inventory.",
    tags: ["React Native", "Clerk", "Expo", "Stripe"],
    live: "https://github.com/Rayan37307/expo-node-ecommerce",
  },
  {
    num: "03",
    title: "Whisper",
    subtitle: "Real-time chat platform",
    type: "React Native · WebSocket · Bun",
    challenge: "Teams need real-time mobile messaging with presence and typing indicators, without third-party lock-in.",
    solution: "Custom WebSocket server with real-time messaging, typing indicators and a Bun/MongoDB backend.",
    outcome: "Low-latency chat ecosystem on custom infrastructure.",
    tags: ["React Native", "WebSocket", "MongoDB"],
    live: "https://github.com/Rayan37307/trashchat",
  },
];

const tabs = [
  { id: "Stores", label: "Client stores", items: storeProjects },
  { id: "Web", label: "Products", items: webProjects },
  { id: "Mobile", label: "Mobile", items: mobileProjects },
];

const ProjectCard = ({ project }) => {
  const Wrapper = project.live ? "a" : "div";
  const wrapperProps = project.live
    ? { href: project.live, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--line-strong)] hover:bg-[var(--surface-2)] ${
        project.featured && project.image ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {project.image && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--line)] bg-[#060607]">
          <img
            src={project.image}
            alt={`${project.title} storefront`}
            className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="meta mono">{project.num}</span>
            <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
              {project.title}
              <span className="ml-2 text-[13px] font-normal text-[var(--dim)]">{project.subtitle}</span>
            </h3>
          </div>
          {project.live && (
            <IconArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-[var(--dim)] transition-colors group-hover:text-[var(--accent)]"
            />
          )}
        </div>

        <p className="mt-1 text-[12px] text-[var(--dim)]">{project.type}</p>

        <div className="mt-5 space-y-3.5 border-t border-[var(--line)] pt-5">
          {[
            ["Challenge", project.challenge],
            ["Solution", project.solution],
            ["Outcome", project.outcome],
          ].map(([label, text]) => (
            <div key={label}>
              <span className="meta">{label}</span>
              <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-[var(--line)] pt-4">
          {project.live ? (
            <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white">
              Visit live site
              <IconArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="text-[13px] text-[var(--dim)]">Private project</span>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Projects = () => {
  const [active, setActive] = useState("Stores");
  const current = tabs.find((t) => t.id === active);

  return (
    <section id="work" className="section">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="h-section mt-4 max-w-[26ch]">
              Live products, shipped for real businesses
            </h2>
          </div>

          <div className="flex flex-wrap gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  active === tab.id
                    ? "bg-[var(--accent)] text-[#060607]"
                    : "text-[var(--muted)] hover:text-white"
                }`}
              >
                {tab.label}
                <span className="ml-1.5 text-[11px] opacity-60">{tab.items.length}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((project) => (
            <ProjectCard key={`${active}-${project.num}`} project={project} />
          ))}
        </div>

        <p className="mt-8 text-[13px] text-[var(--dim)]">
          More builds on{" "}
          <a
            href="https://github.com/Rayan37307"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Projects;
