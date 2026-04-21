import { ArrowRight, CheckCircle } from "lucide-react";

const CYAN = "#00d4ff";

const metricPills = [
  { label: "Latency", value: "1.2ms", delay: "0s" },
  { label: "Uptime", value: "99.997%", delay: "0.3s" },
  { label: "Incidents", value: "0", delay: "0.6s" },
];

const stats = [
  { value: "< 2ms", label: "Alert Latency" },
  { value: "99.999%", label: "Platform Uptime" },
  { value: "22,000+", label: "Engineering Teams" },
];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#020408",
        paddingTop: 80,
      }}
    >
      <style>{`
        /* 1 — Radar ring pulse */
        @keyframes nova-radar-pulse {
          0% { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        /* 2 — Center dot glow */
        @keyframes nova-center-glow {
          0%, 100% { box-shadow: 0 0 20px ${CYAN}, 0 0 60px rgba(0,212,255,0.4); }
          50% { box-shadow: 0 0 50px ${CYAN}, 0 0 120px rgba(0,212,255,0.7), 0 0 200px rgba(0,212,255,0.2); }
        }
        /* 3 — Grid drift */
        @keyframes nova-grid-drift {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
        /* 4 — Metric pill float */
        @keyframes nova-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        /* 5 — Status dot blink */
        @keyframes nova-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        /* 6 — Gradient text shimmer */
        @keyframes nova-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        /* 7 — CTA pulse */
        @keyframes nova-cta-pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.2); }
          50% { box-shadow: 0 0 60px rgba(0,212,255,0.9), 0 0 120px rgba(0,212,255,0.4); }
        }
        /* 8 — Outer ring slow spin */
        @keyframes nova-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* 9 — Badge shimmer */
        @keyframes nova-badge-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .nova-cta-primary:hover {
          transform: scale(1.04) translateY(-2px) !important;
          box-shadow: 0 0 80px rgba(0,212,255,0.95), 0 0 160px rgba(0,212,255,0.4) !important;
        }
        .nova-cta-secondary:hover {
          border-color: rgba(0,212,255,0.4) !important;
          color: rgba(0,212,255,0.9) !important;
          background: rgba(0,212,255,0.05) !important;
        }
      `}</style>

      {/* === Background layers === */}

      {/* Animated grid */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        animation: "nova-grid-drift 8s linear infinite",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Gradient mesh */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          top: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "65%",
          background: "radial-gradient(ellipse 60% 60% at 50% 10%, rgba(0,212,255,0.14) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "-10%",
          width: "55%",
          height: "50%",
          background: "radial-gradient(ellipse 70% 70% at 0% 100%, rgba(0,144,179,0.08) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: "40%",
          height: "60%",
          background: "radial-gradient(ellipse 60% 60% at 100% 50%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }} />
      </div>

      {/* Scanlines */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.012) 2px, rgba(0,212,255,0.012) 4px)",
        pointerEvents: "none",
      }} />

      {/* === Radar / Sonar System === */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 600,
        pointerEvents: "none",
        zIndex: 0,
      }}>
        {/* Pulsing radar rings — staggered delays */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 120,
            height: 120,
            marginLeft: -60,
            marginTop: -60,
            borderRadius: "50%",
            border: `1.5px solid ${CYAN}`,
            animation: `nova-radar-pulse 4s ease-out ${i * 0.8}s infinite`,
            opacity: 0,
          }} />
        ))}

        {/* Static reference rings */}
        {[200, 340, 480, 560].map((size, i) => (
          <div key={i} style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            borderRadius: "50%",
            border: `1px solid rgba(0,212,255,${0.04 + i * 0.02})`,
          }} />
        ))}

        {/* Rotating sweep line */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 280,
          height: 1,
          marginLeft: 0,
          marginTop: 0,
          transformOrigin: "0% 50%",
          background: `linear-gradient(90deg, ${CYAN}, transparent)`,
          animation: "nova-spin-slow 6s linear infinite",
          opacity: 0.5,
        }} />

        {/* Center glowing dot */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 14,
          height: 14,
          marginLeft: -7,
          marginTop: -7,
          borderRadius: "50%",
          background: CYAN,
          animation: "nova-center-glow 2.5s ease-in-out infinite",
        }} />

        {/* Dot grid inside inner ring */}
        {[...Array(5)].map((_, row) =>
          [...Array(5)].map((_, col) => {
            const cx = 300 + (col - 2) * 18;
            const cy = 300 + (row - 2) * 18;
            const dist = Math.sqrt(Math.pow(cx - 300, 2) + Math.pow(cy - 300, 2));
            if (dist > 50) return null;
            return (
              <div key={`${row}-${col}`} style={{
                position: "absolute",
                left: cx - 1,
                top: cy - 1,
                width: 2,
                height: 2,
                borderRadius: "50%",
                background: `rgba(0,212,255,0.5)`,
              }} />
            );
          })
        )}

        {/* Crosshair lines */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "calc(50% - 40px)",
          width: 80,
          height: 1,
          background: `rgba(0,212,255,0.25)`,
        }} />
        <div style={{
          position: "absolute",
          left: "50%",
          top: "calc(50% - 40px)",
          width: 1,
          height: 80,
          background: `rgba(0,212,255,0.25)`,
        }} />
      </div>

      {/* === Floating metric pills === */}
      {metricPills.map((pill, i) => {
        const positions = [
          { top: "calc(50% - 40px)", left: "calc(50% - 360px)" },
          { top: "calc(50% + 60px)", left: "calc(50% + 240px)" },
          { top: "calc(50% - 130px)", left: "calc(50% + 200px)" },
        ];
        return (
          <div key={i} style={{
            position: "absolute",
            ...positions[i],
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,212,255,0.06)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: 100,
            padding: "8px 16px",
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            animation: `nova-float 3.5s ease-in-out ${pill.delay} infinite`,
            zIndex: 3,
            whiteSpace: "nowrap",
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              animation: "nova-blink 1.8s ease-in-out infinite",
              boxShadow: "0 0 6px #22c55e",
              flexShrink: 0,
            }} />
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>{pill.label}:</span>
            <span style={{ color: CYAN }}>{pill.value}</span>
          </div>
        );
      })}

      {/* === Main content === */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 28,
        padding: "0 24px",
        maxWidth: 900,
        width: "100%",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "linear-gradient(90deg, rgba(0,212,255,0.1), rgba(0,212,255,0.06), rgba(0,212,255,0.1))",
          backgroundSize: "200%",
          border: "1px solid rgba(0,212,255,0.25)",
          borderRadius: 100,
          padding: "7px 18px",
          fontSize: 13,
          fontWeight: 600,
          color: CYAN,
          animation: "nova-badge-shimmer 3s linear infinite",
        }}>
          <span style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#22c55e",
            display: "inline-block",
            animation: "nova-blink 1.5s ease-in-out infinite",
            boxShadow: "0 0 8px #22c55e",
          }} />
          Now monitoring 22,000+ production stacks
          <ArrowRight size={13} />
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(3rem, 7.5vw, 6.8rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          color: "#fff",
          margin: 0,
        }}>
          Your infrastructure.
          <br />
          <span style={{
            background: `linear-gradient(90deg, ${CYAN}, #66e8ff, #00a8cc, ${CYAN})`,
            backgroundSize: "300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "nova-gradient-shift 4s ease infinite",
          }}>
            Every millisecond.
          </span>
          <br />
          No surprises.
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          color: "rgba(255,255,255,0.48)",
          maxWidth: 620,
          lineHeight: 1.7,
          margin: 0,
        }}>
          Nova gives your SRE team god-mode visibility — sub-2ms alerts, AI-powered anomaly detection, and cinematic dashboards that make incidents feel like distant memories.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <a
            href="#"
            className="nova-cta-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "15px 34px",
              borderRadius: 100,
              background: `linear-gradient(135deg, ${CYAN}, #0090b3)`,
              color: "#000",
              fontSize: 15,
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(0,212,255,0.55), 0 0 80px rgba(0,212,255,0.2)",
              animation: "nova-cta-pulse 2.5s ease-in-out infinite",
              transition: "all 0.25s",
            }}
          >
            Start monitoring free
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="nova-cta-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 34px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.65)",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Watch live demo
          </a>
        </div>

        {/* Trust row */}
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {["SOC 2 Type II", "GDPR compliant", "No credit card required"].map((t) => (
            <div key={t} style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
            }}>
              <CheckCircle size={13} style={{ color: "#22c55e" }} />
              {t}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex",
          gap: 0,
          paddingTop: 32,
          borderTop: "1px solid rgba(0,212,255,0.1)",
          width: "100%",
          maxWidth: 580,
          justifyContent: "space-between",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", flex: 1 }}>
              <div style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                fontWeight: 900,
                background: `linear-gradient(135deg, ${CYAN}, #66e8ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.32)",
                marginTop: 6,
                fontWeight: 500,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 180,
        background: "linear-gradient(to bottom, transparent, #020408)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
