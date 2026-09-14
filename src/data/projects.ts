export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
  order: number;
  slug: string;
}

export const projects: Project[] = [
  {
    id: "synapse",
    title: "SYNAPSE",
    subtitle: "Cloud-Native Real-Time Collaborative Knowledge Platform",
    description:
      "Synapse is a cloud-native, real-time collaborative document platform that combines rich-text editing with AI-driven knowledge management.",
    tags: [
      "Next.js",
      "TipTap",
      "Custom Operational Transformation",
      "Socket.IO",
      "Redis",
      "AWS",
    ],
    github: "https://github.com/Kevin272-dot",
    featured: true,
    order: 1,
    slug: "synapse",
  },
  {
    id: "club-management",
    title: "Advanced Club Management System",
    subtitle: "Organizational Management Platform",
    description:
      "An advanced management system built for organizational operations, providing a production-oriented platform for club management.",
    tags: ["[ADD TECH STACK]"],
    github: "https://github.com/Kevin272-dot",
    featured: true,
    order: 2,
    slug: "club-management-system",
  },
  {
    id: "mcp",
    title: "MCP",
    subtitle: "Understanding the Why and the What",
    description:
      "A protocol engineering project implementing a real JSON-RPC 2.0 MCP endpoint with live React Flow visualization, filesystem tools, and sandboxed access.",
    tags: [
      "Next.js",
      "TypeScript",
      "React Flow",
      "Puppeteer",
      "JSON-RPC 2.0",
      "Event-Driven Architecture",
    ],
    github: "https://github.com/Kevin272-dot",
    featured: true,
    order: 3,
    slug: "mcp",
  },
  {
    id: "qnn-vs-mlp",
    title: "QNN vs MLP",
    subtitle: "Quantum Neural Network vs Classical MLP",
    description:
      "An experimental comparison of a Quantum Neural Network with a classical MLP on binary classification using variational quantum circuits.",
    tags: ["PennyLane", "PyTorch", "scikit-learn", "NumPy", "Matplotlib"],
    github: "https://github.com/Kevin272-dot",
    featured: true,
    order: 4,
    slug: "qnn-vs-mlp",
  },
  {
    id: "180dc-admin",
    title: "180DC Admin Platform",
    subtitle: "Production-Oriented Web Infrastructure",
    description:
      "Production-oriented web infrastructure for 180 Degrees Consulting, built with a monorepo architecture using Turborepo, Cloudflare Workers, and Wrangler.",
    tags: [
      "Turborepo",
      "Cloudflare Workers",
      "Wrangler",
      "Public API",
      "Admin API",
      "Job Processor",
    ],
    github: "https://github.com/Kevin272-dot/180dc-admin-website",
    featured: true,
    order: 5,
    slug: "180dc-admin-platform",
  },
];

export const otherProjects = [
  {
    id: "automl",
    title: "AutoML Framework",
    github: "https://github.com/Kevin272-dot",
  },
  {
    id: "trc-translator",
    title: "Tuple & Domain Relational Calculus Translator",
    github: "https://github.com/Kevin272-dot",
  },
  {
    id: "smart-plant",
    title: "Smart Plant Monitoring System",
    github: "https://github.com/Kevin272-dot/smart-plant-monitoring-system-",
  },
  {
    id: "vortex",
    title: "The Vortex App",
    github: "https://github.com/Kevin272-dot",
  },
  {
    id: "slingshot",
    title: "Slingshot-EXPO",
    github: "https://github.com/Kevin272-dot",
  },
  {
    id: "productivity-agent",
    title: "Personal Productivity Agent",
  },
];

