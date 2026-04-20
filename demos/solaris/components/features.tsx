import { Activity, Brain, Cpu, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Track every panel's output, temperature, and health status in real time. Instant alerts for degradation, shading, or hardware failures — before they cost you revenue.",
    accent: "#f97316",
    stat: "< 10s alert latency",
  },
  {
    icon: Brain,
    title: "AI Forecasting",
    description:
      "Predict energy output up to 14 days ahead using hyperlocal weather models and your panel's historical performance. Negotiate grid contracts with confidence.",
    accent: "#fb923c",
    stat: "95.2% forecast accuracy",
  },
  {
    icon: Cpu,
    title: "Grid Integration",
    description:
      "Seamlessly connect to utility APIs, smart inverters, and battery systems. Automate export curtailment, load balancing, and SCADA integration.",
    accent: "#fbbf24",
    stat: "50+ grid protocols supported",
  },
  {
    icon: BarChart3,
    title: "ROI Analytics",
    description:
      "Full financial dashboard: LCOE, IRR, payback period, and degradation curves. Export boardroom-ready reports in seconds.",
    accent: "#f97316",
    stat: "Avg 34% ROI improvement",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "120px 24px",
        background: "#030712",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(249,115,22,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.25)",
              borderRadius: 100,
              padding: "5px 14px",
              fontSize: 12,
              fontWeight: 700,
              color: "#f97316",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 20,
            }}
          >
            Platform Features
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            Everything your solar portfolio
            <br />
            needs to perform at its peak
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            From a single rooftop to a 500 MW utility farm — Solaris scales
            with your ambition.
          </p>
        </div>

        {/* Feature cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(249,115,22,0.1)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Hover glow top-right */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 180,
                    height: 180,
                    background: `radial-gradient(circle at 100% 0%, ${f.accent}10 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: `rgba(249,115,22,0.1)`,
                    border: `1px solid rgba(249,115,22,0.2)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={22} color={f.accent} strokeWidth={1.8} />
                </div>

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    marginBottom: 10,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {f.description}
                </p>

                {/* Stat pill */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(249,115,22,0.08)",
                    border: "1px solid rgba(249,115,22,0.15)",
                    borderRadius: 100,
                    padding: "4px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#f97316",
                  }}
                >
                  {f.stat}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
