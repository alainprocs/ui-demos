"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We cut our weekly design review meeting from 90 minutes to zero. Now our entire team does async video threads in Driftwave and we move so much faster. I genuinely don't know how we survived before this.",
    name: "Priya Nair",
    role: "Head of Design",
    company: "Luminary Studio",
    initials: "PN",
    avatarGradient: "from-cyan-400 to-violet-500",
    accentColor: "rgba(6,182,212,0.2)",
    borderColor: "rgba(6,182,212,0.15)",
  },
  {
    quote:
      "The timestamped comments are a revelation. Instead of saying 'somewhere around the middle of the video', I can just click the exact frame and leave my note. The PM and engineers always know exactly what I'm referring to.",
    name: "Marcus Thiébault",
    role: "Senior Product Designer",
    company: "Orbit Systems",
    initials: "MT",
    avatarGradient: "from-violet-400 to-pink-500",
    accentColor: "rgba(139,92,246,0.2)",
    borderColor: "rgba(139,92,246,0.15)",
  },
  {
    quote:
      "Driftwave's AI summaries save me 30 minutes a day. I can watch a 5-minute walkthrough, skim the summary for decisions and action items, and be done in 60 seconds. It's the async tool our distributed team actually needed.",
    name: "Sarah Kowalski",
    role: "VP of Product",
    company: "Decker AI",
    initials: "SK",
    avatarGradient: "from-emerald-400 to-cyan-500",
    accentColor: "rgba(16,185,129,0.2)",
    borderColor: "rgba(16,185,129,0.15)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#08090a]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.06), transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={headerVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.25)",
              color: "#67e8f9",
            }}
          >
            Testimonials
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5"
          >
            Teams that{" "}
            <span className="gradient-text-cyan-violet">drift together</span>,
            ship together.
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-lg text-slate-400 max-w-xl"
          >
            Over 500 design teams have replaced synchronous meetings with
            Driftwave threads — and they're not going back.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="group relative p-7 rounded-2xl flex flex-col gap-5"
              style={{
                background: "rgba(15,17,23,0.8)",
                border: `1px solid ${t.borderColor}`,
                backdropFilter: "blur(12px)",
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 16px 48px ${t.accentColor}`,
                borderColor: t.borderColor.replace("0.15", "0.35"),
              }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${t.accentColor}, transparent)`,
                }}
              />

              <div className="relative z-10 flex flex-col gap-5 h-full">
                {/* Quote icon */}
                <Quote
                  className="w-8 h-8 opacity-30"
                  style={{
                    color: t.borderColor.includes("6,182")
                      ? "#06b6d4"
                      : t.borderColor.includes("139,92")
                      ? "#8b5cf6"
                      : "#10b981",
                  }}
                />

                {/* Quote text */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "73%", label: "reduction in design review meetings" },
            { value: "2.4×", label: "faster feedback loops on average" },
            { value: "500+", label: "teams across 42 countries" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span className="text-4xl font-bold gradient-text-cyan-violet">
                {stat.value}
              </span>
              <span className="text-sm text-slate-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
