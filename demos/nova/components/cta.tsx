import { ArrowRight } from "lucide-react";

const CYAN = "#00d4ff";

export default function CTA() {
  return (
    <section style={{
      position: "relative",
      background: "#020408",
      padding: "140px 40px",
      overflow: "hidden",
      textAlign: "center",
    }}>
      <style>{`
        @keyframes nova-cta-orb-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.9;
          }
        }
        @keyframes nova-cta-ring-orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes nova-cta-ring-orbit-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes nova-cta-btn-glow {
          0%, 100% { box-shadow: 0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2); }
          50% { box-shadow: 0 0 80px rgba(0,212,255,1), 0 0 160px rgba(0,212,255,0.4); }
        }
        @keyframes nova-cta-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .nova-cta-btn:hover {
          transform: scale(1.05) translateY(-3px) !important;
          box-shadow: 0 0 100px rgba(0,212,255,1), 0 0 200px rgba(0,212,255,0.5) !important;
        }
        .nova-cta-ghost:hover {
          border-color: rgba(0,212,255,0.4) !important;
          color: rgba(0,212,255,0.9) !important;
        }
      `}</style>

      {/* Massive orb */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 600,
        height: 600,
        animation: "nova-cta-orb-pulse 4s ease-in-out infinite",
        pointerEvents: "none",
        zIndex: 0,
      }}>
        {/* Core */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: `radial-gradient(circle at 40% 40%, rgba(0,212,255,0.25) 0%, rgba(0,144,179,0.12) 50%, transparent 70%)`,
          filter: "blur(40px)",
        }} />
        {/* Outer glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 65%)`,
          filter: "blur(20px)",
        }} />
      </div>

      {/* Orbiting ring 1 — fast tilt */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 500,
        height: 500,
        animation: "nova-cta-ring-orbit 12s linear infinite",
        pointerEvents: "none",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: `1px solid rgba(0,212,255,0.18)`,
          transform: "rotateX(70deg) rotateZ(20deg)",
        }}>
          {/* Ring node */}
          <div style={{
            position: "absolute",
            top: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: CYAN,
            boxShadow: `0 0 15px ${CYAN}`,
          }} />
        </div>
      </div>

      {/* Orbiting ring 2 — slow reverse tilt */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 380,
        height: 380,
        animation: "nova-cta-ring-orbit-reverse 18s linear infinite",
        pointerEvents: "none",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: `1px solid rgba(0,212,255,0.12)`,
          transform: "rotateX(60deg) rotateZ(-40deg)",
        }}>
          <div style={{
            position: "absolute",
            bottom: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#66e8ff",
            boxShadow: "0 0 10px #66e8ff",
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 700,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(0,212,255,0.08)",
          border: "1px solid rgba(0,212,255,0.2)",
          borderRadius: 100,
          padding: "6px 16px",
          fontSize: 12,
          fontWeight: 700,
          color: CYAN,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}>
          Get started in 4 minutes
        </div>

        {/* Headline */}
        <h2 style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "#fff",
          margin: 0,
          lineHeight: 1.05,
        }}>
          Stop guessing.
          <br />
          <span style={{
            background: `linear-gradient(90deg, ${CYAN}, #66e8ff, #00a8cc, ${CYAN})`,
            backgroundSize: "300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "nova-cta-shimmer 4s linear infinite",
          }}>
            Start knowing.
          </span>
        </h2>

        {/* Subtext */}
        <p style={{
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.42)",
          lineHeight: 1.7,
          maxWidth: 520,
          margin: 0,
        }}>
          Connect your first service in under 5 minutes. No agents to install, no YAML to write. Just drop in the SDK and watch your infrastructure come alive.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
          <a
            href="#"
            className="nova-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "17px 38px",
              borderRadius: 100,
              background: `linear-gradient(135deg, ${CYAN}, #0090b3)`,
              color: "#000",
              fontSize: 16,
              fontWeight: 800,
              textDecoration: "none",
              animation: "nova-cta-btn-glow 2.5s ease-in-out infinite",
              transition: "all 0.25s",
            }}
          >
            Start monitoring free
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="nova-cta-ghost"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "17px 38px",
              borderRadius: 100,
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.55)",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Talk to an engineer
          </a>
        </div>

        {/* Fine print */}
        <p style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.22)",
          margin: 0,
        }}>
          Free forever for up to 5 services · No credit card · SOC 2 Type II certified
        </p>
      </div>
    </section>
  );
}
