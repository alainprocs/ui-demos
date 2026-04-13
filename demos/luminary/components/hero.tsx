"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

// ── Typewriter ──────────────────────────────────────────────────
const words = ["Designers", "Founders", "Creators", "Builders", "Teams"];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"type" | "hold" | "erase">("type");
  const [displayed, setDisplayed] = useState("");
  const word = words[idx];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (displayed.length < word.length) {
        timer = setTimeout(
          () => setDisplayed(word.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timer = setTimeout(() => setPhase("hold"), 1400);
      }
    } else if (phase === "hold") {
      timer = setTimeout(() => setPhase("erase"), 200);
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          45
        );
      } else {
        setIdx((i) => (i + 1) % words.length);
        setPhase("type");
      }
    }
    return () => clearTimeout(timer);
  }, [phase, displayed, word]);

  return (
    <span
      style={{
        background: "linear-gradient(90deg, #ff4d6d, #ff8c42, #ffe14d)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7, ease: "steps(1)" }}
        style={{ WebkitTextFillColor: "#ff4d6d", display: "inline-block" }}
      >
        |
      </motion.span>
    </span>
  );
}

// ── Liquid mesh canvas ──────────────────────────────────────────
function MeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.3, y: 0.3, r: 0.45, color: "rgba(255,77,109,0.18)", speed: 0.0008 },
      { x: 0.7, y: 0.6, r: 0.40, color: "rgba(255,140,66,0.14)", speed: 0.0012 },
      { x: 0.5, y: 0.8, r: 0.35, color: "rgba(100,80,255,0.15)", speed: 0.001 },
      { x: 0.15, y: 0.7, r: 0.30, color: "rgba(255,225,77,0.09)", speed: 0.0006 },
    ];

    const draw = () => {
      t += 1;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      orbs.forEach((orb, i) => {
        const px = (orb.x + Math.sin(t * orb.speed + i * 2.1) * 0.18) * w;
        const py = (orb.y + Math.cos(t * orb.speed * 0.8 + i * 1.7) * 0.15) * h;
        const rad = orb.r * Math.min(w, h);
        const grad = ctx.createRadialGradient(px, py, 0, px, py, rad);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      // Noise grid dots
      ctx.save();
      ctx.globalAlpha = 0.04;
      const gridSize = 40;
      for (let gx = 0; gx <= w; gx += gridSize) {
        for (let gy = 0; gy <= h; gy += gridSize) {
          const wobble = Math.sin((gx + t * 0.5) * 0.02) * Math.cos((gy + t * 0.4) * 0.025) * 4;
          ctx.beginPath();
          ctx.arc(gx + wobble, gy + wobble, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }
      }
      ctx.restore();

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
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

// ── Cursor orb ──────────────────────────────────────────────────
function CursorOrb() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 22 });
  const sy = useSpring(my, { stiffness: 80, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX - 20);
      my.set(e.clientY - 20);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: sx,
        y: sy,
        width: 40,
        height: 40,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,77,109,0.55) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        filter: "blur(6px)",
      }}
    />
  );
}

// ── Stat counter ────────────────────────────────────────────────
function StatCounter({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const prog = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - prog, 3);
            setCount(Math.round(ease * value));
            if (prog < 1) requestAnimationFrame(tick);
          };
          setTimeout(() => requestAnimationFrame(tick), delay);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      style={{ textAlign: "center" }}
    >
      <div
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 900,
          background: "linear-gradient(135deg, #ff4d6d, #ff8c42)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.45)",
          marginTop: 6,
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

// ── Floating badge ───────────────────────────────────────────────
function FloatingBadge({
  children,
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3 + delay,
          ease: "easeInOut",
        }}
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          borderRadius: 16,
          padding: "10px 16px",
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          whiteSpace: "nowrap",
          ...style,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ── Hero ────────────────────────────────────────────────────────
export default function Hero() {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#06071a",
      }}
    >
      {/* Cursor */}
      {!isMobile && <CursorOrb />}

      {/* Mesh canvas — parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          y: bgY,
          opacity,
        }}
      >
        <MeshCanvas />
      </motion.div>

      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, #06071a 75%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: isMobile ? 20 : 28,
          padding: isMobile ? "100px 20px 60px" : "0 24px",
          maxWidth: 900,
          y: textY,
          opacity,
        }}
      >
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,77,109,0.12)",
            border: "1px solid rgba(255,77,109,0.3)",
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 13,
            fontWeight: 600,
            color: "#ff4d6d",
          }}
        >
          <Sparkles size={13} />
          Introducing Luminary 2.0 — AI Creative OS
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2.6rem, 7vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#fff",
            margin: 0,
          }}
        >
          The creative OS
          <br />
          built for
          <br />
          <Typewriter />
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          Luminary unifies AI design generation, real-time collaboration, and
          version control into one fluid workspace. Ship beautiful work, faster.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            display: "flex",
            gap: 12,
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            width: isMobile ? "100%" : "auto",
          }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,77,109,0.5)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: isMobile ? "14px 32px" : "14px 28px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #ff4d6d, #ff8c42)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 30px rgba(255,77,109,0.35)",
              width: isMobile ? "100%" : "auto",
              justifyContent: "center",
            }}
          >
            Start for free <ArrowRight size={15} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: isMobile ? "14px 32px" : "14px 28px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              width: isMobile ? "100%" : "auto",
              justifyContent: "center",
            }}
          >
            Watch demo
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: isMobile ? 16 : 32,
            marginTop: isMobile ? 8 : 16,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            width: "100%",
            maxWidth: 500,
          }}
        >
          <StatCounter value={120} suffix="K+" label="Active designers" delay={0} />
          <StatCounter value={98} suffix="%" label="Satisfaction score" delay={150} />
          <StatCounter value={4} suffix="x" label="Faster shipping" delay={300} />
        </motion.div>
      </motion.div>

      {/* Floating badges — desktop only */}
      {!isMobile && (
        <>
          <div style={{ position: "absolute", left: "8%", top: "30%", zIndex: 3 }}>
            <FloatingBadge delay={0.8}>
              ✦ AI Generation
            </FloatingBadge>
          </div>
          <div style={{ position: "absolute", right: "7%", top: "35%", zIndex: 3 }}>
            <FloatingBadge delay={1.1}>
              ⚡ Real-time collab
            </FloatingBadge>
          </div>
          <div style={{ position: "absolute", left: "10%", bottom: "22%", zIndex: 3 }}>
            <FloatingBadge delay={1.4}>
              🎨 Design tokens
            </FloatingBadge>
          </div>
          <div style={{ position: "absolute", right: "9%", bottom: "25%", zIndex: 3 }}>
            <FloatingBadge delay={1.6}>
              📐 Version control
            </FloatingBadge>
          </div>
        </>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: 1,
            height: 32,
            background: "linear-gradient(to bottom, rgba(255,77,109,0.6), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
