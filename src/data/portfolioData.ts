import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Shreya Rakholiya",
  shortName: "Shreya R",
  role: "Backend Developer",
  subheadline:
    "Backend Developer with 1.5+ years of experience building secure, scalable REST APIs, low-latency real-time servers, async job queues, AI integrations, and automation workflows that ship to production.",
  availability: "Open to remote work worldwide",
  email: "rakholiyashreya@gmail.com",
  phone: "+917359098284",
  linkedin: "https://www.linkedin.com/in/shreyarakholiya",
  stats: [
    { value: "1.5+", label: "Years Professional Experience" },
    { value: "2", label: "Apps Live on Play Store" },
    { value: "6+", label: "Production Backend Systems" },
    { value: "15+", label: "Technologies Mastered" },
  ],
  experience: [
    {
      role: "Backend Developer / Web Developer",
      company: "10turtle",
      period: "Dec 2024 – Present (1 yr 8 mos)",
      location: "Surat, Gujarat, India",
      bullets: [
        "Built scalable RESTful APIs and backend services using Node.js, Express.js, and TypeScript.",
        "Designed real-time applications and event-driven messaging systems using Socket.IO and push notifications.",
        "Implemented asynchronous job processing with BullMQ and RabbitMQ, optimizing backend performance via Redis caching and PostgreSQL/MongoDB databases with Prisma ORM.",
        "Integrated AI services (OpenAI, Grok, Suno APIs) and third-party APIs (Google Meet, Razorpay, Upwork).",
        "Built automated workflows using n8n and containerized backend services with Docker for consistent development and deployment.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sutex Bank College of Computer Applications",
      period: "2022 – 2025",
    },
  ],
  projects: [
    {
      id: "tunex",
      title: "TuneX — AI Music Generation App",
      badge: "Live on Google Play Store",
      description:
        "Production backend API for an AI music application live on Google Play using TypeScript, Node.js, and Express.",
      bullets: [
        "Built the production backend API for an AI music app live on Google Play using TypeScript, Node.js, and Express.",
        "Handled asynchronous audio generation workflows using RabbitMQ/Redis message queues, Socket.io real-time updates, and AWS S3 file storage.",
        "Built content moderation using OpenAI safety filters to scan user inputs before generating music.",
        "Wrote webhook listeners for Google Play and Apple App Store SDKs with duplicate event checks to sync subscriptions and billing events reliably.",
      ],
      stack: [
        "TypeScript",
        "Node.js",
        "Express",
        "RabbitMQ",
        "Socket.io",
        "AWS S3",
        "Suno API",
        "OpenAI API",
        "Store SDKs",
      ],
      liveUrl: "https://play.google.com",
    },
    {
      id: "imposter-game",
      title: "Imposter Game — Real-Time Multiplayer Server",
      badge: "Live on Google Play Store",
      description:
        "Real-time multiplayer backend for a mobile game live on Google Play handling concurrent websocket gameplay loops.",
      bullets: [
        "Built the real-time multiplayer backend for a mobile game live on Google Play using Node.js, Express, MongoDB, and Socket.io.",
        "Handled live gameplay loops over Socket.io—managing room creation, secret word and role assignments (Imposter vs Crewmate), live chat, voting rounds, and tie-breakers.",
        "Built in-app purchase validation for Apple App Store (StoreKit 2 ES256 signing) and Google Play, using dynamic cron tasks scheduled at exact subscription expiry times to avoid heavy database polling.",
        "Integrated OpenAI API to generate custom word categories and Firebase Admin (FCM) to send daily push notifications.",
      ],
      stack: [
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Apple StoreKit 2",
        "Google Play IAP",
        "OpenAI API",
        "Firebase FCM",
        "Docker",
      ],
      liveUrl: "https://play.google.com",
    },
    {
      id: "matchly",
      title: "Matchly — AI Recruitment & Matching Platform",
      badge: "Live · matchly.me",
      description:
        "Core backend and matching engine for matchly.me featuring automated interview scheduling and background pipelines.",
      bullets: [
        "Built the core backend and matching engine for matchly.me using TypeScript, Node.js, and PostgreSQL.",
        "Wrote custom matching logic that filters candidates by hard requirements (skills, location) and scores them based on weighted criteria.",
        "Set up BullMQ background jobs, Socket.io real-time notifications, and automated Google Meet invite generation for scheduled interviews.",
      ],
      stack: [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "OpenAI API",
        "BullMQ",
        "Redis",
        "Socket.io",
        "Google Meet API",
        "Stripe",
      ],
      liveUrl: "https://matchly.me",
    },
    {
      id: "genxi",
      title: "GenXi — AI News & Automated Blog Platform",
      badge: "Production · genxi.io",
      description:
        "Automated AI news collection, web scraping, and n8n blog generation pipeline publishing daily to genxi.io/blogs.",
      bullets: [
        "Built a backend system using TypeScript, Node.js, Express, and MongoDB to automatically collect and store AI news articles.",
        "Used Puppeteer web scrapers to extract clean article text, titles, and images from news websites.",
        "Built REST APIs and image upload endpoints (using DigitalOcean cloud storage) to send clean article text and pictures to n8n.",
        "Set up n8n workflows that use OpenAI API to write blog drafts and publish them directly to genxi.io/blogs.",
      ],
      stack: [
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Puppeteer",
        "REST APIs",
        "DigitalOcean Spaces",
        "n8n",
        "OpenAI API",
        "Gemini API",
        "Grok API",
      ],
      liveUrl: "https://genxi.io",
    },
    {
      id: "bookify",
      title: "Bookify — Digital Library & E-Book SaaS",
      badge: "Shipped",
      description:
        "Enterprise digital library and e-book SaaS backend featuring MongoDB Change Streams, live fine calculation, and Razorpay webhooks.",
      bullets: [
        "Built an enterprise digital library and e-book SaaS backend using TypeScript, Node.js, Express, and MongoDB.",
        "Used MongoDB Change Streams (watch()) to listen for database updates in real time and automatically calculate overdue book fines.",
        "Integrated Razorpay payment gateways and webhook listeners to manage recurring SaaS subscriptions and automated security deposit refunds when books are returned.",
        "Built secure REST APIs with JWT authentication, role-based access control (Admin, Author, User), and Cloudinary image optimization for book covers.",
      ],
      stack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Change Streams",
        "Razorpay",
        "JWT",
        "Cloudinary",
      ],
      liveUrl: "#",
    },
    {
      id: "tours-travel",
      title: "Tours & Travel — Interactive Travel App",
      badge: "Shipped",
      description:
        "Frontend travel exploration web application with interactive catalogs, tour filters, and responsive modern CSS grid layout.",
      bullets: [
        "Built a frontend travel exploration web app in React with interactive destination catalogs, tour package filters, and booking inquiry forms.",
        "Designed a responsive layout with modern CSS grid/flexbox and smooth UI interactions across desktop and mobile devices.",
      ],
      stack: ["React.js", "HTML5", "Modern CSS", "Responsive UI"],
      liveUrl: "#",
    },
  ],
  services: [
    {
      id: "backend",
      title: "Backend Systems & Architecture",
      description:
        "Production REST APIs, role-based access control (JWT/RBAC), microservices, and webhook integrations built for reliability.",
      highlights: [
        "Node.js, Express & TypeScript",
        "PostgreSQL, MongoDB & Prisma ORM",
        "Razorpay & Stripe Live Webhooks",
        "Server Deployment (Bitvise SSH/SFTP)",
      ],
      iconName: "Server",
    },
    {
      id: "realtime",
      title: "Real-time Multiplayer Servers",
      description:
        "Ultra-low latency WebSocket servers, multiplayer game loops, room management, live chat, and Redis pub/sub state sync.",
      highlights: [
        "Socket.io & WebSockets",
        "Concurrent Room State Management",
        "Live Matchmaking & Voting Rounds",
        "Push Notifications (Firebase FCM)",
      ],
      iconName: "Zap",
    },
    {
      id: "ai",
      title: "AI & External API Integrations",
      description:
        "Wrapping OpenAI, Gemini, Grok, and Suno audio synthesis behind async job queues with streaming output and automated screening.",
      highlights: [
        "OpenAI, Gemini, Grok & Suno APIs",
        "BullMQ & RabbitMQ Async Queues",
        "Google Meet & Upwork API Pipelines",
        "Content Moderation & Safety Filters",
      ],
      iconName: "Cpu",
    },
    {
      id: "automation",
      title: "Workflow Automation & DevOps",
      description:
        "Automated scraping with Puppeteer, data ingestion, n8n workflows, and containerized backend deployments with Docker.",
      highlights: [
        "n8n Autonomous Workflows",
        "Puppeteer Web Scraping",
        "Docker Containerization",
        "Cron Tasks & Automated Publishing",
      ],
      iconName: "Workflow",
    },
  ],
  stackCategories: [
    {
      category: "Languages & Core Backend",
      skills: [
        { name: "TypeScript", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "REST APIs", highlight: true },
      ],
    },
    {
      category: "Real-Time & Messaging Queues",
      skills: [
        { name: "Socket.io", highlight: true },
        { name: "BullMQ", highlight: true },
        { name: "RabbitMQ", highlight: true },
        { name: "Redis Caching", highlight: true },
        { name: "Push Notifications (FCM)" },
      ],
    },
    {
      category: "Databases & ORMs",
      skills: [
        { name: "MongoDB", highlight: true },
        { name: "PostgreSQL", highlight: true },
        { name: "Prisma ORM", highlight: true },
        { name: "Mongoose" },
        { name: "Change Streams" },
      ],
    },
    {
      category: "AI, APIs & DevOps",
      skills: [
        { name: "OpenAI / Gemini / Grok APIs", highlight: true },
        { name: "Suno API" },
        { name: "Docker", highlight: true },
        { name: "n8n Automation", highlight: true },
        { name: "Bitvise SSH/SFTP" },
        { name: "Stripe & Razorpay", highlight: true },
      ],
    },
  ],
  about: {
    tagline: "Backend Developer building secure, scalable software.",
    bio: [
      "I am a Backend Developer with 1.5+ years of experience building secure and scalable web applications at 10turtle and on live production products.",
      "Skilled in Node.js, Express.js, TypeScript, MongoDB, and REST API development, with strong hands-on work in CRUD operations, JWT authentication, role-based access control, and third-party API integration. Also experienced with Strapi CMS, PostgreSQL, and Python REST APIs.",
      "I enjoy writing clean, simple code that solves real business problems and delivering reliable solutions on time.",
    ],
    strengths: [
      "Strong backend developer with 1.5+ years of experience in Node.js, Express, and TypeScript.",
      "Skilled at building real-time multiplayer apps, AI integrations, REST APIs, and background queues.",
      "Experienced with database design (MongoDB, PostgreSQL), Docker containers, n8n automation, and server deployment.",
      "Enjoy writing clean, maintainable code and delivering reliable solutions on time.",
    ],
  },
};
