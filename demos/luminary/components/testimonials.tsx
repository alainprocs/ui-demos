"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Head of Design, Veritas",
    avatar: "PM",
    avatarColor: "#ff4d6d",
    quote:
      "Luminary replaced four separate tools for our team. The AI generation alone saves us 12 hours a week per designer. Genuinely jaw-dropping.",
    stars: 5,
  },
  {
    name: "Carlos Rueda",
    role: "Founding Designer, Orion",
    avatar: "CR",
    avatarColor: "#ff8c42",
    quote:
      "I shipped our entire rebrand in two days using Luminary. What would have taken a month of back-and-forth happened in one fluid sprint.",
    stars: 5,
  },
  {
    name: "Aisha Williams",
    role: "Creative Director, Bloom",
    avatar: "AW",
    avatarColor: "#ffe14d",
    quote:
      "The version control alone is worth it. No more 'final_v3_REAL_final.fig' — just clean branches and instant merges.",
    stars: 5,
  },
  {
    name: "Tom Nakamura",
    role: "Product Designer, Scale",
    avatar: "TN",
    avatarColor: "#a78bfa",
    quote:
      "Real-time collaboration in Luminary is miles ahead of anything else. Zero lag, zero conflicts. It just works.",
    stars: 5,
  },
  {
    name: "Elena Santos",
    role: "Design Lead, Frost",
    avatar: "ES",
    avatarColor: "#34d399",
    quote:
      "The code export is clean enough that our engineers actually use it. That never happened with Figma. Never.",
    stars: 5,
  },
  {
    name: "James Wright",
    role: "UI Engineer, Pulse",
    avatar: "JW",
    avatarColor: "#60a5fa",
    quote:
      "As an engineer-designer hybrid, Luminary speaks my language. Tokens, git-style branching, clean exports. Chef's kiss.",
    stars: 5,
  },
];

function TestimonialCard({
  t,
  i,
}: {
  t: (typeof testimonials)[0];
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (i % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        cursor: "default",
        transition: "box-shadow 0.25s, border-color 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = `0 12px 40px ${t.avatarColor}20`;
        el.style.borderColor = `${t.avatarColor}35`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: t.stars }).map((_, si) => (
          <Star key={si} size={13} color="#ff8c42" fill="#ff8c42" />
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.7,
          margin: 0,
          flex: 1,
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: `${t.avatarColor}25`,
            border: `1px solid ${t.avatarColor}50`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 800,
            color: t.avatarColor,
            flexShrink: 0,
          }}
        >
          {t.avatar}
        </div>
        <div>
          <div
            style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {t.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["inset(0 0 60% 0 round 16px)", "inset(0 0 0% 0 round 0px)"]
  );

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "80px 20px" : "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, transparent, #ff8c42)" }} />
        <span style={{ fontSize: 12, fontWeight: 700, color: "#ff8c42", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          Testimonials
        </span>
        <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, #ff8c42, transparent)" }} />
      </motion.div>

      {/* Headline with clip-path reveal */}
      <motion.h2
        style={{
          fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          fontWeight: 900,
          textAlign: "center",
          letterSpacing: "-0.04em",
          color: "#fff",
          marginBottom: 56,
          clipPath,
        }}
      >
        Loved by{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #ff8c42, #ffe14d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          30,000+ designers
        </span>
      </motion.h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} i={i} />
        ))}
      </div>
    </section>
  );
}
