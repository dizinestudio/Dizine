import { ServiceItem, PortfolioItem, TeamMember, Testimonial, PricingPlan } from '../types';

// Company Details
export const COMPANY_INFO = {
  name: "Dizine Studio",
  tagline: "Design • Develop • Deliver",
  slogan: "Transforming Ideas into High-Performance Digital Experiences",
  established: "2020",
  email: "Mailto@dizinestudio.com",
  phone: "+91 95555 65806",
  alternatePhone: "+91 95555 65806",
  whatsapp: "+919555565806",
  address: "Sadar Bazaar, Jhansi, Uttar Pradesh, India",
  virtualHq: "Jhansi HQ & Global Operations",
  stats: {
    projectsCompleted: "180+",
    activeClients: "65+",
    serverUptime: "99.98%",
    clientSatisfaction: "98.5%",
    teamMembers: "24+",
    globalReach: "12 Countries"
  }
};

// 6 Highlighted Expertise Services
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-design",
    title: "Website Design (UI/UX)",
    badge: "UI & Aesthetics",
    shortDesc: "User-centric, modern, and visually captivating UI/UX wireframes and web layouts designed for conversions.",
    fullDesc: "Our Website Design service combines creative aesthetics with behavioral psychological design principles. We build intuitive, responsive, and aesthetically stunning user interfaces that elevate brand prestige and optimize lead conversion rates across all screen sizes.",
    iconName: "Palette",
    features: [
      "Custom Figma UI/UX Prototypes & Wireframes",
      "Interactive Micro-animations & Design Systems",
      "Mobile-First Responsive Design Architecture",
      "Accessibility & WCAG AA Compliance",
      "Conversion Rate Optimization (CRO) Layouts"
    ],
    techStack: ["Figma", "Adobe XD", "Tailwind CSS", "Motion", "Framer"],
    deliverables: ["Full Interactive Prototype", "Design Tokens & Style Guide", "Exported Vector Assets", "Mobile & Desktop UI Layouts"],
    pricingStarting: "₹14,999",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "web-development",
    title: "Website Development",
    badge: "Fullstack Tech",
    shortDesc: "High-speed, scalable, and secure fullstack web applications built with modern frameworks and sub-second load times.",
    fullDesc: "From custom corporate web portals and React single-page apps to high-traffic e-commerce marketplaces and fullstack platforms, our engineering team crafts clean, modular, and performance-first web software with extreme security.",
    iconName: "Code2",
    features: [
      "React 19, Next.js & Node.js Scalable Architecture",
      "Lightning-Fast Sub-second Page Load Benchmark",
      "Custom Content Management Systems (CMS)",
      "RESTful & GraphQL API Integration",
      "E-Commerce & Secure Payment Gateway Setup"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "Next.js", "MongoDB/PostgreSQL"],
    deliverables: ["Production Ready Source Code", "Database Schema", "Admin Dashboard", "Speed & Security Audit Report"],
    pricingStarting: "₹24,999",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "graphics-designing",
    title: "Graphics Designing",
    badge: "Creative Branding",
    shortDesc: "Memorable visual identities, brand logos, vector illustrations, and high-impact social media marketing graphics.",
    fullDesc: "Stand out in crowded markets with Dizine Studio's creative graphics team. We craft distinct brand identity packages, vector logos, marketing brochures, promotional banners, and social media creative assets that leave a lasting mark.",
    iconName: "PenTool",
    features: [
      "3D & Vector Brand Logo Design",
      "Brand Identity Guidelines & Typography Kits",
      "Social Media Campaign Banners & Reels Assets",
      "Print Media: Brochures, Business Cards, Flyers",
      "Custom Illustrations & Infographics"
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "After Effects", "Canva Pro", "Blender 3D"],
    deliverables: ["Vector Master Files (AI, EPS, SVG)", "High-Res PNG/JPEG/PDF", "Brand Guidelines PDF", "3D Logo Mockups"],
    pricingStarting: "₹9,999",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "hosting-service",
    title: "Hosting Service & Cloud Ops",
    badge: "99.98% SLA Uptime",
    shortDesc: "Ultra-fast NVMe cloud hosting, automated SSL certificates, daily backups, and 24/7 technical server management.",
    fullDesc: "Never suffer from slow servers or unexpected downtime. Our managed hosting infrastructure leverages NVMe enterprise cloud instances, Cloudflare CDN acceleration, automated security firewalls, and dedicated server monitoring.",
    iconName: "Server",
    features: [
      "NVMe SSD Enterprise Speed Acceleration",
      "Free SSL Certificates & DDoS Protection",
      "Automated Daily & Weekly Cloud Backups",
      "Zero-Downtime Server Migration Assistance",
      "Dedicated 24/7 Server Management & Monitoring"
    ],
    techStack: ["AWS Cloud", "DigitalOcean", "Cloudflare CDN", "Docker", "Nginx", "Linux Security"],
    deliverables: ["cPanel / Server Access Credentials", "SSL Security Certificate", "Uptime Guarantee SLA", "Cloudflare CDN Setup"],
    pricingStarting: "₹4,999 / year",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    badge: "ROAS & Growth",
    shortDesc: "Data-driven Meta Ads, Google Ads, targeted social media campaigns, and funnel marketing that maximizes ROI.",
    fullDesc: "Accelerate customer acquisition with performance marketing campaigns designed to convert. We handle ad creation, audience targeting, conversion tracking, budget optimization, and continuous funnel refinement across search and social.",
    iconName: "TrendingUp",
    features: [
      "Google Search, Display & Shopping Ads Management",
      "Meta Ads (Facebook & Instagram) Campaign Strategy",
      "Conversion Tracking & Pixel Event Setup",
      "Target Audience Profiling & A/B Testing",
      "Weekly Performance & ROI Analytical Reports"
    ],
    techStack: ["Google Ads", "Meta Business Suite", "Google Analytics 4", "Semrush", "Hotjar"],
    deliverables: ["Comprehensive Strategy Deck", "High-Converting Ad Creatives", "Weekly Performance Dashboard", "ROAS Optimization"],
    pricingStarting: "₹19,999 / mo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    badge: "Page 1 Rankings",
    shortDesc: "Technical SEO audits, keyword ranking strategies, speed optimizations, and quality backlink acquisition.",
    fullDesc: "Dominate Google search engine results pages naturally. We perform end-to-end SEO overhaul including technical site speed fixes, structured data schemas, keyword gap analysis, high-authority backlink outreach, and localized search optimization.",
    iconName: "Search",
    features: [
      "In-Depth Technical SEO & Speed Benchmark Audit",
      "High-Intent Keyword Research & Mapping",
      "On-Page Optimization (Meta, H1, Schema.org)",
      "High-Authority Organic Backlink Acquisition",
      "Local SEO & Google Business Profile Management"
    ],
    techStack: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "PageSpeed Insights"],
    deliverables: ["Monthly Keyword Ranking Report", "Technical Fixes Implementation", "On-Page Schema Markup", "Backlink Acquisition Log"],
    pricingStarting: "₹14,999 / mo",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80"
  }
];

