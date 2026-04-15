import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  { title: "Project One", description: "A brief description of this project and the technologies used.", tags: ["React", "TypeScript"] },
  { title: "Project Two", description: "A brief description of this project and the technologies used.", tags: ["Python", "API"] },
  { title: "Project Three", description: "A brief description of this project and the technologies used.", tags: ["UI/UX", "Figma"] },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-muted/40">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold mb-8">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-6 border hover:shadow-md transition-shadow group">
              <Folder className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
