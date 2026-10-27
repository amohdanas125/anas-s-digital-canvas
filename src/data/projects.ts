import wanderlust from "@/assets/project-wanderlust.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import artisan from "@/assets/project-artisan.jpg";
import bizmatics from "@/assets/project-bizmatics.jpg";
import perfume from "@/assets/project-perfume.jpg";
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
    slug: "artisan-leather-goods",
    name: "Artisan Leather Goods",
    tagline: "Handcrafted luxury e-commerce & catalog",
    blurb:
      "A full-stack commercial e-commerce platform for artisanal leather goods with dynamic variant matrices, live stock management, and transactional checkout.",
    overview: [
      "Artisan Leather Goods (Terracotta / Tanner & Co.) is a high-performance e-commerce platform built for artisanal leather craftsmanship, complete with multi-attribute filtering by category, color, and size.",
      "The architecture is powered by a NestJS REST API with Drizzle ORM and Neon PostgreSQL, supporting variant inventories, cart sessions, wishlist curation, and an administrative management dashboard.",
    ],
    features: [
      "Dynamic catalog with color/size matrix, stock tracking, and automated price overrides",
      "Transactional checkout pipeline with coupon validation and guest cart merging",
      "Admin portal for product catalog CRUD, order lifecycle tracking, and inventory alerts",
      "Customer reviews, wishlist curation, and cloud-hosted media assets",
    ],
    tech: ["React", "TanStack Start", "NestJS", "PostgreSQL (Neon)", "Drizzle ORM", "Tailwind CSS"],
    role: "Full-Stack Developer",
    year: "2025",
    image: artisan,
    demoUrl: "https://leatherknp.netlify.app",
    repoUrl: "https://github.com/amohdanas125/",
  },
  {
    slug: "ah-perfume",
    name: "AH Perfume",
    tagline: "Luxury Fragrance E-Commerce",
    blurb:
      "An immersive luxury fragrance storefront featuring refined editorial typography, scent note breakdowns, and a responsive shopping cart flow.",
    overview: [
      "AH Perfume is a high-end commercial fragrance web platform designed with refined typography, rich visual merchandising, and intuitive category navigation.",
      "Engineered for maximum loading speed and smooth interactions, the platform features a dynamic perfume catalog, olfactory breakdown notes (top, heart, base), and responsive cart checkout.",
    ],
    features: [
      "Curated luxury fragrance catalog with volume variant selectors and detailed scent notes",
      "Interactive cart drawer and smooth checkout inquiry flow",
      "High-speed, responsive visual experience with optimized asset loading",
      "Custom luxury aesthetic designed with modern responsive UI patterns",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "Netlify", "Vite"],
    role: "Frontend & UI/UX Developer",
    year: "2025",
    image: perfume,
    demoUrl: "https://perfumeknp.netlify.app/",
    repoUrl: "https://github.com/amohdanas125/",
  },
  {
    slug: "bizmatics",
    name: "BizmaticX",
    tagline: "Digital agency & media showcase platform",
    blurb:
      "A high-performance digital marketing platform featuring cinematic canvas scroll animations, dynamic video reel showcases, and Supabase cloud storage.",
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
    tech: ["JavaScript", "Supabase", "PostgreSQL", "GSAP", "HTML5 Canvas", "Tailwind CSS"],
    role: "Frontend & Cloud Developer",
    year: "2025",
    image: bizmatics,
    demoUrl: "https://bizmaticx.in/",
    repoUrl: "https://github.com/amohdanas125/",
  },
  {
    slug: "e-commerce-platform",
    name: "E-Commerce Fashion",
    tagline: "Full-stack storefront & admin dashboard",
    blurb:
      "A complete full-stack web application featuring product listings, persistent shopping cart, secure authentication, and an administrative inventory dashboard.",
    overview: [
      "A complete shopping flow: browse the catalogue, add items to a persistent cart and check out as an authenticated user.",
      "Admins get a separate dashboard to manage inventory, pricing, and customer orders.",
    ],
    features: [
      "Product catalogue with search, multi-factor filters, and detail pages",
      "Persistent cart and order history per user",
      "Role-based admin dashboard for inventory and orders",
      "REST API built with Express and MongoDB",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
    role: "Solo Full-Stack Developer",
    year: "2025",
    image: ecommerce,
    demoUrl: "https://e-com-x0p7.onrender.com",
    repoUrl: "https://github.com/amohdanas125/",
  },
  {
    slug: "wanderlust",
    name: "Wanderlust",
    tagline: "Travel stay & accommodation marketplace",
    blurb:
      "An interactive marketplace connecting travelers with hosts renting unique spaces across 220+ countries, with LocationIQ geocoding maps.",
    overview: [
      "Wanderlust lets hosts publish unique stays and lets travelers discover them by location, price, and category.",
      "Listings are geocoded through LocationIQ and rendered on an interactive map, with reviews, ratings, and full CRUD for owners.",
    ],
    features: [
      "Session-based authentication with owner-only listing controls",
      "Listing CRUD with image uploads and validation",
      "Geocoding and interactive map view of every stay",
      "Reviews and star ratings with server-side validation",
    ],
    tech: ["Node.js", "MongoDB", "Express", "EJS", "LocationIQ API"],
    role: "Solo Full-Stack Developer",
    year: "2025",
    image: wanderlust,
    demoUrl: "https://github.com/amohdanas125/",
    repoUrl: "https://github.com/amohdanas125/",
  },
  {
    slug: "portfolio",
    name: "This Portfolio",
    tagline: "Futuristic digital canvas & client hub",
    blurb:
      "A futuristic personal site with interactive particle animations, dark neon glassmorphism, 24/7 AI lead assistant, and smooth scroll reveals.",
    overview: [
      "A multi-page portfolio with a dark neon theme, animated particle canvas, glassmorphism surfaces, and an integrated AI chat assistant connected to a live Telegram pipeline.",
      "Every page ships its own SEO metadata, is fully responsive, keyboard accessible, and optimized for foreign client conversion.",
    ],
    features: [
      "Canvas particle background with reduced-motion support",
      "Integrated 24/7 AI chat widget with real-time Telegram lead alerts",
      "Scroll-reveal animations on every section",
      "Per-page SEO metadata and structured data",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "NestJS"],
    role: "Designer & Developer",
    year: "2026",
    image: portfolio,
    demoUrl: "https://anasdeveloper.in/",
    repoUrl: "https://github.com/amohdanas125/",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
