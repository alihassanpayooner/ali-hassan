import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Award, Code2, Coffee, Users } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years Experience", value: "5+" },
  { icon: Award, label: "Projects Completed", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full-Stack Developer with expertise in building modern, scalable web applications.
                My journey in software development has equipped me with a comprehensive understanding of both
                frontend and backend technologies.
              </p>
              <p>
                Specializing in the MERN stack, Next.js with TypeScript, and Python Django, I create solutions
                that not only meet technical requirements but also deliver exceptional user experiences. My approach
                combines clean code practices, efficient architecture, and a keen eye for design.
              </p>
              <p>
                Whether it's building complex APIs, developing responsive interfaces, or architecting scalable
                backend systems, I bring dedication and technical excellence to every project. I'm committed to
                continuous learning and staying updated with the latest industry trends and best practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
