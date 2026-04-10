"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const AMBER = "#f59e0b";

const testimonials = [
  {
    quote:
      "Orbita cut our AWS bill by 68% in the first month. The anomaly detection caught a misconfigured Lambda that was burning $40k/month — it paid for itself in day one.",
    name: "Sarah Chen",
    title: "CTO, Meridian Labs",
    logo: "ML",
    color: "#6366f1",
  },
  {
    quote:
      "We manage infrastructure for 200 clients. Orbita is the only platform that gives us a unified view across all of them with per-client P&L accuracy. It's indispensable.",
    name: "Marcus Osei",
    title: "VP Engineering, Stackify",
    logo: "ST",
    color: "#22c55e",
  },
  {
    quote:
      "The reserved instance optimizer alone saved us $800k this year. But what keeps us around is the team budget alerts — it's completely changed our engineering culture around costs.",
    name: "Priya Nair",
    title: "CEO, Velocit Health",
    logo: "VH",
    color: AMBER,
  },
];

function TestimonialCard({
  t,
  i,
}: {
  t: (typeof testimonials)[0];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderLeft: `3px solid ${AMBER}`,
        padding: "36px 32px",
        position: "relative",
      }}
    >
      {/* Quote mark */}
      <div
        style={{
          fontSize: "4rem",
          color: AMBER,
          lineHeight: 1,
          marginBottom: 16,
          fontFamily: "Georgia, serif",
          opacity: 0.4,
        }}
      >
        "
      </div>

      <p
        style={{
          fontSize: "1rem",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.7,
          marginBottom: 28,
          fontStyle: "italic",
        }}
      >
        {t.quote}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 42,
            height: 42,
            background: t.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
            fontWeight: 900,
            color: "#050508",
            letterSpacing: "0.05em",
            flexShrink: 0,
          }}
        >
          {t.logo}
        </div>
        <div>
          <div
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.04em",
            }}
          >
            {t.title}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      style={{
        background: "#050508",
        padding: isMobile ? "72px 20px" : "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.7rem",
            color: AMBER,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          What Teams Say
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.03em",
            marginBottom: isMobile ? 32 : 56,
          }}
        >
          Trusted by the teams building tomorrow.
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 16 : 16,
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
