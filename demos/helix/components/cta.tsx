import { ArrowRight, Zap } from "lucide-react";

const VIOLET = "#8b5cf6";

export default function CTA() {
  return (
    <section style={{
      background: "#060410",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes helix-cta-pulse {
          0%, 100% { box-shadow: 0 0 60px rgba(139,92,246,0.4), 0 0 120px rgba(139,92,246,0.15); }
          50% { box-shadow: 0 0 100px rgba(139,92,246,0.6), 0 0 200px rgba(139,92,246,0.25); }
        }
        @keyframes helix-shimmer-sweep {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .helix-big-cta:hover {
          box-shadow: 0 0 80px rgba(139,92,246,0.9), 0 0 160px rgba(139,92,246,0.4) !important;
          transform: scale(1.04) translateY(-3px) !important;
        }
      `}</style>

      {/* Giant glow orb */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "helix-cta-pulse 4s ease-in-out infinite",
      }} />

      {/* Rotating rings */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        height: 500,
        borderRadius: "50%",
        border: "1px solid rgba(139,92,246,0.1)",
        animation: "helix-spin-slow 25s linear infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700,
        height: 700,
        borderRadius: "50%",
        border: "1px dashed rgba(139,92,246,0.06)",
        animation: "helix-spin-reverse 35s linear infinite",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 680,
        margin: "0 auto",
        textAlign: "center",
      }}>
        {/* Icon */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 64,
          height: 64,
          borderRadius: 20,
          background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(109,40,217,0.1))",
          border: "1px solid rgba(139,92,246,0.3)",
          marginBottom: 28,
          boxShadow: "0 0 40px rgba(139,92,246,0.3)",
        }}>
          <Zap size={28} style={{ color: VIOLET }} />
        </div>

        <h2 style={{
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1.08,
          color: "#fff",
          margin: "0 0 20px",
        }}>
          Your first caught error
          <br />
          is{" "}
          <span style={{
            background: "linear-gradient(90deg, #8b5cf6, #c4b5fd, #8b5cf6)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "helix-shimmer-sweep 3s linear infinite",
          }}>
            4 minutes away.
          </span>
        </h2>

        <p style={{
          fontSize: 17,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.7,
          margin: "0 0 40px",
          maxWidth: 520,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Connect your first project in under 4 minutes. No agents, no YAML, no DevOps degree required. Just one SDK call and Helix does the rest.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#"
            className="helix-big-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 50px rgba(139,92,246,0.55)",
              transition: "all 0.25s",
            }}
          >
            Start monitoring free
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              borderRadius: 100,
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.6)",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Schedule a demo
          </a>
        </div>

        {/* Micro trust signals */}
        <div style={{
          display: "flex",
          gap: 32,
          justifyContent: "center",
          marginTop: 36,
          flexWrap: "wrap",
        }}>
          {["Free forever plan", "No credit card", "Up in 4 minutes"].map((t) => (
            <span key={t} style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5.5" stroke="rgba(139,92,246,0.4)" />
                <path d="M3.5 6L5 7.5L8.5 4" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
