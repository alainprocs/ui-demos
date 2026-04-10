"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const AMBER = "#f59e0b";

function BigCounter({
  to,
  prefix = "",
  suffix = "",
  label,
  duration = 2000,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to * 10) / 10);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  const display =
    to % 1 !== 0 ? value.toFixed(1) : Math.round(value).toString();

  return (
    <div
      ref={ref}
      style={{ textAlign: "center", padding: "60px 20px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            color: "#fff",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          <span style={{ color: AMBER }}>{prefix}</span>
          {display}
          <span style={{ color: AMBER }}>{suffix}</span>
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {label}
        </div>
      </motion.div>
    </div>
  );
}

export default function Numbers() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const isMobile = useIsMobile();

  const items = [
    { to: 47, prefix: "$", suffix: "M+", label: "Cloud spend optimized" },
    { to: 2400, suffix: "+", label: "Engineering teams" },
    { to: 73, suffix: "%", label: "Average cost reduction" },
    { to: 4.9, suffix: "/5", label: "Customer satisfaction" },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: "#050508",
        borderTop: "1px solid rgba(245,158,11,0.08)",
        borderBottom: "1px solid rgba(245,158,11,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background amber grid glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(245,158,11,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          paddingTop: 80,
          fontSize: "0.7rem",
          color: AMBER,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        By The Numbers
      </motion.div>

      {/* Grid of numbers */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          borderLeft: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            style={{
              borderRight: "1px solid rgba(255,255,255,0.04)",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <BigCounter
              key={item.label}
              {...item}
              duration={1600 + i * 200}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
