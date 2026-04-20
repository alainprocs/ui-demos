import { ArrowRight, AlertTriangle, CheckCircle, Zap, Activity } from "lucide-react";

const VIOLET = "#8b5cf6";

const errorStream = [
  { type: "error", code: "TypeError", msg: "Cannot read properties of undefined (reading 'user')", file: "auth/session.ts:142", time: "0ms ago", color: "#f87171" },
  { type: "warn",  code: "Warning",   msg: "Slow query detected: 4.2s on users.findMany()", file: "db/queries.ts:89",    time: "12ms ago", color: "#fbbf24" },
  { type: "error", code: "RangeError", msg: "Maximum call stack size exceeded in recursive parser", file: "parser/ast.ts:311", time: "31ms ago", color: "#f87171" },
  { type: "info",  code: "Resolved",  msg: "NullPointerException auto-healed by Helix AI", file: "api/handler.ts:67",   time: "58ms ago", color: "#34d399" },
  { type: "error", code: "ECONNRESET", msg: "Connection reset by peer: redis://prod-cache-01:6379", file: "cache/client.ts:24", time: "89ms ago", color: "#f87171" },
];

const stats = [
  { value: "99.97%", label: "Error Catch Rate" },
  { value: "<50ms", label: "Alert Latency" },
  { value: "18,400+", label: "Engineering Teams" },
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
        background: "#060410",
        paddingTop: 80,
      }}
    >
      <style>{`
        @keyframes helix-pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1); }
          50% { box-shadow: 0 0 60px rgba(139,92,246,0.7), 0 0 120px rgba(139,92,246,0.25); }
        }
        @keyframes helix-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes helix-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes helix-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes helix-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes helix-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes helix-stream-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes helix-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes helix-badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(139,92,246,0); }
        }
        @keyframes helix-scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes helix-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        .helix-cta-primary:hover {
          box-shadow: 0 0 60px rgba(139,92,246,0.8), 0 0 120px rgba(139,92,246,0.3) !important;
          transform: scale(1.03) translateY(-2px) !important;
        }
        .helix-cta-secondary:hover {
          border-color: rgba(139,92,246,0.5) !important;
          color: #c4b5fd !important;
        }
      `}</style>

      {/* Gradient mesh background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Top center violet glow */}
        <div style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "70%",
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.22) 0%, transparent 65%)",
        }} />
        {/* Bottom left accent */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "50%",
          height: "50%",
          background: "radial-gradient(ellipse 70% 70% at 0% 100%, rgba(109,40,217,0.12) 0%, transparent 70%)",
        }} />
        {/* Right purple accent */}
        <div style={{
          position: "absolute",
          top: "20%",
          right: 0,
          width: "40%",
          height: "60%",
          background: "radial-gradient(ellipse 60% 60% at 100% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }} />

        {/* Dotted grid overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(139,92,246,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)",
        }} />

        {/* Scanline effect */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,92,246,0.015) 2px, rgba(139,92,246,0.015) 4px)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Rotating orbital rings */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700,
        height: 700,
        pointerEvents: "none",
        zIndex: 0,
      }}>
        {/* Outer ring */}
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "1px solid rgba(139,92,246,0.12)",
          animation: "helix-spin-slow 30s linear infinite",
        }}>
          {/* Ring node */}
          <div style={{
            position: "absolute",
            top: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: VIOLET,
            boxShadow: `0 0 12px ${VIOLET}`,
          }} />
        </div>
        {/* Middle ring */}
        <div style={{
          position: "absolute",
          inset: 80,
          borderRadius: "50%",
          border: "1px solid rgba(139,92,246,0.18)",
          animation: "helix-spin-reverse 20s linear infinite",
        }}>
          <div style={{
            position: "absolute",
            bottom: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#a78bfa",
            boxShadow: "0 0 10px #a78bfa",
          }} />
        </div>
        {/* Inner ring */}
        <div style={{
          position: "absolute",
          inset: 160,
          borderRadius: "50%",
          border: "1px dashed rgba(139,92,246,0.1)",
          animation: "helix-spin-slow 15s linear infinite",
        }} />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 28,
          padding: "0 24px",
          maxWidth: 880,
          width: "100%",
        }}
      >
        {/* Live badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(139,92,246,0.1)",
          border: "1px solid rgba(139,92,246,0.3)",
          borderRadius: 100,
          padding: "7px 18px",
          fontSize: 13,
          fontWeight: 600,
          color: "#c4b5fd",
          animation: "helix-badge-pulse 2s ease-in-out infinite",
        }}>
          <span style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#34d399",
            display: "inline-block",
            animation: "helix-dot-pulse 1.5s ease-in-out infinite",
          }} />
          AI-Powered Error Intelligence — Now GA
          <ArrowRight size={13} />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: "#fff",
            margin: 0,
          }}
        >
          Catch errors
          <br />
          <span style={{
            background: "linear-gradient(90deg, #8b5cf6, #a78bfa, #c4b5fd, #8b5cf6)",
            backgroundSize: "300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "helix-gradient-shift 4s ease infinite",
          }}>
            before users do.
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "rgba(255,255,255,0.5)",
          maxWidth: 600,
          lineHeight: 1.7,
          margin: 0,
        }}>
          Helix monitors every exception, slow query, and deployment regression across your entire stack — then fixes the ones it can before your users ever notice.
        </p>

        {/* CTA buttons */}
        <div style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <a
            href="#"
            className="helix-cta-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "15px 32px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(139,92,246,0.55)",
              transition: "all 0.25s",
            }}
          >
            Start monitoring free
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="helix-cta-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 32px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            See your first insight in 4 min
          </a>
        </div>

        {/* Trust proof row */}
        <div style={{
          display: "flex",
          gap: 28,
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {["No credit card required", "SOC 2 Type II", "GDPR compliant"].map((t) => (
            <div key={t} style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
            }}>
              <CheckCircle size={13} style={{ color: "#34d399" }} />
              {t}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex",
          gap: 0,
          paddingTop: 32,
          borderTop: "1px solid rgba(139,92,246,0.12)",
          width: "100%",
          maxWidth: 560,
          justifyContent: "space-between",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", flex: 1 }}>
              <div style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
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
                color: "rgba(255,255,255,0.35)",
                marginTop: 6,
                fontWeight: 500,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live error stream panel */}
      <div style={{
        position: "relative",
        zIndex: 4,
        marginTop: 60,
        width: "100%",
        maxWidth: 920,
        padding: "0 24px",
      }}>
        <div style={{
          background: "rgba(8,5,22,0.9)",
          border: "1px solid rgba(139,92,246,0.2)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(139,92,246,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}>
          {/* Terminal chrome */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 20px",
            borderBottom: "1px solid rgba(139,92,246,0.12)",
            background: "rgba(139,92,246,0.04)",
          }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(248,113,113,0.5)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(251,191,36,0.5)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(52,211,153,0.5)" }} />
            <div style={{
              marginLeft: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
              fontFamily: "monospace",
            }}>
              <Activity size={12} style={{ color: VIOLET }} />
              helix — live error stream — prod-us-east-1
              <span style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34d399",
                display: "inline-block",
                animation: "helix-dot-pulse 1.5s ease-in-out infinite",
              }} />
              <span style={{ color: "#34d399" }}>LIVE</span>
            </div>
          </div>

          {/* Scrolling error stream */}
          <div style={{ overflow: "hidden", height: 220, position: "relative" }}>
            <div style={{
              animation: "helix-stream-scroll 12s linear infinite",
              display: "flex",
              flexDirection: "column",
            }}>
              {[...errorStream, ...errorStream].map((err, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "10px 20px",
                  borderBottom: "1px solid rgba(139,92,246,0.06)",
                  fontFamily: "monospace",
                  fontSize: 12,
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: err.color,
                    marginTop: 4,
                    boxShadow: `0 0 6px ${err.color}`,
                  }} />
                  <span style={{ color: err.color, fontWeight: 700, flexShrink: 0, minWidth: 90 }}>{err.code}</span>
                  <span style={{ color: "rgba(255,255,255,0.65)", flex: 1, lineHeight: 1.5 }}>{err.msg}</span>
                  <span style={{ color: "rgba(139,92,246,0.6)", flexShrink: 0 }}>{err.file}</span>
                  <span style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>{err.time}</span>
                </div>
              ))}
            </div>
            {/* Fade out bottom */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              background: "linear-gradient(to bottom, transparent, rgba(8,5,22,0.95))",
              pointerEvents: "none",
            }} />
          </div>

          {/* Bottom status bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "10px 20px",
            borderTop: "1px solid rgba(139,92,246,0.08)",
            background: "rgba(139,92,246,0.03)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
              <Zap size={11} style={{ color: VIOLET }} />
              AI auto-resolving 3 issues
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 16, fontSize: 11, fontFamily: "monospace" }}>
              <span style={{ color: "#f87171" }}>2 errors/min</span>
              <span style={{ color: "#fbbf24" }}>1 warning/min</span>
              <span style={{ color: "#34d399" }}>99.97% uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        background: "linear-gradient(to bottom, transparent, #060410)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
