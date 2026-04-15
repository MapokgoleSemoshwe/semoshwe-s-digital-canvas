import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "UI/UX Design", level: 65 },
  { name: "Communication", level: 90 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold mb-8">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {skills.map((s, i) => (
            <div key={s.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-accent overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
