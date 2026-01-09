import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "elmurodovshuhrat977@gmail.com",
    href: "mailto:elmurodovshuhrat977@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+998 97 867 4112",
    href: "tel:+998978674112",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bukhara, Uzbekistan",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/geteducate", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/elmurodovs", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Shuhrat", label: "X / Twitter" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Let's Work <span className="gradient-text">Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Let's create something amazing together.
            </motion.p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300 block"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="glass-card p-6"
              >
                <h3 className="font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-border bg-secondary/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 flex flex-col justify-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind or just want to chat, 
                I'd love to hear from you.
              </p>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="mailto:elmurodovshuhrat977@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
