export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  // githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Gridiron1880 Fan-Vote Platform, All-American College Football",
    description:
      "Built a fan-voting web application for Gridiron1880, enabling college football fans, alumni, and players to vote for Walter Camp All-Americans. Delivered a user-friendly interface for casting votes by player position, viewing live rankings, and comparing with expert analysis. Integrated real-time data and ranking APIs for player impact and All-American selection. Ensured secure voting, mobile responsiveness, and scalable architecture to handle high-traffic voting events.",
    image:
      "../assets/grid_iron.png",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    liveUrl: "https://www.votegridiron1880.com/",
    // githubUrl: "#",
  },
  {
    id: 2,
    title: "Almarai Recipes Web Platform",
    description:
      "Developed a dynamic web platform for Almarai’s “Recipes” section to showcase high-quality, brand-aligned cooking content. Implemented a responsive UI with recipe filtering by meal type, brand, and occasion. Built CMS tools for content editors to easily add and manage recipes. Optimized for SEO, performance, and usability to boost user engagement and dwell time. Delivered a scalable web solution promoting healthy cooking with Almarai products.",
    image:
      "../assets/almarai.png",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
    ],
    liveUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 3,
    title: "iGotPlans",
    description:
      "Developed a role-based platform for organizers, venue owners, and managers using React.js, Bootstrap, and Firebase. Integrated real-time scheduling, secure ticket purchases, and dynamic dashboards.",
    image:
      "../assets/igotplans.png",
    techStack: ["React", "Firebase", "Node.js", "Bootstrap"],
    liveUrl: "https://web.igotplans.co.uk/",
    // githubUrl: "#",
  },

  {
    id: 5,
    title: "Summz – AI-Powered Text Summarizer (GPT-4 + React)",
    description:
      "Built an AI-based summarization app using React.js, Tailwind CSS, and GPT-4 API. Designed a minimal interface with text input/upload, summary output, and responsive layout. Deployed via Netlify for instant access.",
    image:
      "../assets/ai-aumz.png",
    techStack: ["Next.js", "TypeScript", "OpenAI API"],
    liveUrl: "https://ai-ar-summarizer.netlify.app/",
    // githubUrl: "#",
  },
  {
    id: 6,
    title: "JustTap",
    description:
      "Created a scalable storefront using React.js and Firebase for authentication, Firestore DB, and order management. Used Redux for state handling and cart logic.",
    image:
      "../assets/juts_tap.png",
    techStack: ["React", "Payment Integration", "Node.js", "Firebase"],
    liveUrl: "https://shop.justtap.us/",
    // githubUrl: "#",
  },
  {
    id: 4,
    title: "Utube – Video Browsing & Playback App ",
    description:
      "Developed a clean React.js UI replicating core YouTube features: video grid, search, and playback view. Deployed with Vercel for production-grade hosting.",
    image:
      "../assets/utube.png",
    techStack: ["React", "Node.js", "MongoDB", "Redux", "Api Integration"],
    liveUrl: "https://utube-nine.vercel.app/",
    // githubUrl: "#",
  },
];
