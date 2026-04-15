import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="bg-card rounded-2xl p-8 shadow-sm border">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm Semoshwe Mapokgole — a dedicated professional with a passion for innovation and excellence.
            I believe in continuous growth, collaboration, and building solutions that make a real impact.
            Feel free to explore my work and get in touch.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
