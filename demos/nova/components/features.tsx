import { Zap, Brain, Globe, BookOpen, Database, Code2 } from "lucide-react";

const CYAN = "#00d4ff";

const features = [
  {
    icon: Zap,
    name: "Sub-2ms Alerting",
    desc: "Pagerduty-level escalations reach your on-call before the dashboard finishes loading. No batching, no polling — true push.",
    stat: "1.8ms",
    statLabel: "avg alert delivery",
  },
  {
    icon: Brain,
    name: "AI Anomaly Detection",
    desc: "Our model learns your traffic patterns, seasonal load curves, and deployment windows — then fires only when something genuinely breaks.",
    stat: "94%",
    statLabel: "noise reduction",
  },
  {
    icon: Globe,
    name: "Multi-Cloud View",
    desc: "AWS, GCP, Azure, and bare-metal — unified topology graph with cross-cloud latency heatmaps and cost attribution in one pane.",
    stat: "3 clouds",
    statLabel: "unified in one view",
  },
  {
    icon: BookOpen,
    name: "1-Click Runbooks",
    desc: "Attach runbooks to any alert condition. When incidents fire, responders land on the exact playbook with auto-filled context.",
    stat: "73%",
    statLabel: "faster MTTR",
  },
  {
    icon: Database,
    name: "Infinite Retention",
    desc: "Metrics stored in our columnar engine indefinitely. Query your infra state from 3 years ago in under 400ms.",
    stat: "∞",
    statLabel: "data retention",
  },
  {
    icon: Code2,
    name: "Zero-Config SDKs",
    desc: "Drop in one line. Auto-discovers services, databases, queues, and caches — no YAML, no agents to babysit.",
    stat: "< 5 min",
    statLabel: "to first insight",
  },
];

export default function Features() {
  return (
    <section style={{
      position: "relative",
      background: "#020408",
      padding: "120px 40px",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes nova-feat-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes nova-feat-border-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes nova-feat-icon-glow {
          0%, 100% { box-shadow: 0 0 12px rgba(0,212,255,0.3); }
          50% { box-shadow: 0 0 30px rgba(0,212,255,0.7), 0 0 60px rgba(0,212,255,0.2); }
        }
        .nova-feat-card {
          position: relative;
          background: rgba(0,212,255,0.02);
          border-radius: 20px;
          padding: 32px;
          transition: transform 0.3s, background 0.3s;
          overflow: hidden;
        }
        .nova-feat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0,212,255,0.3), rgba(0,212,255,0.05), rgba(0,144,179,0.3), rgba(0,212,255,0.08));
          background-size: 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: nova-feat-border-spin 4s ease infinite;
          pointer-events: none;
        }
        .nova-feat-card:hover {
          transform: translateY(-4px);
          background: rgba(0,212,255,0.04);
        }
        .nova-feat-icon {
          animation: nova-feat-icon-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background gradient */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "60%",
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
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
            marginBottom: 24,
          }}>
            Platform Capabilities
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#fff",
            margin: "0 0 20px",
            lineHeight: 1.05,
          }}>
            Built for the teams that
            <br />
            <span style={{
              background: `linear-gradient(90deg, ${CYAN}, #66e8ff, #00a8cc)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              can&apos;t afford to be wrong.
            </span>
          </h2>
          <p style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.4)",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Every feature ships with the kind of depth that only comes from obsessing over production environments for 7 years straight.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {features.map((feat, i) => {
            const Icon = feat.icon;
            const glowDelay = `${i * 0.4}s`;
            return (
              <div key={i} className="nova-feat-card">
                {/* Corner decoration */}
                <div style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 40,
                  height: 40,
                  borderTop: "1px solid rgba(0,212,255,0.15)",
                  borderRight: "1px solid rgba(0,212,255,0.15)",
                  borderRadius: "0 6px 0 0",
                }} />

                {/* Icon */}
                <div
                  className="nova-feat-icon"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    animationDelay: glowDelay,
                  }}
                >
                  <Icon size={22} style={{ color: CYAN }} />
                </div>

                {/* Name */}
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#fff",
                  margin: "0 0 12px",
                  letterSpacing: "-0.02em",
                }}>
                  {feat.name}
                </h3>

                {/* Desc */}
                <p style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.7,
                  margin: "0 0 20px",
                }}>
                  {feat.desc}
                </p>

                {/* Mini stat */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: 6,
                  padding: "6px 14px",
                  background: "rgba(0,212,255,0.06)",
                  borderRadius: 8,
                  border: "1px solid rgba(0,212,255,0.12)",
                }}>
                  <span style={{
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    color: CYAN,
                    letterSpacing: "-0.02em",
                  }}>
                    {feat.stat}
                  </span>
                  <span style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.35)",
                    fontWeight: 500,
                  }}>
                    {feat.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
