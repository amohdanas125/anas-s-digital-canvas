import wanderlust from "@/assets/project-wanderlust.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import artisan from "@/assets/project-artisan.jpg";
import bizmatics from "@/assets/project-bizmatics.jpg";
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
  repoLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "e-commerce-platform",
    name: "E-Commerce Fashion",
    tagline: "Storefront, cart and admin dashboard",
    blurb:
      "A full-stack premium application with product listings, shopping cart, authentication and an admin dashboard.",
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
    demoUrl: "https://e-com-x0p7.onrender.com",
    repoUrl: "https://github.com/amohdanas125/",
  },
  {
    slug: "artisan-leather-goods",
    name: "Artisan Leather Goods",
    tagline: "Handcrafted e-commerce & catalog",
    blurb:
      "A fullstack e-commerce experience for handcrafted leather goods with variant selection, stock management and transactional checkout.",
    overview: [
      "Artisan Leather Goods (Terracotta / Tanner & Co.) is a high-performance e-commerce store dedicated to artisanal leather craftsmanship, complete with product discovery by category, color and size.",
      "The platform is powered by a NestJS REST API with Drizzle ORM and Neon PostgreSQL, supporting variant inventories, cart sessions, wishlist, and an administrative management dashboard.",
    ],
    features: [
      "Dynamic catalog with color/size matrix, stock tracking and price overrides",
      "Transactional checkout pipeline with coupon validation and guest cart merging",
      "Admin portal for product catalog CRUD, order lifecycle and inventory alerts",
      "Customer reviews, wishlist curation and cloud-hosted media assets",
    ],
    tech: ["React", "TanStack Start", "NestJS", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    role: "Fullstack developer",
    year: "2025",
    image: artisan,
    demoUrl: "https:leatherknp.netlify.app",
    repoUrl: "https://github.com/amohdanas125/",
  },
  {
    slug: "bizmatics",
    name: "BizmaticX",
    tagline: "Social media & digital agency platform",
    blurb:
      "A high-performance digital marketing and social media platform with cinematic canvas animations, portfolio showcase and cloud deck portal.",
    overview: [
      "BizmaticX is an interactive digital presence platform built for a full-service social media and digital marketing agency, showcasing campaign services, video reels, and client presentations.",
      "Backed by Supabase PostgreSQL and Storage, the site includes an admin portal for managing PowerPoint pitch decks, video portfolio showcases, and client analytics.",
    ],
    features: [
      "Interactive frame-by-frame canvas scroll animation and custom cursor effects",
      "Client presentation portal with PowerPoint (.pptx) cloud storage and previews",
      "Video portfolio showcase with dynamic ordering and responsive media players",
      "Admin authentication dashboard with Supabase Cloud DB management",
    ],
    tech: ["JavaScript", "Supabase", "PostgreSQL", "GSAP", "HTML5 Canvas", "CSS3"],
    role: "Frontend & cloud developer",
    year: "2025",
    image: bizmatics,
    demoUrl: "https://bizmaticx.in/",
    repoUrl: "https://github.com/amohdanas125/",
  },
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
    repoUrl: "https://github.com/amohdanas125/",
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
    repoUrl: "https://leetcode.com/u/Mohd_Anas26/",
    repoLabel: "LeetCode",
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
    demoUrl: "https://anasdeveloper.in/",
    repoUrl: "https://github.com/",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
