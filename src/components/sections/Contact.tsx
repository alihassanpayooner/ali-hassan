import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alihassanpayooner@gmail.com",
    href: "mailto:alihassanpayooner@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bahawalpur, Pakistan ",
    href: null
  },
  {
    icon: Briefcase,
    label: "Upwork",
    value: "Available for Hire",
    href: "https://www.upwork.com/freelancers/~01eb8a49c7a23a965d"
  }
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="space-y-6"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.label} className="bg-card border-border">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-muted-foreground transition-colors"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="bg-foreground text-background border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Hire Me on Upwork
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-background/80">
                  Available for full-stack development projects, API design, and custom web solutions
                </p>
                <Button 
                  asChild
                  variant="secondary"
                  className="w-full bg-background text-foreground hover:bg-background/90"
                >
                  <a 
                    href="https://www.upwork.com/freelancers/~01eb8a49c7a23a965d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View Upwork Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="bg-background border-border focus:border-foreground"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-background border-border focus:border-foreground"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="bg-background border-border focus:border-foreground resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
