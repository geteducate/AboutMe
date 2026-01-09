import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Job Hiring & Recruitment Platform",
    description: "A comprehensive platform designed to streamline job matching between employers and job seekers. Features include job posting, application submission, and user interaction capabilities.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    features: [
      "Job posting and management",
      "Application submission system",
      "User profile management",
      "Clean, scalable architecture",
    ],
    gradient: "from-primary/20 to-accent/20",
    year: "2023 - Present",
  },
  {
    title: "Personal Portfolio Website",
    description: "A professional portfolio website showcasing software development projects and copywriting work with responsive design and performance optimization.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive design",
      "Clean UI/UX",
      "Performance optimized",
      "Mobile-first approach",
    ],
    gradient: "from-accent/20 to-primary/20",
    year: "2024",
  },
  {
    title: "Python Automation Scripts",
    description: "A collection of Python scripts developed to automate repetitive tasks, featuring file handling, data processing, and workflow optimization.",
    tech: ["Python"],
    features: [
      "File handling automation",
      "Data processing pipelines",
      "Logic optimization",
      "Workflow efficiency",
    ],
    gradient: "from-primary/20 to-accent/20",
    year: "2025",
  },
  {
    title: "Web Development Practice Projects",
    description: "Various web development projects focused on building skills in frontend technologies with clean code practices and user-friendly designs.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Clean code structure",
      "Responsive layouts",
      "User-friendly design",
      "Debugging practice",
    ],
    gradient: "from-accent/20 to-primary/20",
    year: "Ongoing",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
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
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold"
            >
              Personal <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="glass-card h-full p-6 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Code2 className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button variant="heroOutline" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
