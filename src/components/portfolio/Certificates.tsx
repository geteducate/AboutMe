import { motion } from "framer-motion";
import { Award, CheckCircle, Trophy } from "lucide-react";

const certificates = [
  {
    name: "IELTS 7.5",
    issuer: "British Council / IDP",
    year: "2025",
    icon: Award,
  },
  {
    name: "SAT 1490",
    issuer: "College Board",
    year: "2025",
    icon: Trophy,
  },
  {
    name: "Python Programming Fundamentals",
    issuer: "Online Course",
    year: "2023",
    icon: CheckCircle,
  },
  {
    name: "Git & GitHub Essentials",
    issuer: "Online Course",
    year: "2024",
    icon: CheckCircle,
  },
];

const achievements = [
  {
    title: "Freelance Project Completion",
    period: "2023 - Present",
    description: "Successfully completed multiple remote freelance projects as a Copywriter and Software Developer, delivering high-quality results to international clients while meeting deadlines and maintaining professional communication standards.",
  },
  {
    title: "Personal Portfolio Website Launch",
    period: "2024",
    description: "Designed, developed, and deployed a professional personal portfolio website to showcase software development projects and copywriting samples, demonstrating strong initiative, technical skills, and personal branding.",
  },
  {
    title: "SAT Excellence",
    period: "2025",
    description: "Achieved an exceptional SAT score of 1490, demonstrating strong analytical, mathematical, and verbal reasoning abilities that position for success in higher education.",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative bg-secondary/20">
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
              Recognition
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold"
            >
              Certificates & <span className="gradient-text">Achievements</span>
            </motion.h2>
          </div>

          {/* Certificates Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <span className="text-xs text-primary font-medium">{cert.year}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-display text-2xl font-semibold text-center mb-8">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-medium">{achievement.period}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
