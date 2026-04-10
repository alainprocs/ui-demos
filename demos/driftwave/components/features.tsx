"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Video,
  MessageSquareQuote,
  Zap,
  Users,
  Lock,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "One-take walkthroughs",
    description:
      "Record your screen, camera, or both with a single click. No editing required — Driftwave auto-trims silence and highlights key moments.",
    accent: "cyan",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    border: "border-cyan-500/15",
  },
  {
    icon: MessageSquareQuote,
    title: "Timestamped comments",
    description:
      "Pin feedback to the exact frame that matters. No more \"at around 2 minutes\" — every comment links to the precise moment.",
    accent: "violet",
    gradient: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    border: "border-violet-500/15",
  },
  {
    icon: Zap,
    title: "AI-powered summaries",
    description:
      "Get an instant written summary of every video thread. Driftwave extracts decisions, action items, and open questions automatically.",
    accent: "amber",
    gradient: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    border: "border-amber-500/15",
  },
  {
    icon: Users,
    title: "Team workspaces",
    description:
      "Organize feedback by project, sprint, or design system. Invite unlimited viewers and control who can comment or record replies.",
    accent: "emerald",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/15",
  },
  {
    icon: Lock,
    title: "Figma & Notion sync",
    description:
      "Embed Driftwave threads directly in Figma files and Notion docs. Keep context where the work happens — no tab switching needed.",
    accent: "cyan",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    border: "border-cyan-500/15",
  },
  {
    icon: BarChart3,
    title: "Engagement analytics",
    description:
      "See exactly who watched your video, when they dropped off, and what they replayed. Make every walkthrough smarter than the last.",
    accent: "violet",
    gradient: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    border: "border-violet-500/15",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="features" className="relative py-32 px-4 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[#08090a]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, rgba(6,182,212,0.04) 50%, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
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
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#a78bfa",
            }}
          >
            Features
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-tight"
          >
            Everything you need to{" "}
            <span className="gradient-text-cyan-violet">
              kill the meeting culture.
            </span>
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            From first sketch to shipped feature, Driftwave gives your design
            team a single place to share context, gather feedback, and stay
            aligned — asynchronously.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className={`group relative p-7 rounded-2xl border ${feature.border} overflow-hidden cursor-default`}
                style={{
                  background: "rgba(15,17,23,0.7)",
                  backdropFilter: "blur(12px)",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                  borderColor:
                    feature.accent === "cyan"
                      ? "rgba(6,182,212,0.35)"
                      : feature.accent === "violet"
                      ? "rgba(139,92,246,0.35)"
                      : feature.accent === "amber"
                      ? "rgba(245,158,11,0.35)"
                      : "rgba(16,185,129,0.35)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.iconBg} mb-5`}
                  >
                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle corner glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-12 translate-x-12"
                  style={{
                    background:
                      feature.accent === "cyan"
                        ? "radial-gradient(circle, rgba(6,182,212,0.25), transparent)"
                        : feature.accent === "violet"
                        ? "radial-gradient(circle, rgba(139,92,246,0.25), transparent)"
                        : feature.accent === "amber"
                        ? "radial-gradient(circle, rgba(245,158,11,0.25), transparent)"
                        : "radial-gradient(circle, rgba(16,185,129,0.25), transparent)",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
