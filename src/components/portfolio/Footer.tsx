import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-secondary/10">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="font-display font-bold">
              <span className="gradient-text">Shuhrat Elmurodov</span>
            </span>
            <span className="hidden sm:inline">• All rights reserved</span>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>in Uzbekistan</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/geteducate", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/elmurodovs", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/Shuhrat", label: "X" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