export const synapseDetails = {
  overview:
    "Synapse is a cloud-native, real-time collaborative document platform that combines rich-text editing with AI-driven knowledge management. It is designed as a single system that handles writing, connecting ideas, and generating study material — replacing the need to manually coordinate multiple tools.",
  whyBuilt:
    "Most collaborative writing tools stop at real-time editing. Most knowledge management tools require manual organization. Most study tools require you to upload content separately. Synapse unifies all three into a single system with a custom-built collaboration engine.",
  techStack: [
    "Next.js",
    "TipTap",
    "Custom Operational Transformation",
    "Socket.IO",
    "Redis",
    "AWS",
  ],
  collaboration: {
    description:
      "Multiple users can co-edit documents simultaneously with real-time synchronization, live cursors, and presence indicators. The system uses a custom-built Operational Transformation engine designed for concurrent editing, consistency, and conflict handling.",
    features: [
      "Real-time synchronization",
      "Live cursors",
      "Presence indicators",
      "Custom Operational Transformation engine",
      "Concurrent editing support",
      "Conflict resolution",
    ],
  },
  ot: {
    description:
      "The Operational Transformation engine handles concurrent document modifications by transforming operations against each other to maintain consistency. Unlike CRDT-based approaches, OT applies a central transformation function that ensures all clients converge to the same document state.",
    concepts: [
      "Operation transformation",
      "Concurrent modification handling",
      "State convergence",
      "Client-side buffering",
      "Server-side coordination",
    ],
  },
  knowledgeGraph: {
    description:
      "Synapse automatically extracts concepts from what users write and builds a live, incrementally-updating personal knowledge graph linking related notes across the workspace.",
    pipeline: [
      "Document",
      "Concept Extraction",
      "Concepts",
      "Relationships",
      "Knowledge Graph",
      "Related Notes",
    ],
  },
  aiPipeline: {
    description:
      "Study tools are generated directly from the user's own notes, eliminating the need to write somewhere, manually connect ideas elsewhere, and upload content to a separate study platform.",
    inputs: ["User Notes"],
    outputs: ["Summaries", "Flashcards", "Quizzes"],
  },
  cloudArchitecture: {
    description:
      "The infrastructure is designed for horizontal scaling of real-time collaboration servers.",
    pipeline: [
      "Client",
      "Next.js",
      "Application / Collaboration Layer",
      "Socket.IO",
      "Redis",
      "Horizontally Scaled Real-Time Infrastructure",
      "AWS",
    ],
    currentDirection:
      "Current infrastructure direction: EC2 → ECS Fargate migration",
    services: ["EC2", "ECS Fargate"],
  },
  scaling: {
    description:
      "Synapse is designed to scale horizontally by adding collaboration server instances behind a load balancer, with Redis handling pub/sub for cross-instance real-time synchronization.",
    approaches: [
      "Horizontal scaling of collaboration servers",
      "Redis pub/sub for cross-instance sync",
      "Stateless application layer",
      "Connection-aware load balancing",
    ],
  },
  challenges: [
    {
      title: "Operational Transformation Consistency",
      description:
        "Ensuring all clients converge to the same document state under concurrent editing requires careful transformation function design.",
    },
    {
      title: "Real-Time Knowledge Graph Updates",
      description:
        "Extracting concepts and building relationships in real-time without introducing latency into the editing experience.",
    },
    {
      title: "Horizontal Scaling of Stateful Connections",
      description:
        "Scaling WebSocket connections across multiple server instances while maintaining session consistency.",
    },
  ],
  technicalDecisions: [
    {
      decision: "Custom OT over CRDT",
      rationale:
        "Operational Transformation was chosen for finer control over transformation semantics and simpler convergence guarantees for document editing.",
    },
    {
      decision: "Redis for pub/sub",
      rationale:
        "Redis provides low-latency pub/sub for cross-instance real-time synchronization without introducing a separate message broker.",
    },
    {
      decision: "Next.js application layer",
      rationale:
        "Next.js handles both the web application and API routes, reducing operational complexity.",
    },
  ],
  futureWork: [
    "ECS Fargate migration for containerized deployment",
    "Advanced conflict resolution strategies",
    "Distributed knowledge graph queries",
    "Offline-first architecture",
    "Multi-workspace collaboration",
  ],
  research: {
    status: "IN PROGRESS",
    target: "IEEE Conference",
    intersection: [
      "Real-Time Collaborative Consistency",
      "Knowledge Graph Construction",
      "AI-Generated Study Tooling",
    ],
    placeholders: {
      title: "[RESEARCH TITLE]",
      question: "[RESEARCH QUESTION]",
      methodology: "[METHODOLOGY]",
      evaluation: "[EVALUATION]",
      results: "[RESULTS]",
      conference: "[CONFERENCE]",
      paperStatus: "[PAPER STATUS]",
    },
  },
};
