import { Skill } from "@/types/Skill";

// Skill levels: 1-5 (Learning), 6-10 (Intermediate), 11-15 (Proficient), 16-20 (Expert)
export const skills: Array<Skill> = [
  // Core Frontend Technologies - Expert Level (16-20)
  { title: "HTML5, CSS3, JavaScript (ES6+)", subtitle: "8+ years experience", level: 19 },
  { title: "TypeScript", subtitle: "Production applications", level: 19 },
  { title: "CSS Preprocessors (SASS, LESS)", subtitle: "Large-scale projects", level: 17 },
  { title: "Responsive & Adaptive Design", subtitle: "Mobile-first approach", level: 18 },

  // Frontend Frameworks & Libraries - Expert Level
  { title: "React.js (Next.js, Remix)", subtitle: "Primary expertise", level: 19 },
  { title: "Vue.js (Nuxt.js)", subtitle: "Multiple projects", level: 8 },
  { title: "Tailwind CSS, Styled Components, Emotion", subtitle: "Component styling", level: 19 },

  // State Management & Data Fetching - Expert Level
  { title: "React Query, SWR", subtitle: "Server state management", level: 19 },
  { title: "Redux (Toolkit, RTK Query)", subtitle: "Complex state logic", level: 19 },
  { title: "Zustand, Jotai, Recoil", subtitle: "Modern state solutions", level: 16 },

  // Performance Optimization - Expert Level
  { title: "Code Splitting, Lazy Loading", subtitle: "Bundle optimization", level: 19 },
  { title: "Server-Side Rendering (SSR), Static Site Generation (SSG)", subtitle: "Next.js expertise", level: 7 },
  { title: "Lighthouse, Web Vitals, RAIL Model", subtitle: "Performance metrics", level: 10 },

  // Testing & Quality Assurance - Expert Level
  { title: "Jest, Vitest, React Testing Library", subtitle: "Unit & integration testing", level: 18 },
  { title: "Cypress, Playwright", subtitle: "E2E testing automation", level: 18 },
  { title: "Storybook", subtitle: "Component testing & documentation", level: 18 },

  // Build Tools & CI/CD - Proficient Level (11-15)
  { title: "Webpack, Vite, esbuild", subtitle: "Module bundlers", level: 16 },
  { title: "ESLint, Prettier, Husky", subtitle: "Code quality tools", level: 18 },
  { title: "GitHub Actions, GitLab CI/CD, CircleCI", subtitle: "Deployment pipelines", level: 17 },

  // API & Backend Integration - Proficient Level
  { title: "RESTful APIs, GraphQL (Apollo, Relay)", subtitle: "Data fetching patterns", level: 15 },
  { title: "WebSockets, SSE", subtitle: "Real-time applications", level: 6 },
  { title: "Node.js (Express, Fastify, NestJS)", subtitle: "Backend JavaScript", level: 12 },

  // Cloud & DevOps - Intermediate Level (6-10)
  { title: "Docker, Kubernetes", subtitle: "Containerization basics", level: 12 },
  { title: "AWS (S3, Lambda, CloudFront), Vercel, Netlify", subtitle: "Cloud deployment", level: 4 },

  // Security & Accessibility - Proficient Level
  { title: "OWASP Best Practices", subtitle: "XSS, CSRF, CORS prevention", level: 12 },
  { title: "WCAG Guidelines", subtitle: "Web accessibility standards", level: 10 },
  { title: "ARIA Roles, Keyboard Navigation", subtitle: "Inclusive design", level: 15 },

  // Leadership & Collaboration - Expert Level
  { title: "Code Reviews & Best Practices", subtitle: "Quality assurance", level: 19 },
  { title: "System Design for Scalable Frontend", subtitle: "Architecture planning", level: 19 },
  { title: "Mentorship & Team Collaboration", subtitle: "5+ developers mentored", level: 20 },
];