// Portfolio Works
export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "fintech-portal",
    title: "NexGen Pay - Fintech Web Platform",
    category: "web-dev",
    categoryLabel: "Website Development",
    client: "NexGen Financial Services",
    year: "2025",
    shortDesc: "A sleek, secure banking & payment dashboard with real-time transaction analytics and sub-400ms page load speeds.",
    fullCaseStudy: "Dizine Studio engineered an enterprise fintech dashboard for NexGen Pay, implementing end-to-end encrypted REST APIs, React 19 micro-frontend components, and an automated cloud hosting setup on AWS.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { label: "Page Load Time", value: "0.38s" },
      { label: "User Growth", value: "+240%" },
      { label: "Security Rating", value: "A+ SSL" }
    ],
    techUsed: ["React", "TypeScript", "Tailwind CSS", "Node.js", "AWS Cloud"],
    liveUrl: "https://example.com/demo/nexgen"
  },
  {
    id: "luxe-ecommerce",
    title: "Aura Luxe - Fashion E-Commerce",
    category: "web-design",
    categoryLabel: "Website Design & Dev",
    client: "Aura Apparel Global",
    year: "2025",
    shortDesc: "High-fashion e-commerce portal with 3D product previews, fluid micro-interactions, and instant checkout flow.",
    fullCaseStudy: "Designed and built from scratch with custom motion animations and tailored UI components. Increased conversion rates by 42% in the first quarter post-launch.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { label: "Conversion Rate", value: "4.8%" },
      { label: "Mobile Traffic", value: "82%" },
      { label: "Revenue Impact", value: "+$450K" }
    ],
    techUsed: ["Next.js", "Figma", "Stripe API", "Motion", "Tailwind"],
    liveUrl: "https://example.com/demo/aura"
  },
  {
    id: "medtech-seo",
    title: "CarePoint - HealthTech Organic Growth",
    category: "seo",
    categoryLabel: "SEO & Digital Marketing",
    client: "CarePoint Diagnostics",
    year: "2025",
    shortDesc: "Technical SEO optimization and content campaign driving CarePoint to #1 Google rankings for 35+ target medical keywords.",
    fullCaseStudy: "Executed a comprehensive technical site speed audit, restructured page schemas for medical entity tags, and launched a high-authority healthcare backlink outreach campaign.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { label: "Organic Search Visits", value: "+380%" },
      { label: "Page 1 Keywords", value: "48 Terms" },
      { label: "Monthly Patient Leads", value: "1,200+" }
    ],
    techUsed: ["Semrush", "Schema.org", "PageSpeed Engine", "Google Search Console"]
  },
  {
    id: "zenith-branding",
    title: "Zenith Tech - Complete Brand Identity",
    category: "graphics",
    categoryLabel: "Graphics Designing",
    client: "Zenith Robotics Ltd.",
    year: "2024",
    shortDesc: "Complete brand design overhaul including 3D logo mark, typography guidelines, vector icon kit, and event banners.",
    fullCaseStudy: "Designed a modern geometric logo representing AI connectivity, along with print marketing collaterals and social media toolkits.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { label: "Brand Assets Created", value: "120+" },
      { label: "Event Reach", value: "50k Visitors" }
    ],
    techUsed: ["Illustrator", "Photoshop", "Blender", "Figma"]
  },
  {
    id: "cloud-vps-migration",
    title: "Cloud Migration & Managed Hosting SLA",
    category: "hosting",
    categoryLabel: "Hosting Service",
    client: "Global Logistics Network",
    year: "2024",
    shortDesc: "Zero-downtime cloud infrastructure migration with Cloudflare Enterprise CDN and automated backup failovers.",
    fullCaseStudy: "Migrated legacy monolithic server to containerized NVMe Kubernetes cluster with automated geo-redundant backups.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { label: "Uptime Achieved", value: "100%" },
      { label: "Server Latency", value: "18ms" },
      { label: "Cost Savings", value: "35%" }
    ],
    techUsed: ["AWS", "Docker", "Cloudflare", "Nginx", "Linux"]
  },
  {
    id: "realestate-marketing",
    title: "Skyline Infra - Meta & Google Ad Campaign",
    category: "digital-marketing",
    categoryLabel: "Digital Marketing",
    client: "Skyline Real Estate Developers",
    year: "2025",
    shortDesc: "Targeted digital marketing funnel generating high-ticket luxury property buyer leads with a 7.2x Return on Ad Spend (ROAS).",
    fullCaseStudy: "Created ultra-engaging video ad creatives, geotargeted high-net-worth buyer demographics on Meta/Google Ads, and optimized instant lead form landing pages.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { label: "ROAS Multiplier", value: "7.2x" },
      { label: "Qualified Leads", value: "850+" },
      { label: "Cost Per Lead", value: "-45%" }
    ],
    techUsed: ["Meta Ads Manager", "Google Ads", "GA4", "Unbounce"]
  }
];

