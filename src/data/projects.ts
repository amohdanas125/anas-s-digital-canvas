import wanderlust from "@/assets/project-wanderlust.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import dsa from "@/assets/project-dsa.jpg";
import portfolio from "@/assets/project-portfolio.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  overview: string[];
  features: string[];
  tech: string[];
  role: string;
  year: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "wanderlust",
    name: "Wanderlust",
    tagline: "Travel stay marketplace",
    blurb:
      "An online marketplace connecting travelers with local hosts renting unique spaces across 220+ countries.",
    overview: [
      "Wanderlust lets hosts publish unique stays and lets travelers discover them by location, price and category.",
      "Listings are geocoded through LocationIQ and rendered on an interactive map, with reviews, ratings and full CRUD for owners.",
    ],
    features: [
      "Session-based authentication with owner-only listing controls",
      "Listing CRUD with image uploads and validation",
      "Geocoding and interactive map view of every stay",
      "Reviews and star ratings with server-side validation",
    ],
    tech: ["Node.js", "MongoDB", "Express", "EJS", "CSS", "LocationIQ"],
    role: "Solo fullstack developer",
    year: "2025",
    image: wanderlust,
    demoUrl: "https://github.com/",
    repoUrl: "https://github.com/",
  },
  {
    slug: "e-commerce-platform",
    name: "E-Commerce Platform",
    tagline: "Storefront, cart and admin dashboard",
    blurb:
      "A full-stack application with product listings, shopping cart, authentication and an admin dashboard.",
    overview: [
      "A complete shopping flow: browse the catalogue, add items to a persistent cart and check out as an authenticated user.",
      "Admins get a separate dashboard to manage inventory, pricing and orders.",
    ],
    features: [
      "Product catalogue with search, filters and detail pages",
      "Persistent cart and order history per user",
      "Role-based admin dashboard for inventory and orders",
      "REST API built with Express and MongoDB",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
    role: "Solo fullstack developer",
    year: "2025",
    image: ecommerce,
    demoUrl: "https://github.com/",
    repoUrl: "https://github.com/",
  },
  {
    slug: "dsa-solutions-vault",
    name: "DSA Solutions Vault",
    tagline: "100+ algorithm problems in C++",
    blurb:
      "100+ competitive programming problems solved in C++ covering arrays, trees, graphs, dynamic programming and greedy strategies.",
    overview: [
      "A structured repository of competitive programming solutions, grouped by topic and difficulty.",
      "Each solution documents the approach, time and space complexity, and the edge cases it handles.",
    ],
    features: [
      "Topic-wise folders: arrays, strings, trees, graphs, DP, greedy",
      "Complexity analysis noted on every solution",
      "Clean, idiomatic modern C++ with the STL",
      "Pattern notes for recurring interview problems",
    ],
    tech: ["C++", "STL", "Algorithms", "Data Structures"],
    role: "Author",
    year: "2024 — present",
    image: dsa,
    repoUrl: "https://github.com/",
  },
  {
    slug: "portfolio",
    name: "This Portfolio",
    tagline: "Futuristic personal site",
    blurb:
      "A futuristic personal site with particle animations, glassmorphism surfaces and smooth scroll reveals.",
    overview: [
      "A multi-page portfolio with a dark neon theme, animated particle canvas and glassmorphism surfaces.",
      "Every page ships its own SEO metadata and is fully responsive and keyboard accessible.",
    ],
    features: [
      "Canvas particle background with reduced-motion support",
      "Scroll-reveal animations on every section",
      "Per-page SEO metadata and structured data",
      "Accessible navigation and validated contact form",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Canvas API"],
    role: "Designer & developer",
    year: "2026",
    image: portfolio,
    demoUrl: "https://github.com/",
    repoUrl: "https://github.com/",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
