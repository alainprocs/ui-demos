"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AMBER = "#f59e0b";

// ── Staggered letter title ──────────────────────────────────────
function StaggerTitle({
  text,
  style,
}: {
  text: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{ display: "flex", flexWrap: "wrap", gap: 0, ...style }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: char === " " ? "inline-block" : "inline-block", width: char === " " ? "0.3em" : "auto" }}
        >
          {char === " " ? "\u00a0" : char}
        </motion.span>
      ))}
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Link your cloud accounts in 60 seconds. We support AWS, GCP, and Azure with zero-trust read-only permissions.",
    detail: "IAM role / OAuth handshake",
  },
  {
    num: "02",
    title: "Analyze",
    desc: "Orbita maps every resource, every cost, every pattern across your entire infrastructure graph in real time.",
    detail: "ML anomaly detection engine",
  },
  {
    num: "03",
    title: "Optimize",
    desc: "Automated recommendations execute with one click — or fully autonomously with policy guardrails you define.",
    detail: "One-click or auto-execute",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#050508",
        borderTop: "1px solid rgba(245,158,11,0.1)",
        borderBottom: "1px solid rgba(245,158,11,0.1)",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
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
          How It Works
        </motion.div>

        {/* Section title */}
        <div style={{ marginBottom: 80 }}>
          <StaggerTitle
            text="Three steps to zero waste."
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          />
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            position: "relative",
          }}
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 28,
              left: "16.67%",
              right: "16.67%",
              height: 1,
              background: `linear-gradient(90deg, ${AMBER}60, ${AMBER}20, ${AMBER}60)`,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "0 32px 0 0",
                position: "relative",
              }}
            >
              {/* Number bubble */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  border: `2px solid ${AMBER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Courier New', monospace",
                  fontWeight: 900,
                  fontSize: "1rem",
                  color: AMBER,
                  background: "#050508",
                  marginBottom: 28,
                  position: "relative",
                  zIndex: 1,
                  letterSpacing: "0.06em",
                }}
              >
                {step.num}
              </div>

              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </div>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                {step.desc}
              </p>

              <div
                style={{
                  fontSize: "0.7rem",
                  color: AMBER,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
                {step.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
