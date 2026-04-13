"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu,
  Users,
  GitBranch,
  Layers,
  Zap,
  Globe,
} from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

const features = [
  {
    icon: Cpu,
    title: "AI Design Engine",
    desc: "Describe your vision in plain language. Luminary generates production-ready components, layouts, and entire pages in seconds — all on-brand.",
    accent: "#ff4d6d",
  },
  {
    icon: Users,
    title: "Real-time Multiplayer",
    desc: "See every cursor, every change, every comment as it happens. Collaborate with your entire team without the usual sync headaches.",
    accent: "#ff8c42",
  },
  {
    icon: GitBranch,
    title: "Design Version Control",
    desc: "Branch your designs like you branch code. Experiment freely, merge confidently, and never lose work with infinite history.",
    accent: "#ffe14d",
  },
  {
    icon: Layers,
    title: "Token-based Design System",
    desc: "Every color, spacing, and typography decision lives in one place. Changes cascade instantly across all your components and screens.",
    accent: "#a78bfa",
  },
  {
    icon: Zap,
    title: "One-click Code Export",
    desc: "Export pixel-perfect React, Vue, or plain HTML+CSS. Our engine generates clean, production-grade code — not spaghetti.",
    accent: "#34d399",
  },
  {
    icon: Globe,
    title: "Global Asset CDN",
    desc: "Every image, icon, and asset is served from 250+ edge nodes worldwide. Sub-50ms load times, everywhere, always.",
    accent: "#60a5fa",
  },
];

function FeatureCard({
  f,
  i,
}: {
  f: (typeof features)[0];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (i % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: -2,
      }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        padding: "28px 24px",
        cursor: "default",
        transformStyle: "preserve-3d",
        perspective: 800,
        transition: "box-shadow 0.25s, border-color 0.25s",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = `0 16px 48px ${f.accent}22`;
        el.style.borderColor = `${f.accent}40`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      {/* Glow dot */}
      <div
        style={{
          position: "absolute",
          top: -30,
          right: -30,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${f.accent}20, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: `${f.accent}18`,
          border: `1px solid ${f.accent}35`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <f.icon size={20} color={f.accent} />
      </div>

      <h3
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: "#fff",
          margin: "0 0 10px",
          letterSpacing: "-0.02em",
        }}
      >
        {f.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {f.desc}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const isMobile = useIsMobile();
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  // Split headline into words for stagger
  const headline = "Everything your creative team needs";
  const words = headline.split(" ");

  return (
    <section
      id="features"
      style={{
        padding: isMobile ? "80px 20px" : "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 24,
            height: 1,
            background: "linear-gradient(90deg, transparent, #ff4d6d)",
          }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#ff4d6d",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
        >
          Features
        </span>
        <div
          style={{
            width: 24,
            height: 1,
            background: "linear-gradient(90deg, #ff4d6d, transparent)",
          }}
        />
      </motion.div>

      {/* Headline — word split */}
      <h2
        ref={titleRef}
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900,
          textAlign: "center",
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
          marginBottom: 16,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0 0.25em",
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: "inline-block",
              color: i >= 4 ? "transparent" : "#fff",
              background:
                i >= 4
                  ? "linear-gradient(135deg, #ff4d6d, #ff8c42)"
                  : undefined,
              WebkitBackgroundClip: i >= 4 ? "text" : undefined,
              WebkitTextFillColor:
                i >= 4 ? "transparent" : undefined,
              backgroundClip: i >= 4 ? "text" : undefined,
            }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "rgba(255,255,255,0.45)",
          maxWidth: 500,
          margin: "0 auto 64px",
          lineHeight: 1.65,
        }}
      >
        From AI generation to shipping — Luminary covers every step of your
        creative workflow without the tool-switching chaos.
      </motion.p>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {features.map((f, i) => (
          <FeatureCard key={f.title} f={f} i={i} />
        ))}
      </div>
    </section>
  );
}
