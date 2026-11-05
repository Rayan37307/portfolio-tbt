export const storeProjects = [
  {
    num: "01",
    title: "Piku",
    tagline: "Pet supplies storefront with COD checkout",
    type: "Next.js · TypeScript · COD checkout",
    image: "/images/piku.jpg",
    overview:
      "A Bangladesh pet supplies store selling food, treats, toys and grooming for dogs and cats — built as a Next.js storefront with a cash-on-delivery checkout.",
    challenge:
      "The brand had no online store: orders came through DMs and social media, so there was no catalogue to browse, no cart, and no record of an order beyond a chat thread.",
    solution:
      "A Next.js App Router storefront with a product catalogue across cat food, dog food, treats, toys, litter, beds and shampoo. Every product gets its own page, with a searchable shop, wishlist, cart drawer and account area. Checkout is built around home delivery with cash on delivery, since that is how the market pays.",
    result:
      "Ten products are live and shoppable end to end — browse, wishlist, add to cart, check out — with no messaging needed to place an order.",
    stack: ["Next.js", "TypeScript", "Tailwind", "App Router"],
    live: "https://pukkipets.vercel.app",
  },
  {
    num: "02",
    title: "BUNON",
    tagline: "Fashion and lifestyle store with editorial pages",
    type: "Next.js · Stripe · Editorial content",
    image: "/images/bunon.jpg",
    overview:
      "A contemporary clothing and lifestyle label — jackets, knitwear, denim, sneakers, watches and bags for men, women and kids — built as a full brand commerce site rather than a product grid.",
    challenge:
      "The label needed a store that could carry a brand, not just a catalogue: collection story, craft, physical stores and policies all had to live alongside shoppable product pages.",
    solution:
      "A multi-page Next.js storefront: a shop with individual product pages (leather jacket, canvas jacket, cardigan, overcoat, trousers, jeans, rain jacket, sneakers, monk shoes, top-handle bag, chronograph and a watch), collections for men, women and kids, plus about, craft, stores, blog, contact and the shipping/refund/privacy/terms pages a real store needs. Checkout supports both card payment via Stripe and cash on delivery.",
    result:
      "Twelve products live with two payment paths, an editorial layer (blog and craft pages) and store locations published — a complete brand site, not just a shop.",
    stack: ["Next.js", "Stripe", "Tailwind", "SEO"],
    live: "https://astheticbunon.vercel.app",
  },
  {
    num: "03",
    title: "Mrittika",
    tagline: "Handcrafted pottery store built for browsing",
    type: "Next.js · Headless commerce · COD",
    image: "/images/mrittika.jpg",
    overview:
      "A studio store for hand-thrown, hand-glazed ceramics — mugs, bowls, plates, candle holders and wall tiles — where every piece is made by hand rather than mass produced.",
    challenge:
      "Handmade ceramics sell on how a piece looks and feels, so a plain product grid undersells them; and one-off stock means shoppers compare, save and come back before buying.",
    solution:
      "A gallery-led Next.js storefront: a home page that leads with the work itself, product pages for each piece, quick view so shoppers can inspect without leaving the grid, a compare feature, wishlist, and a cart and checkout flow built around cash on delivery for slow, browse-heavy buying.",
    result:
      "Eight handmade pieces live and purchasable — from a white glazed mug to a chad pot and a set of three wall tiles — with quick view, compare, wishlist and cart all working together.",
    stack: ["Next.js", "Tailwind", "Cart", "COD"],
    live: "https://mrittikacrafts.vercel.app",
  },
  {
    num: "04",
    title: "SkinLookBD",
    tagline: "Bangla-first skincare store on a self-managed admin API",
    type: "Astro · Tailwind · PHP REST admin",
    image: "/images/skinlook.jpg",
    overview:
      "An authentic-import skincare and haircare retailer selling global K-beauty and derma brands — CeraVe, COSRX, The Ordinary, Cetaphil, Aveeno, Neutrogena, L'Oréal and OGX — to customers across Bangladesh.",
    challenge:
      "The store needed to be fast on Bangladeshi mobile connections, Bangla-first for local search, and run by the client's own team without paying platform fees on a subscription store.",
    solution:
      "An Astro static storefront served from the edge, talking to a custom PHP REST admin API at admapi.skinlookbd.com that the client controls — catalogue, brands, categories and banners all managed there. The shop filters by brand and by a deep category tree (skin, hair, bath & body and their sub-categories), with product pages, search, cart, customer accounts, a wishlist and order tracking.",
    result:
      "Eight brands and roughly seventy-five category routes live, with customer accounts, wishlist, order tracking, a data-deletion page and policy pages — a complete store the client operates itself.",
    stack: ["Astro", "Tailwind", "PHP REST API", "Bangla SEO"],
    live: "https://skinlookbd.com",
  },
  {
    num: "05",
    title: "Dot & Key BD",
    tagline: "Shopify store for the Dot & Key distributor",
    type: "Shopify · Horizon theme · Liquid",
    image: "/images/dotandkey.png",
    overview:
      "The Bangladesh storefront for Dot & Key, built on Shopify for the local distributor so the brand's skincare range sells in BDT with local payment methods.",
    challenge:
      "The store had to look like the parent brand while behaving like a Bangladeshi shop — local currency, local wallets, cash on delivery and a catalogue organised the way customers actually shop.",
    solution:
      "A Shopify store on the Horizon theme with deep Liquid customisation: hero carousel sections, concern-based collections (acne, ageing, dark spots, dullness, dryness, excess oil, damaged skin barrier, eye care, hair care and more), face wash, serum, toner and mask ranges, plus digital wallet and COD options at checkout.",
    result:
      "Thirty-five collections live in a single brand storefront, with a local checkout flow covering digital wallets and cash on delivery.",
    stack: ["Shopify", "Horizon", "Liquid", "CRO"],
    live: "https://dotandkeybd.com",
  },
  {
    num: "06",
    title: "WishCareBD",
    tagline: "Science-led selfcare store across skin, hair, sun and body",
    type: "Shopify · Horizon theme · Liquid",
    image: "/images/wishcare.webp",
    overview:
      "A dermatologist-recommended skincare and haircare brand positioning itself on biomimetic science, selling across skin, hair, sun and body care in Bangladesh.",
    challenge:
      "One Shopify storefront had to carry two stories at once: the science-led brand positioning, and a shop-by-concern journey for customers who arrive with a problem rather than a product in mind.",
    solution:
      "A Shopify store on the Horizon theme with customised sections and brand blocks: concern-based collections (acne, pigmentation, dullness, dandruff, hairfall), dedicated skin care, hair care and sun care ranges, a tinted sunscreen and lip balm line, bestseller and bestselling-combo merchandising, plus digital wallets and COD at checkout.",
    result:
      "Fifteen collections and a fifty-product catalogue live, covering skin, hair, sun and body care, with local payment methods in place.",
    stack: ["Shopify", "Horizon", "Liquid", "Merchandising"],
    live: "https://wishcarebd.com",
  },
  {
    num: "07",
    title: "Innovist BD",
    tagline: "One storefront carrying three D2C beauty brands",
    type: "Shopify · Dawn theme · Multi-brand catalogue",
    image: "/images/innovist.webp",
    overview:
      "A Bangladesh beauty retailer carrying the Innovist brands — Bare Anatomy (hair), Chemist at Play (skincare) and Sunscoop (sunscreen) — in a single storefront.",
    challenge:
      "Three brands with different ranges and customers had to share one store without blurring into each other, and without the cost and fragmentation of three separate sites.",
    solution:
      "A Shopify store on a customised Dawn theme with a brand layer on top of the catalogue: dedicated store pages for Bare Anatomy, Chemist at Play and Sunscoop, per-brand bestseller, combo and new-launch collections, and fifty-plus concern-led collections across hair, skin and body. Checkout covers digital wallets and cash on delivery.",
    result:
      "One live storefront with three brand landing pages, over fifty collections and a shared checkout — each brand still shops as itself.",
    stack: ["Shopify", "Dawn", "Multi-brand", "Liquid"],
    live: "https://innovistbd.com",
  },
];

