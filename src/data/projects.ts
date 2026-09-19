export type ProjectCategory =
  | "Featured Applications"
  | "Full-Stack Projects"
  | "AI/ML and Data Projects"
  | "Hackathon Projects"
  | "Organization and Team Projects";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  membersPage?: string;
  category: ProjectCategory;
  featured: boolean;
  order: number;
}

export const categories: ProjectCategory[] = [
  "Featured Applications",
  "Full-Stack Projects",
  "AI/ML and Data Projects",
  "Hackathon Projects",
  "Organization and Team Projects",
];

export const projects: Project[] = [
  {
    id: "180dc-admin",
    title: "180DC Admin Website",
    description:
      "Production-oriented admin platform for 180 Degrees Consulting, built with a monorepo architecture featuring Cloudflare Workers, public API, and job processing pipeline.",
    tags: ["Turborepo", "Cloudflare Workers", "TypeScript", "Public API", "Admin API"],
    github: "https://github.com/Kevin272-dot/180dc-admin-website",
    live: "https://180dcvitc.org",
    membersPage: "https://180dcvitc.org/members",
    category: "Organization and Team Projects",
    featured: true,
    order: 1,
  },
  {
    id: "mcp",
    title: "MCP",
    description:
      "A protocol engineering project implementing a real JSON-RPC 2.0 MCP endpoint with live React Flow visualization, filesystem tools, and sandboxed access.",
    tags: ["Next.js", "TypeScript", "React Flow", "JSON-RPC 2.0", "Event-Driven Architecture"],
    github: "https://github.com/Kevin272-dot/MCP",
    live: "https://mcp-peach-five.vercel.app",
    category: "Featured Applications",
    featured: true,
    order: 2,
  },
  {
    id: "v-vortex",
    title: "V-Vortex Hackathon",
    description:
      "Hackathon project built for the V-Vortex event, showcasing rapid prototyping, full-stack development, and collaborative engineering under time constraints.",
    tags: ["Full-Stack", "Hackathon", "Rapid Prototyping", "Team Project"],
    github: "https://github.com/Kevin272-dot/V-Vortex-Hackathon",
    live: "https://v-vortex-hackathon-git-main-l-kevin-daniels-projects.vercel.app/",
    category: "Hackathon Projects",
    featured: true,
    order: 3,
  },
  {
    id: "slingshot-expo",
    title: "Slingshot EXPO",
    description:
      "A polished web application built for the Slingshot EXPO event, featuring responsive design and modern frontend practices.",
    tags: ["Next.js", "Responsive Design", "Frontend", "Event Platform"],
    github: "https://github.com/Kevin272-dot/Slingshot-EXPO",
    live: "https://slingshot-expo.vercel.app",
    category: "Hackathon Projects",
    featured: true,
    order: 4,
  },
  {
    id: "synapse",
    title: "Synapse",
    description:
      "A cloud-native, real-time collaborative document platform combining rich-text editing with AI-driven knowledge management, custom Operational Transformation, and live knowledge graphs.",
    tags: ["Next.js", "TipTap", "Operational Transformation", "Socket.IO", "Redis", "AWS"],
    github: "https://github.com/Kevin272-dot/Synapse",
    category: "Featured Applications",
    featured: true,
    order: 5,
  },
  {
    id: "productivity-agent",
    title: "Personal Productivity Agent",
    description:
      "An AI-powered personal productivity agent designed to automate task management, scheduling, and workflow optimization using intelligent decision-making.",
    tags: ["AI", "Python", "Automation", "Agent Architecture", "LLM"],
    github: "https://github.com/Kevin272-dot/Personal-Productivity-Agent",
    category: "AI/ML and Data Projects",
    featured: true,
    order: 6,
  },
  {
    id: "vortex-app",
    title: "The Vortex App",
    description:
      "A full-stack application built as part of the Vortex ecosystem, featuring modern web architecture and real-time capabilities.",
    tags: ["Full-Stack", "Real-Time", "Modern Architecture"],
    github: "https://github.com/Kevin272-dot/The-Vortex-app",
    category: "Full-Stack Projects",
    featured: true,
    order: 7,
  },
  {
    id: "automl",
    title: "AutoML Framework",
    description:
      "An automated machine learning framework that streamlines model selection, hyperparameter tuning, and evaluation for classification and regression tasks.",
    tags: ["Python", "Machine Learning", "AutoML", "scikit-learn", "Data Pipeline"],
    github: "https://github.com/Kevin272-dot/AutoML-framework",
    category: "AI/ML and Data Projects",
    featured: true,
    order: 8,
  },
  {
    id: "ayu",
    title: "AYU",
    description:
      "A software project focused on building a functional application with clean architecture and practical utility.",
    tags: ["Software Development", "Application Design"],
    github: "https://github.com/Kevin272-dot/AYU",
    category: "Full-Stack Projects",
    featured: true,
    order: 9,
  },
  {
    id: "finsec",
    title: "Finsec",
    description:
      "A financial technology project exploring security and data handling in financial software systems.",
    tags: ["FinTech", "Security", "Data Handling", "Software Engineering"],
    github: "https://github.com/Kevin272-dot/Finsec",
    category: "Full-Stack Projects",
    featured: true,
    order: 10,
  },
  {
    id: "smart-plant",
    title: "Smart Plant Monitoring System",
    description:
      "An IoT-based plant monitoring system that tracks environmental conditions and provides real-time alerts for plant care.",
    tags: ["IoT", "Sensors", "Real-Time Monitoring", "Python", "Embedded Systems"],
    github: "https://github.com/Kevin272-dot/smart-plant-monitoring-system-",
    live: "https://smart-plant-monitoring-system-khaki.vercel.app",
    category: "Featured Applications",
    featured: true,
    order: 11,
  },
  {
    id: "equilink",
    title: "Equilink",
    description:
      "A connectivity and integration platform designed to link systems and streamline data flow between components.",
    tags: ["Integration", "API Design", "Systems Connectivity"],
    github: "https://github.com/Kevin272-dot/equilink",
    category: "Full-Stack Projects",
    featured: true,
    order: 12,
  },
  {
    id: "qnn-vs-mlp",
    title: "QNN VS MLP",
    description:
      "An experimental comparison of a Quantum Neural Network with a classical MLP on binary classification using variational quantum circuits.",
    tags: ["PennyLane", "PyTorch", "scikit-learn", "Quantum Computing", "Machine Learning"],
    github: "https://github.com/Kevin272-dot/QNN-VS-MLP",
    category: "AI/ML and Data Projects",
    featured: true,
    order: 13,
  },
  {
    id: "trc-translator",
    title: "Tuple and Domain Relational Calculus Translator",
    description:
      "A database systems project that translates Tuple Relational Calculus and Domain Relational Calculus queries into relational algebra.",
    tags: ["Database Systems", "Query Languages", "Compiler Design", "Relational Algebra"],
    github: "https://github.com/Kevin272-dot/Tuple-and-Domain-Relational-Calculus-Translator",
    category: "AI/ML and Data Projects",
    featured: true,
    order: 14,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "This portfolio website, built with Next.js, Tailwind CSS, and Framer Motion, showcasing projects and skills with a modern dark theme.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/Kevin272-dot/Portfolio",
    category: "Featured Applications",
    featured: true,
    order: 15,
  },
];
