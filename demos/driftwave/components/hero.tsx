"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const companyLogos = [
  "Figma",
  "Notion",
  "Linear",
  "Vercel",
  "Stripe",
  "Loom",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#08090a]" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Radial glow blobs */}
      <motion.div
        className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating decorative cards — video thumbnails */}
      <motion.div
        className="absolute left-[4%] top-[28%] w-52 rounded-xl overflow-hidden hidden lg:block"
        style={{
          background: "rgba(15,17,23,0.9)",
          border: "1px solid rgba(6,182,212,0.25)",
          boxShadow: "0 8px 32px rgba(6,182,212,0.15)",
        }}
        initial={{ opacity: 0, x: -40, rotate: -6 }}
        animate={{ opacity: 1, x: 0, rotate: -6 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-900/50 to-violet-900/50 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400" />
              <span className="text-xs text-slate-400">Sarah K.</span>
            </div>
            <div className="h-2 bg-slate-700/50 rounded mb-1.5 w-3/4" />
            <div className="h-2 bg-slate-700/30 rounded w-1/2" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-[4%] top-[22%] w-52 rounded-xl overflow-hidden hidden lg:block"
        style={{
          background: "rgba(15,17,23,0.9)",
          border: "1px solid rgba(139,92,246,0.25)",
          boxShadow: "0 8px 32px rgba(139,92,246,0.15)",
        }}
        initial={{ opacity: 0, x: 40, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="aspect-video bg-gradient-to-br from-violet-900/50 to-cyan-900/50 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-pink-400" />
              <span className="text-xs text-slate-400">Marcus T.</span>
            </div>
            <div className="h-2 bg-slate-700/50 rounded mb-1.5 w-2/3" />
            <div className="h-2 bg-slate-700/30 rounded w-3/4" />
            <div className="mt-2 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-emerald-400">3 replies</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating comment bubble */}
      <motion.div
        className="absolute right-[8%] bottom-[30%] hidden xl:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="bg-violet-500/20 border border-violet-500/30 rounded-2xl rounded-br-none px-3 py-2 max-w-[180px]"
        >
          <p className="text-xs text-violet-200">
            "Love the new onboarding flow — the micro-animations are 🔥"
          </p>
          <p className="text-[10px] text-violet-400 mt-1">Priya · 2m ago</p>
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.25)",
              color: "#67e8f9",
            }}
            whileHover={{ scale: 1.03 }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Async-first collaboration, reimagined</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          <span className="text-white">Design feedback</span>
          <br />
          <span className="gradient-text-cyan-violet">without the chaos.</span>
          <br />
          <span className="text-white">Ship without meetings.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
        >
          Driftwave replaces endless standups with rich async video threads.
          Record walkthroughs, pin timestamped comments, collect precise
          feedback — and watch your team move twice as fast.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <motion.a
            href="#"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
              boxShadow: "0 4px 24px rgba(6,182,212,0.35)",
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 40px rgba(6,182,212,0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span>Start for free</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>

          <motion.a
            href="#"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-300 hover:text-white transition-colors"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(255,255,255,0.07)",
              borderColor: "rgba(255,255,255,0.18)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Play className="w-4 h-4" />
            <span>Watch demo</span>
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"].map(
                (color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#08090a]"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
            <span className="text-sm text-slate-400">
              <span className="text-white font-semibold">500+</span> teams already onboard
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <span className="text-xs text-slate-600">Trusted by teams at</span>
            {companyLogos.map((name) => (
              <span
                key={name}
                className="text-xs font-semibold text-slate-500 tracking-wide uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08090a] to-transparent pointer-events-none" />
    </section>
  );
}