export const webProjects = [
  {
    num: "01",
    title: "LeadFly",
    tagline: "AI lead automation platform",
    type: "FastAPI · React · Agentic AI",
    overview:
      "A full-stack lead generation platform for agencies, where agentic workflows do the prospecting work instead of a researcher with a spreadsheet.",
    challenge:
      "Agencies were spending hours finding and qualifying leads across scattered data sources before outreach could even start.",
    solution:
      "Agentic workflows that search, enrich and score prospects autonomously, behind a React interface with a FastAPI backend.",
    result:
      "Prospect discovery runs at scale without the manual research step — the workflow produces a scored list rather than a raw scrape.",
    stack: ["FastAPI", "React", "LangChain", "AI Agents"],
    live: null,
  },
  {
    num: "02",
    title: "OmniGuard",
    tagline: "AI social media manager",
    type: "Next.js · FastAPI · Sentiment analysis",
    overview:
      "An AI-driven response engine that watches several social platforms at once and answers in a consistent brand voice.",
    challenge:
      "Managing multiple platforms by hand causes delayed replies and a brand voice that drifts between channels.",
    solution:
      "A monitoring and response engine with sentiment analysis on top of a FastAPI service and a Next.js dashboard.",
    result:
      "Responses happen in real time across platforms with one voice, and the lag that came from switching tools is gone.",
    stack: ["Next.js", "FastAPI", "NLP", "Automation"],
    live: null,
  },
  {
    num: "03",
    title: "Lingo",
    tagline: "Language learning platform with subscriptions",
    type: "Next.js 15 · TypeScript · Drizzle ORM",
    overview:
      "A Duolingo-style learning product: lesson flows, challenge progression, a hearts system and paid subscriptions.",
    challenge:
      "Language apps usually get progression or monetisation right — rarely both, and rarely with an admin side the owner can run.",
    solution:
      "A Next.js 15 app with TypeScript and Drizzle ORM: lesson and challenge progression, a hearts system, Stripe subscriptions and an admin panel.",
    result:
      "A production-ready subscription platform with gamified UX and admin control over content and plans.",
    stack: ["Next.js 15", "TypeScript", "Neon", "Stripe"],
    live: null,
  },
  {
    num: "04",
    title: "Yoom",
    tagline: "Real-time video conferencing",
    type: "Next.js · Stream SDK · WebRTC",
    overview:
      "HD conferencing with recording, live chat, screen sharing and personal room links, without enterprise pricing.",
    challenge:
      "Teams need reliable, feature-rich video calls that do not cost enterprise money or require building WebRTC infrastructure from scratch.",
    solution:
      "A Next.js app on the Stream SDK: room creation, recording, in-call chat, screen share and personal meeting links.",
    result:
      "A deployed conferencing platform serving concurrent users with the full meeting feature set.",
    stack: ["Next.js", "Stream SDK", "WebRTC"],
    live: "https://yoom-yolo.vercel.app/",
  },
  {
    num: "05",
    title: "Innovist BD",
    tagline: "Multi-vendor marketplace",
    type: "React · Express.js · Cloud",
    overview:
      "A production marketplace where several vendors sell through one storefront, with the commission and seller admin that makes that possible.",
    challenge:
      "Marketplaces live or die on operations: commissions, inventory and seller management all need automating from day one.",
    solution:
      "A multi-vendor architecture with seller dashboards, admin controls and automated commission handling, deployed with CI/CD.",
    result:
      "A live marketplace running multiple vendors with its operations automated rather than run by hand.",
    stack: ["React", "Express.js", "CI/CD"],
    live: "https://innovistbd.com/",
  },
  {
    num: "06",
    title: "WishCare BD",
    tagline: "Full-stack ecommerce",
    type: "React · Express.js · Payments",
    overview:
      "A full-stack commerce build with a React storefront, an Express API and local payment processing.",
    challenge:
      "The store needed APIs fast enough for high-traffic periods and a payment gateway that fits how customers in Bangladesh actually pay.",
    solution:
      "React frontend with an Express.js backend, integrated payment gateway, and an optimised database schema and API layer.",
    result:
      "API response times and schema tuned for high-traffic operations, with payments working end to end.",
    stack: ["React", "Express.js", "Payments"],
    live: "https://wishcarebd.com/",
  },
  {
    num: "07",
    title: "TZS International",
    tagline: "Travel agency platform with online booking",
    type: "WordPress · PHP · Custom APIs",
    overview:
      "A travel agency site with a custom booking system and third-party availability integrations.",
    challenge:
      "The agency had no online presence and handled every booking manually.",
    solution:
      "A responsive WordPress build with a custom booking flow and REST integrations for third-party availability data.",
    result:
      "Reservations are taken online, and the manual booking workload drops with them.",
    stack: ["WordPress", "PHP", "REST API"],
    live: "https://tzsinternationalbd.com/",
  },
  {
    num: "08",
    title: "Khamar Nokhla School",
    tagline: "Government primary school portal",
    type: "HTML · CSS · JavaScript",
    overview:
      "A static site for a government primary school: teacher profiles, student testimonials, facilities and a guardian appointment form.",
    challenge:
      "The school needed a digital presence for guardian communication and community outreach, on a budget of essentially nothing.",
    solution:
      "A fast static site in plain HTML, CSS and JavaScript, deployed on Vercel with no build step or hosting cost.",
    result:
      "An accessible portal that gives the school a public face and a way for guardians to book an appointment.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://khamar-nokhla.vercel.app/",
  },
];

