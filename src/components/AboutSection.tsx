import { motion } from "framer-motion";

const centerNode = { label: "Semoshwe\nMapokgole", x: 400, y: 260 };

const branches = [
  { label: "Passionate\nDeveloper who wants to contribute to meaningful projects", x: 120, y: 80 },
  { label: "Continuous\nLearner. Willing to learn and grow", x: 680, y: 80 },
  { label: "Problem\nSolver", x: 80, y: 420 },
  { label: "Team\nCollaborator. ", x: 700, y: 420 },
  { label: "Creative\nThinker and able to think outside the box", x: 400, y: 520 },
];

const getCurlyPath = (cx: number, cy: number, tx: number, ty: number) => {
  const mx = (cx + tx) / 2;
  const my = (cy + ty) / 2;
  const dx = tx - cx;
  const dy = ty - cy;
  const ox = -dy * 0.25;
  const oy = dx * 0.25;
  return `M ${cx} ${cy} Q ${mx + ox} ${my + oy}, ${tx} ${ty}`;
};

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-10">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="relative w-full" style={{ height: 560 }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 560"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {branches.map((b, i) => (
              <motion.path
                key={i}
                d={getCurlyPath(centerNode.x, centerNode.y, b.x, b.y)}
                stroke="hsl(25 35% 42%)"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              />
            ))}
          </svg>

          {/* Center node */}
          <div
            className="absolute rounded-full border-4 border-primary shadow-md overflow-hidden"
            style={{
              left: "50%",
              top: centerNode.y,
              transform: "translate(-50%, -50%)",
              width: 150,
              height: 150,
            }}
          >
            <img src="/IMG_7418.jpeg" alt="Semoshwe Mapokgole" className="w-full h-full object-cover" />
          </div>

          {/* Branch nodes */}
          {branches.map((b, i) => (
            <motion.div
              key={i}
              className="absolute bg-card border rounded-xl shadow-sm flex items-center justify-center text-center text-sm font-medium px-4 py-3 text-foreground"
              style={{
                left: `${(b.x / 800) * 100}%`,
                top: b.y,
                transform: "translate(-50%, -50%)",
                width: 140,
                whiteSpace: "pre-line",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              {b.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
