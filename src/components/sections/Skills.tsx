import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  Frontend: [
    "React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", 
    "Framer Motion", "Redux", "React Query", "HTML5", "CSS3"
  ],
  Backend: [
    "Node.js", "Express.js", "Django", "Django REST Framework", 
    "REST APIs", "GraphQL", "WebSockets", "JWT Authentication"
  ],
  Databases: [
    "MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase", "Prisma"
  ],
  Tools: [
    "Git", "Docker", "Linux", "Vercel", "AWS", "Nginx", 
    "CI/CD", "Postman", "VS Code"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, full-stack applications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="secondary"
                      className="text-sm py-2 px-4 bg-secondary hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
