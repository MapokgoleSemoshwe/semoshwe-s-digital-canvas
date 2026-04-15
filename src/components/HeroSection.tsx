import { motion } from "framer-motion";
import { User } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-20" style={{ background: "var(--hero-gradient)" }}>
    <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
      {/* Text */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-muted-foreground text-lg mb-2">Welcome</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hello, my name is{" "}
          <span className="text-primary">Semoshwe Mapokgole</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-md">
          A passionate professional dedicated to crafting meaningful digital experiences.
        </p>
      </motion.div>

      {/* Photo placeholder */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl bg-accent/60 border-2 border-primary/20 flex flex-col items-center justify-center gap-3">
          <User className="w-16 h-16 text-primary/40" />
          <span className="text-muted-foreground text-sm">Your photo here</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