// Testimonials
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Rajesh Kumar",
    company: "Apex Tech Innovations",
    role: "Chief Technology Officer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "Dizine Studio completely transformed our web presence. Their website development speed, modern UI design, and flawless NVMe cloud hosting setup gave us a massive competitive edge.",
    rating: 5,
    projectType: "Fullstack Web & Hosting"
  },
  {
    id: "test-2",
    clientName: "Anita Sharma",
    company: "Vogue Lifestyle Brands",
    role: "Founder & Creative Director",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    comment: "The graphics design work and brand identity created by Dizine Studio were top-tier. Our e-commerce sales jumped by 60% within 60 days of launching our new website!",
    rating: 5,
    projectType: "Brand Identity & E-Commerce"
  },
  {
    id: "test-3",
    clientName: "David Miller",
    company: "SaaS Cloud Matrix",
    role: "VP of Marketing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    comment: "Their SEO Optimization and Google Ads campaigns brought us to Page 1 for our toughest keywords. Their dedicated team in Jhansi delivered world-class international results!",
    rating: 5,
    projectType: "SEO & Digital Marketing"
  },
  {
    id: "test-4",
    clientName: "Vikramaditya Singh",
    company: "Jhansi Heritage Hotels & Resorts",
    role: "Managing Director",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    comment: "We partnered with Dizine Studio for complete web design and custom booking engine development. Their local office at Sadar Bazaar, Jhansi provided exceptional support and sub-second performance.",
    rating: 5,
    projectType: "Website Design & Booking Engine"
  },
  {
    id: "test-5",
    clientName: "Priya Verma",
    company: "EcoLuxe Organics",
    role: "Head of Digital Strategy",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    comment: "Our graphic branding, custom social media campaign kits, and NVMe cloud hosting managed by Dizine Studio have been running at 100% uptime with sub-second page load times.",
    rating: 5,
    projectType: "Graphic Branding & NVMe Cloud"
  }
];

