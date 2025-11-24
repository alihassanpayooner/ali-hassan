import { Code, Database, Layers, Rocket, Server, Workflow } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern technologies like MERN stack, ensuring scalable and maintainable code.",
    icon: Code
  },
  {
    id: 2,
    title: "MERN Applications",
    description: "Building robust applications with MongoDB, Express.js, React, and Node.js, optimized for performance and user experience.",
    icon: Layers
  },
  {
    id: 3,
    title: "Next.js + TypeScript Apps",
    description: "Creating SEO-friendly, server-rendered applications with Next.js and TypeScript for enterprise-grade solutions.",
    icon: Rocket
  },
  {
    id: 4,
    title: "Django REST API Development",
    description: "Developing secure, scalable REST APIs with Django and Django REST Framework, including authentication and authorization.",
    icon: Server
  },
  {
    id: 5,
    title: "UI/UX & Frontend Engineering",
    description: "Crafting beautiful, responsive user interfaces with React, TailwindCSS, and modern animation libraries.",
    icon: Workflow
  },
  {
    id: 6,
    title: "API Integration & Backend Architecture",
    description: "Designing and implementing clean backend architectures, third-party API integrations, and database optimization.",
    icon: Database
  }
];
