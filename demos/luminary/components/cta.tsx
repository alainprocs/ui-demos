"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "#ff4d6d" : "#ff8c42",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines between nearby particles
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = "#ff4d6d";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.globalAlpha = 0.05 * (1 - dist / 100);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

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

export default function CTA() {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  const chars = "Start creating for free".split("");

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "60px 20px 80px" : "80px 24px 120px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          scale,
          position: "relative",
          overflow: "hidden",
          borderRadius: 32,
          padding: isMobile ? "60px 28px" : "80px 64px",
          maxWidth: 900,
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(255,77,109,0.14) 0%, rgba(255,140,66,0.10) 50%, rgba(100,80,255,0.12) 100%)",
          border: "1px solid rgba(255,77,109,0.25)",
          textAlign: "center",
          boxShadow:
            "0 0 80px rgba(255,77,109,0.12), inset 0 0 80px rgba(255,77,109,0.04)",
        }}
      >
        <ParticleCanvas />

        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "20%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,77,109,0.18), transparent 70%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: "15%",
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.15), transparent 70%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,77,109,0.15)",
              border: "1px solid rgba(255,77,109,0.3)",
              borderRadius: 100,
              padding: "5px 14px",
              fontSize: 12,
              fontWeight: 700,
              color: "#ff4d6d",
              marginBottom: 28,
            }}
          >
            <Sparkles size={12} />
            Free 14-day trial — no credit card needed
          </motion.div>

          {/* Staggered char headline */}
          <h2
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              marginBottom: 20,
              lineHeight: 1.05,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0 0.02em",
            }}
          >
            {chars.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: -25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.025,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: "inline-block",
                  color: ch === " " ? undefined : undefined,
                  background:
                    i >= 16
                      ? "linear-gradient(135deg, #ff4d6d, #ff8c42)"
                      : undefined,
                  WebkitBackgroundClip: i >= 16 ? "text" : undefined,
                  WebkitTextFillColor:
                    i >= 16 ? "transparent" : "#fff",
                  backgroundClip: i >= 16 ? "text" : undefined,
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 440,
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            Join 120,000+ designers already shipping their best work with
            Luminary. Setup takes 60 seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <motion.a
              href="#"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 50px rgba(255,77,109,0.55)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: isMobile ? "15px 40px" : "15px 32px",
                borderRadius: 100,
                background: "linear-gradient(135deg, #ff4d6d, #ff8c42)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 32px rgba(255,77,109,0.4)",
                width: isMobile ? "100%" : "auto",
                justifyContent: "center",
              }}
            >
              Get started free <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: isMobile ? "15px 32px" : "15px 28px",
                borderRadius: 100,
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                width: isMobile ? "100%" : "auto",
                justifyContent: "center",
              }}
            >
              Talk to sales
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
