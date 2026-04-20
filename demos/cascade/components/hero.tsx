"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const nodes = [
  { label: "Trigger", x: "8%", y: "38%", color: "#10b981" },
  { label: "Filter", x: "28%", y: "20%", color: "#34d399" },
  { label: "AI Step", x: "28%", y: "56%", color: "#6ee7b7" },
  { label: "Notify", x: "50%", y: "38%", color: "#10b981" },
  { label: "CRM", x: "70%", y: "22%", color: "#34d399" },
  { label: "Slack", x: "70%", y: "54%", color: "#6ee7b7" },
  { label: "Done ✓", x: "88%", y: "38%", color: "#10b981" },
];

const edges = [
  [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0" style={{ background: "#04080a" }} />

      {/* Glow blobs */}
      <motion.div
        className="absolute top-[-5%] left-[15%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.13) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.07, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Workflow graph */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.2 }}
      >
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          {edges.map(([from, to], i) => {
            const a = nodes[from];
            const b = nodes[to];
            return (
              <motion.line
                key={i}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="rgba(16,185,129,0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.12, duration: 0.6 }}
              />
            );
          })}
        </svg>
        {nodes.map((n, i) => (
          <motion.div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: n.x, top: n.y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.1, type: "spring", stiffness: 260, damping: 20 }}
          >
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap"
              style={{
                background: "rgba(4,10,8,0.85)",
                border: `1px solid ${n.color}40`,
                color: n.color,
                boxShadow: `0 0 14px ${n.color}20`,
              }}
            >
              {n.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#6ee7b7" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-native workflow automation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          <span className="text-white">Automate every</span>
          <br />
          <span style={{
            background: "linear-gradient(90deg, #10b981 0%, #34d399 50%, #10b981 100%)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            workflow.
          </span>
          <br />
          <span className="text-white">Ship twice as fast.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
        >
          Cascade connects your entire stack — CRM, Slack, email, databases — and lets
          AI build the automations for you. Describe what you need in plain English. Done.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              boxShadow: "0 4px 24px rgba(16,185,129,0.35)",
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 40px rgba(16,185,129,0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span>Build your first flow</span>
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            See live demo →
          </a>
        </motion.div>

        {/* Proof */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            "No credit card required",
            "Setup in under 5 minutes",
            "SOC 2 Type II certified",
          ].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-sm text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              {t}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#04080a] to-transparent pointer-events-none" />
    </section>
  );
}