export const mobileProjects = [
  {
    num: "01",
    title: "Esycook",
    tagline: "Recipe discovery app with multimedia lessons",
    type: "React Native · PostgreSQL · Expo",
    overview:
      "A React Native recipe app with search, filtering, favourites and YouTube tutorials built into each recipe.",
    challenge:
      "Mobile cooks want a rich, personalised recipe experience — not a list — and most apps stop at a static catalogue.",
    solution:
      "A full-stack React Native app with Clerk auth, YouTube tutorial integration, favourites, search and filtering, and eight colour themes.",
    result:
      "A feature-complete recipe platform with a personalised feed and multimedia learning built in.",
    stack: ["React Native", "PostgreSQL", "Expo"],
    live: null,
    github: "https://github.com/Rayan37307/esycook",
  },
  {
    num: "02",
    title: "BuyIt.",
    tagline: "Mobile commerce with an admin dashboard",
    type: "React Native · Node.js · Stripe",
    overview:
      "A React Native shopping app with Stripe payments, social login and a Node/Express admin side.",
    challenge:
      "Mobile shoppers need a short purchase flow with trusted payments, while the store owner needs inventory control behind it.",
    solution:
      "RN app with Clerk social auth and Stripe payments, backed by an Express admin dashboard with real-time inventory.",
    result:
      "An end-to-end mobile commerce system — customer app plus admin control.",
    stack: ["React Native", "Clerk", "Expo", "Stripe"],
    live: null,
    github: "https://github.com/Rayan37307/expo-node-ecommerce",
  },
  {
    num: "03",
    title: "Whisper",
    tagline: "Real-time chat on custom infrastructure",
    type: "React Native · WebSocket · Bun",
    overview:
      "A mobile chat app on its own WebSocket server, with typing indicators and presence — no third-party messaging dependency.",
    challenge:
      "Teams want real-time mobile messaging without handing their data to a hosted chat vendor.",
    solution:
      "A custom WebSocket server on Bun with MongoDB, wired to a React Native client with typing indicators and presence.",
    result:
      "Low-latency messaging on infrastructure they control.",
    stack: ["React Native", "WebSocket", "MongoDB"],
    live: null,
    github: "https://github.com/Rayan37307/trashchat",
  },
];
