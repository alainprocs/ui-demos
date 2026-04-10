"use client";

import { useRef, useCallback } from "react";
import { motion, useInView, useSpring } from "framer-motion";

const AMBER = "#f59e0b";

function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = ref.current!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        x.set(dx * 0.3);
        y.set(dy * 0.3);
      }
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{
        x,
        y,
        background: "#050508",
        color: "#fff",
        border: "none",
        fontWeight: 800,
        fontSize: "0.85rem",
        letterSpacing: "0.08em",
        padding: "16px 32px",
        cursor: "pointer",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,0,0,0.4)" }}
    >
      {children}
    </motion.button>
  );
}

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: AMBER,
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background noise texture effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 48px,
            rgba(0,0,0,0.04) 48px,
            rgba(0,0,0,0.04) 49px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 48px,
            rgba(0,0,0,0.04) 48px,
            rgba(0,0,0,0.04) 49px
          )`,
          pointerEvents: "none",
        }}
      />

      {/* Large decorative text */}
      <div
        style={{
          position: "absolute",
          bottom: -40,
          right: -20,
          fontSize: "clamp(6rem, 15vw, 14rem)",
          fontWeight: 900,
          color: "rgba(0,0,0,0.06)",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        ORBITA
      </div>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.7rem",
            color: "rgba(0,0,0,0.5)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Ready to optimize?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            fontWeight: 900,
            color: "#050508",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            marginBottom: 20,
          }}
        >
          Your cloud bill<br />is too high.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            fontSize: "1.1rem",
            color: "rgba(0,0,0,0.6)",
            marginBottom: 48,
            fontWeight: 500,
          }}
        >
          Join 2,400+ teams already saving. No credit card required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            display: "flex",
            gap: 0,
            maxWidth: 520,
          }}
        >
          <input
            type="email"
            placeholder="your@company.com"
            style={{
              flex: 1,
              padding: "16px 20px",
              border: "none",
              background: "rgba(0,0,0,0.12)",
              color: "#050508",
              fontSize: "0.9rem",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          <MagneticButton>Start saving</MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: 16,
            fontSize: "0.75rem",
            color: "rgba(0,0,0,0.45)",
            letterSpacing: "0.04em",
          }}
        >
          Average setup time: 4 minutes. Average first-month savings: $18,400.
        </motion.div>
      </div>
    </section>
  );
}
