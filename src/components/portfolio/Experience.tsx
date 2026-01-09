import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Developer & Technical Assistant",
    company: "Current Position",
    period: "2024 - Present",
    location: "Bukhara, Uzbekistan",
    description: [
      "Assisting in developing and testing small software projects",
      "Writing and modifying Python scripts for automation and data processing",
      "Debugging code and improving existing logic under guidance",
      "Working with basic web technologies and software tools",
      "Documenting code and project progress clearly",
    ],
    current: true,
  },
  {
    title: "Freelance Copywriter & Software Developer",
    company: "Remote / Upwork",
    period: "2021 - 2023",
    location: "Remote",
    description: [
      "Created persuasive and informational content for international clients",
      "Wrote SEO-friendly copy for websites, blogs, and digital platforms",
      "Developed and maintained small software solutions using Python",
      "Assisted clients with automation scripts and basic backend logic",
      "Managed multiple projects simultaneously while meeting deadlines",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
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
              Career Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-4 h-4 rounded-full border-4 ${
                  exp.current 
                    ? "bg-primary border-primary animate-pulse" 
                    : "bg-background border-border"
                } ${index % 2 === 0 ? "left-0 md:right-0 md:left-auto -translate-x-1/2 md:translate-x-1/2" : "left-0 md:-translate-x-1/2"}`} />

                {/* Content Card */}
                <div className="ml-8 md:ml-0 glass-card p-6 group hover:border-primary/30 transition-all duration-300">
                  {/* Status Badge */}
                  {exp.current && (
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs text-primary font-medium">Current</span>
                    </div>
                  )}

                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className={`space-y-2 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