// Team Members
export const TEAM_DATA: TeamMember[] = [
  {
    id: "team-1",
    name: "Vikram Malhotra",
    role: "Founder & Creative Director",
    bio: "10+ years driving digital design, brand aesthetics, and tech architecture for tech startups and enterprise clients.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    skills: ["UI/UX Strategy", "Brand Aesthetics", "Fullstack Architecture", "Product Direction"]
  },
  {
    id: "team-2",
    name: "Priya Sundaram",
    role: "Head of Web Engineering",
    bio: "Specialist in React, Next.js, Node.js microservices, and sub-second page performance optimization.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    skills: ["React 19", "TypeScript", "Node.js", "GraphQL", "Cloud Ops"]
  },
  {
    id: "team-3",
    name: "Rohan Kapoor",
    role: "Lead Graphics & Visual Artist",
    bio: "Award-winning designer with expertise in 3D brand assets, vector illustration, and motion graphics.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    skills: ["Figma", "3D Blender", "Illustrator", "Motion Graphics"]
  },
  {
    id: "team-4",
    name: "Simran Kaur",
    role: "Digital Growth & SEO Lead",
    bio: "Data analytics expert focusing on organic rank domination, technical site speed, and ROAS optimization.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
    skills: ["Technical SEO", "Google Ads", "Meta Business", "Ahrefs", "Analytics"]
  }
];

// Pricing Plans
export const PRICING_DATA: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Digital Package",
    price: "₹19,999",
    billingPeriod: "one-time",
    description: "Ideal for small businesses and startups needing a sleek responsive website and brand presence.",
    features: [
      "Custom 5-Page Responsive Website Design",
      "Fast React / Tailwind Codebase",
      "Free SSL & NVMe Cloud Hosting (1 Year)",
      "Basic On-Page SEO Setup",
      "Contact Form with Email Notifications",
      "15 Days Post-Launch Support"
    ],
    recommendedFor: "Startups & Local Businesses"
  },
  {
    id: "business",
    name: "Business Growth Suite",
    price: "₹39,999",
    billingPeriod: "one-time",
    popular: true,
    description: "Our most popular package for growing companies wanting full web dev, custom graphics & digital push.",
    features: [
      "Up to 12 Custom Responsive Pages / Portal",
      "Custom UI/UX Prototypes & Micro-Animations",
      "Full E-Commerce / Custom CMS Integration",
      "Advanced Technical SEO & Schema Tags",
      "High-Speed NVMe Managed Cloud Hosting",
      "Brand Identity & Social Media Kit",
      "30 Days Priority Technical Support"
    ],
    recommendedFor: "Growing Companies & Brands"
  },
  {
    id: "enterprise",
    name: "Enterprise Custom Solution",
    price: "Custom Quote",
    billingPeriod: "project-based",
    description: "Tailored fullstack web applications, dedicated cloud architecture, and aggressive 360° digital growth.",
    features: [
      "Unlimited Scalable Pages / Web Application",
      "Dedicated Fullstack Engineering Team",
      "Multi-Region AWS Cloud Infrastructure",
      "Monthly SEO Ranking & Digital Marketing Funnel",
      "Custom API Integration & Security Hardening",
      "Dedicated Account Manager & SLA Guarantee",
      "24/7 VIP Maintenance Support"
    ],
    recommendedFor: "Large Enterprises & Scaleups"
  }
];

// FAQs
export const FAQS_DATA = [
  {
    question: "How long does it take to design and develop a website?",
    answer: "A standard 5-to-8 page business website typically takes 2 to 3 weeks. Complex fullstack portals, e-commerce platforms, or custom web applications take 4 to 6 weeks. We provide clear milestone updates at every step."
  },
  {
    question: "Do you offer website maintenance and cloud hosting services?",
    answer: "Yes! Dizine Studio offers complete managed NVMe cloud hosting, SSL certificates, automated daily backups, and 24/7 technical monitoring as part of our Hosting Service."
  },
  {
    question: "How does your AI Consultation tool work?",
    answer: "Our AI Consultation tool leverages advanced Gemini AI models to analyze your specific project goals, budget, and requirements, instantly generating a customized technical roadmap, scope, and price estimation."
  },
  {
    question: "Will my website be mobile responsive and fast loading?",
    answer: "100% yes. Mobile responsiveness and sub-second loading speed are our core engineering standards. Every site we build is optimized for Google PageSpeed Insights and mobile devices."
  },
  {
    question: "Can you help rank our website on Google (SEO)?",
    answer: "Absolutely. Our SEO Optimization services cover technical audit, keyword research, on-page schema tags, speed optimization, and organic backlink building to secure top search rankings."
  }
];
