import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-muted/40">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          My <span className="text-primary"> Capstone Projects</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Project 1 */}
          <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow group">
            <Folder className="w-10 h-10 text-primary mb-5" />
            <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
              Project One
            </h3>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              A brief description of this project and the technologies used. Replace this with your actual project details.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["React", "TypeScript"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/yourusername/project-one"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
            >
              View on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow group">
            <Folder className="w-10 h-10 text-primary mb-5" />
            <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
              AI Chatbot
            </h3>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              Created a AI Chatbot that provides real-time responses to user queries using the OpenAI API.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["React", "Node.js"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/MapokgoleSemoshwe/module-mate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
            >
              View on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow group">
            <Folder className="w-10 h-10 text-primary mb-5" />
            <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
              Content Generator
            </h3>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              A content generator that generates images, text and code using the OpenAI API.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["MongoDB", "Express"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/MapokgoleSemoshwe/starlight-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
            >
              View on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;