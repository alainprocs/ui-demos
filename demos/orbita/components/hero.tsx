"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const AMBER = "#f59e0b";
const SCRAMBLE_CHARS = "!@#$%^&*ABCDEFabcdef0123456789";

// ── Scramble text hook ──────────────────────────────────────────
function useScramble(target: string, startDelay = 400) {
  const [display, setDisplay] = useState(target);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const totalFrames = target.length * 6;
    let raf: ReturnType<typeof setTimeout>;

    const delay = setTimeout(() => {
      const tick = () => {
        frame++;
        const progress = frame / totalFrames;
        setDisplay(
          target
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              const revealAt = (i / target.length) * 0.8;
              if (progress > revealAt + 0.1) return char;
              return SCRAMBLE_CHARS[
                Math.floor(Math.random() * SCRAMBLE_CHARS.length)
              ];
            })
            .join("")
        );
        if (frame < totalFrames) {
          raf = setTimeout(tick, 40);
        } else {
          setDisplay(target);
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(delay);
      clearTimeout(raf);
    };
  }, [target, startDelay]);

  return { display, done };
}

// ── Animated counter ────────────────────────────────────────────
function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1800,
  label,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * to));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
          fontWeight: 900,
          color: AMBER,
          fontFamily: "'Courier New', monospace",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {prefix}
        {value}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.45)",
          marginTop: 6,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ── Circuit grid background ─────────────────────────────────────
function CircuitGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const CELL = 48;
    const cells: { x: number; y: number; alpha: number; decay: number }[] = [];

    const cols = Math.ceil(canvas.width / CELL) + 1;
    const rows = Math.ceil(canvas.height / CELL) + 1;

    // Randomly light cells
    const interval = setInterval(() => {
      for (let k = 0; k < 3; k++) {
        cells.push({
          x: Math.floor(Math.random() * cols) * CELL,
          y: Math.floor(Math.random() * rows) * CELL,
          alpha: 0.6 + Math.random() * 0.4,
          decay: 0.015 + Math.random() * 0.025,
        });
      }
    }, 120);

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = "rgba(245,158,11,0.06)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += CELL) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += CELL) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Glowing cells
      for (let i = cells.length - 1; i >= 0; i--) {
        const c = cells[i];
        ctx.fillStyle = `rgba(245,158,11,${c.alpha * 0.12})`;
        ctx.fillRect(c.x, c.y, CELL, CELL);
        ctx.strokeStyle = `rgba(245,158,11,${c.alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(c.x, c.y, CELL, CELL);
        c.alpha -= c.decay;
        if (c.alpha <= 0) cells.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

// ── SVG cost curve ──────────────────────────────────────────────
function CostCurve() {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDrawn(true);
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const d =
    "M 0 10 C 40 10, 80 12, 120 18 C 160 24, 180 35, 220 52 C 260 70, 290 68, 330 55 C 370 40, 390 20, 430 8 C 470 -4, 490 2, 520 0";

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", maxWidth: 560 }}
    >
      <div
        style={{
          fontSize: "0.65rem",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 6,
          fontFamily: "monospace",
        }}
      >
        Cloud spend over time
      </div>
      <svg
        viewBox="0 0 520 80"
        fill="none"
        style={{ width: "100%", overflow: "visible" }}
      >
        {/* Glow */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="60%" stopColor={AMBER} />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path
          d={`${d} L 520 80 L 0 80 Z`}
          fill="url(#lineGrad)"
          opacity={drawn ? 0.06 : 0}
          style={{ transition: "opacity 1.2s ease 0.8s" }}
        />
        {/* Line */}
        <path
          ref={pathRef}
          d={d}
          stroke="url(#lineGrad)"
          strokeWidth={2.5}
          filter="url(#glow)"
          strokeDasharray={length}
          strokeDashoffset={drawn ? 0 : length}
          style={{ transition: `stroke-dashoffset 1.4s ease ${drawn ? "0.2s" : "0s"}` }}
        />
        {/* Dot at end */}
        <circle
          cx={520}
          cy={0}
          r={4}
          fill="#22c55e"
          filter="url(#glow)"
          opacity={drawn ? 1 : 0}
          style={{ transition: "opacity 0.4s ease 1.4s" }}
        />
        {/* Labels */}
        <text x={0} y={78} fill="rgba(255,255,255,0.3)" fontSize={9} fontFamily="monospace">
          Before Orbita
        </text>
        <text x={420} y={78} fill="#22c55e" fontSize={9} fontFamily="monospace" opacity={drawn ? 1 : 0} style={{ transition: "opacity 0.4s ease 1.4s" }}>
          After
        </text>
      </svg>
    </div>
  );
}

// ── Savings ticker ──────────────────────────────────────────────
function SavingsTicker() {
  const [val, setVal] = useState(12847293);
  const isMobile = useIsMobile();

  useEffect(() => {
    const id = setInterval(() => {
      setVal((v) => v + Math.floor(Math.random() * 420 + 80));
    }, 300);
    return () => clearInterval(id);
  }, []);

  const formatted = val.toLocaleString("en-US");

  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        fontSize: isMobile ? "0.72rem" : "0.85rem",
        color: "#4ade80",
        background: "rgba(74,222,128,0.06)",
        border: "1px solid rgba(74,222,128,0.2)",
        padding: isMobile ? "10px 12px" : "10px 18px",
        display: "flex",
        flexWrap: isMobile ? "wrap" : "nowrap",
        alignItems: "center",
        gap: 6,
        letterSpacing: "0.04em",
      }}
    >
      <span style={{ color: AMBER, fontWeight: 700 }}>&gt;</span>
      <span style={{ color: "rgba(255,255,255,0.5)" }}>LIVE:</span>
      <span style={{ color: "#4ade80", fontWeight: 700 }}>${formatted}</span>
      <span style={{ color: "rgba(255,255,255,0.5)" }}>saved for customers</span>
      <span style={{ color: "#4ade80", animation: "pulse 1s ease-in-out infinite" }}>↑</span>
    </div>
  );
}

// ── Magnetic button ─────────────────────────────────────────────
function MagneticButton({
  children,
  filled,
}: {
  children: React.ReactNode;
  filled?: boolean;
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
        x.set(dx * 0.35);
        y.set(dy * 0.35);
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
        background: filled ? AMBER : "transparent",
        color: filled ? "#050508" : "#fff",
        border: filled ? "none" : "1px solid rgba(255,255,255,0.25)",
        fontWeight: 700,
        fontSize: "0.85rem",
        letterSpacing: "0.08em",
        padding: "14px 28px",
        cursor: "pointer",
        textTransform: "uppercase",
        display: "inline-block",
        transition: "box-shadow 0.2s, border-color 0.2s",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={
        filled
          ? { boxShadow: `0 0 32px ${AMBER}66`, scale: 1.02 }
          : { borderColor: "rgba(255,255,255,0.6)", scale: 1.02 }
      }
    >
      {children}
    </motion.button>
  );
}

// ── Hero ────────────────────────────────────────────────────────
export default function Hero() {
  const line1 = useScramble("Stop paying for idle cloud.");
  const line2 = useScramble("Start paying for results.", 2400);
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#050508",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 64,
      }}
    >
      {/* Circuit grid */}
      <CircuitGrid />

      {/* Amber glow at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: 300,
          background: `radial-gradient(ellipse at bottom, ${AMBER}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "60px 20px 48px" : "80px 24px 60px",
          width: "100%",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.7rem",
            color: AMBER,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: AMBER,
              display: "inline-block",
              boxShadow: `0 0 8px ${AMBER}`,
            }}
          />
          AI Infrastructure Intelligence
        </motion.div>

        {/* Headline — scramble effect */}
        <div style={{ marginBottom: 16 }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: "clamp(2rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#fff",
              fontFamily: "'Courier New', monospace",
              margin: 0,
            }}
          >
            {line1.display}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            style={{
              fontSize: "clamp(2rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: AMBER,
              fontFamily: "'Courier New', monospace",
              margin: 0,
            }}
          >
            {line2.display}
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: isMobile ? "0.95rem" : "1.1rem",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            lineHeight: 1.65,
            marginBottom: 36,
          }}
        >
          Orbita analyzes your entire AWS/GCP/Azure spend in real time and
          eliminates waste automatically.{" "}
          <span style={{ color: "rgba(255,255,255,0.85)" }}>
            Zero config. Instant savings.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 32,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <MagneticButton filled>Start saving now</MagneticButton>
          <MagneticButton>See how it works</MagneticButton>
        </motion.div>

        {/* Savings ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginBottom: 60 }}
        >
          <SavingsTicker />
        </motion.div>

        {/* SVG chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{ marginBottom: 64 }}
        >
          <CostCurve />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? 16 : 2,
            maxWidth: 720,
            borderTop: "1px solid rgba(245,158,11,0.15)",
            paddingTop: 32,
          }}
        >
          <Counter to={73} suffix="%" label="Avg cost reduction" />
          <Counter to={24} prefix="$" suffix="M+" label="Saved for customers" />
          <Counter to={140} suffix="ms" label="Avg response time" />
          <Counter to={500} suffix="+" label="Engineering teams" />
        </motion.div>
      </div>
    </section>
  );
}
