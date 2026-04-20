import { Zap, GitMerge, Brain, Bell, Shield, BarChart2 } from "lucide-react";

const VIOLET = "#8b5cf6";
const BG = "#060410";

const features = [
  {
    icon: <Brain size={22} />,
    title: "AI root-cause analysis in seconds.",
    description: "Helix's model traces every exception through your entire call stack, identifies the root cause, and suggests a fix — before you've even opened the alert.",
    tag: "AI-Powered",
  },
  {
    icon: <Zap size={22} />,
    title: "Real-time stream, zero latency.",
    description: "Every error surfaces in under 50ms. No batch processing, no polling. Just a live firehose of what's breaking in production right now.",
    tag: "< 50ms",
  },
  {
    icon: <GitMerge size={22} />,
    title: "Catches regressions before they ship.",
    description: "Helix integrates with your CI pipeline and compares error rates across every PR. Blocked deployments save you before your users feel a thing.",
    tag: "CI/CD Native",
  },
  {
    icon: <Bell size={22} />,
    title: "Smart alerts that don't cry wolf.",
    description: "Machine learning groups duplicate errors and suppresses noise. You get one alert per unique issue — not 10,000 pings for the same uncaught exception.",
    tag: "0 Alert Fatigue",
  },
  {
    icon: <Shield size={22} />,
    title: "Auto-heals what it can. Flags the rest.",
    description: "For known error patterns, Helix applies pre-approved remediation playbooks automatically. For novel issues, it hands off to your on-call with full context.",
    tag: "Auto-Remediation",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Error budgets tied to your SLOs.",
    description: "Track burn rate against service-level objectives in real time. Know exactly how many errors you can afford before you breach your next SLA.",
    tag: "SLO Tracking",
  },
];

export default function Features() {
  return (
    <section
      style={{
        background: BG,
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes helix-card-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .helix-feature-card {
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .helix-feature-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 24px 60px rgba(139,92,246,0.18), 0 0 0 1px rgba(139,92,246,0.3) !important;
          border-color: rgba(139,92,246,0.35) !important;
        }
      `}</style>

      {/* Section background accent */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "60%",
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.25)",
            borderRadius: 100,
            padding: "5px 14px",
            fontSize: 12,
            fontWeight: 700,
            color: "#c4b5fd",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>
            What makes Helix different
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 18px",
          }}>
            Built for teams who ship fast{" "}
            <br />
            <span style={{
              background: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              and can't afford to break things.
            </span>
          </h2>
          <p style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.65,
          }}>
            Helix goes beyond crash reporting. It's the observability layer your entire engineering org actually uses.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 20,
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="helix-feature-card"
              style={{
                background: "rgba(139,92,246,0.04)",
                border: "1px solid rgba(139,92,246,0.14)",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner decoration */}
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 80,
                height: 80,
                background: "radial-gradient(circle at 100% 0%, rgba(139,92,246,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Icon */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(109,40,217,0.1))",
                border: "1px solid rgba(139,92,246,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: VIOLET,
                marginBottom: 20,
                boxShadow: "0 0 20px rgba(139,92,246,0.15)",
              }}>
                {f.icon}
              </div>

              {/* Tag */}
              <div style={{
                position: "absolute",
                top: 28,
                right: 28,
                fontSize: 10,
                fontWeight: 700,
                color: "#a78bfa",
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: 100,
                padding: "3px 10px",
                letterSpacing: "0.06em",
              }}>
                {f.tag}
              </div>

              <h3 style={{
                fontSize: 17,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1.35,
                margin: "0 0 12px",
              }}>
                {f.title}
              </h3>
              <p style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
