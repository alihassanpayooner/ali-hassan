import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Award, Code2, Coffee, Users } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years Experience", value: "5+" },
  { icon: Award, label: "Projects Completed", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
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
                Hi, I’m <strong>𝗔𝗹𝗶</strong>, a results-driven Web &amp; Mobile
                developer who turns complex product ideas into fast, reliable,
                production apps. I combine <strong>𝗠𝗘𝗥𝗡</strong> +{" "}
                <strong>𝗡𝗲𝘅𝘁.𝗷𝘀</strong> expertise with <strong>𝗙𝗹𝘂𝘁𝘁𝗲𝗿</strong>{" "}
                &amp; <strong>𝗻𝗮𝘁𝗶𝘃𝗲 𝗔𝗻𝗱𝗿𝗼𝗶𝗱</strong> skills to solve three
                client priorities:
                <strong>𝘀𝗽𝗲𝗲𝗱</strong>, <strong>𝗰𝗼𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻</strong>, and{" "}
                <strong>𝘀𝗰𝗮𝗹𝗮𝗯𝗶𝗹𝗶𝘁𝘆</strong>.
              </p>

              <p>
                <strong>𝗪𝗵𝗮𝘁 𝗜 𝗱𝗲𝗹𝗶𝘃𝗲𝗿:</strong>
                <br />• <strong>𝗣𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻-𝗿𝗲𝗮𝗱𝘆 𝗪𝗲𝗯 𝗔𝗽𝗽𝘀</strong>: Next.js +
                React + TypeScript frontends with Node.js/Express APIs and
                MongoDB/Firebase backends.
                <br />• <strong>𝗛𝗶𝗴𝗵-𝗾𝘂𝗮𝗹𝗶𝘁𝘆 𝗠𝗼𝗯𝗶𝗹𝗲 𝗔𝗽𝗽𝘀</strong>: Flutter
                cross-platform apps or native Android (Java) with smooth UI,
                RecyclerView flows, and robust REST integration.
                <br />• <strong>𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 &amp; 𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻 𝗙𝗼𝗰𝘂𝘀</strong>:
                audits, critical-path optimizations, faster search &amp; filter,
                and checkout UX improvements that drive revenue.
              </p>
              <p>
                <strong>𝗧𝘆𝗽𝗶𝗰𝗮𝗹, 𝗺𝗲𝗮𝘀𝘂𝗿𝗮𝗯𝗹𝗲 𝗼𝘂𝘁𝗰𝗼𝗺𝗲𝘀:</strong>
                <br />
                • Load time reduction: 20–40% faster web apps after
                optimizations.
                <br />
                • Checkout conversion lift: 15–25% improvement from flow and UX
                fixes.
                <br />• Mobile engagement boost: 20–30% higher session metrics
                after UI &amp; navigation polish.
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
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
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
