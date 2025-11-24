import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { fadeInUp } from "@/lib/animations";


const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Ali Hassan. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
