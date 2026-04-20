import { useState } from "react";
import { motion } from "framer-motion";

type Category = "All" | "Frontend" | "Backend" | "Database";

interface Skill {
  name: string;
  level: number;
  category: Category[];
}

const skills: Skill[] = [
  { name: "Java", level: 50, category: ["Backend"] },
  { name: "React", level: 80, category: ["Frontend"] },
  { name: "HTML", level: 75, category: ["Frontend"] },
  { name: "Python", level: 70, category: ["Backend"] },
  { name: "Flutter", level: 65, category: ["Backend"] },
  { name: "SQL", level: 70, category: ["Database"] },
  { name: "Azure", level: 60, category: ["Database"] },
  { name: "UI/UX Design", level: 65, category: ["Frontend"] },
  { name: "CSS", level: 70, category: ["Frontend"] },
];

const categories: Category[] = ["All", "Frontend", "Backend", "Database"];

const SkillsSection = () => {
  const [filter, setFilter] = useState<Category>("All");

  const filtered = filter === "All" ? skills : skills.filter((s) => s.category.includes(filter));

  return (
    <section id="skills" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-primary/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((s, i) => (
              <motion.div
                key={s.name}
                className="bg-card rounded-xl border p-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                layout
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">{s.name}</span>
                  <span className="text-xs text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-accent overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
