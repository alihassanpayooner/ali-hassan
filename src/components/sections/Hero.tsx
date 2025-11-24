import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full-Stack
              <br />
              <span className="text-muted-foreground">Developer</span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8 text-sm md:text-base font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="px-4 py-2 bg-secondary rounded-full">MERN Stack</span>
              <span className="px-4 py-2 bg-secondary rounded-full">Next.js & TypeScript</span>
              <span className="px-4 py-2 bg-secondary rounded-full">Python Django</span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I build modern, scalable, high-performance applications with clean architecture.
              Specializing in full-stack development, API design, and creating exceptional user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 group"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center gap-6 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:alihassanpayooner@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
