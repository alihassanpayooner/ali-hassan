export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack MERN e-commerce application with payment integration, admin dashboard, and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    description: "Next.js TypeScript application with real-time analytics, data visualization, and multi-tenant architecture.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Social Media API",
    description: "RESTful API built with Django and Django REST Framework featuring authentication, real-time notifications, and media handling.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    techStack: ["Python", "Django", "PostgreSQL", "Redis", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Project Management Tool",
    description: "Collaborative project management platform with real-time updates, task tracking, and team communication features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "Next.js application integrating OpenAI APIs for content generation with user authentication and subscription management.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Stripe", "Supabase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Healthcare Management System",
    description: "Django-based healthcare platform with patient records, appointment scheduling, and secure HIPAA-compliant data handling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    techStack: ["Django", "Python", "PostgreSQL", "Celery", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  }
];
