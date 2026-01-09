import { motion } from "framer-motion";
import { Code, Languages, Award, BookOpen } from "lucide-react";

const skills = [
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "HTML/CSS", level: 80 },
  { name: "Git & GitHub", level: 70 },
  { name: "SEO Copywriting", level: 75 },
];

const languages = [
  { name: "English", level: "Native/Bilingual" },
  { name: "Russian", level: "Professional" },
  { name: "German", level: "Professional" },
  { name: "Uzbek", level: "Native" },
];

const stats = [
  { icon: Code, value: "2+", label: "Years Experience" },
  { icon: Languages, value: "4", label: "Languages Spoken" },
  { icon: Award, value: "4", label: "Certifications" },
  { icon: BookOpen, value: "5+", label: "Projects Completed" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold"
            >
              Crafting Digital <span className="gradient-text">Solutions</span>
            </motion.h2>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate software developer based in Bukhara, Uzbekistan, focused on building 
                  meaningful and impactful digital solutions. My journey began with freelance copywriting 
                  and evolved into full-stack development.
                </p>
                <p>
                  I believe in consistency, patience, and long-term growth. My approach to work combines 
                  technical excellence with clear communication, ensuring projects are delivered on time 
                  and exceed expectations.
                </p>
                <p>
                  Currently working as a Junior Software Developer & Technical Assistant, I continue to 
                  expand my skills while contributing to innovative projects.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 glass-card p-8"
          >
            <h3 className="font-display text-2xl font-semibold mb-6 text-center">Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="font-semibold text-foreground">{lang.name}</div>
                  <div className="text-sm text-muted-foreground">{lang.level}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
