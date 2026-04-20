import { ArrowRight, Zap, TrendingUp, Sun } from "lucide-react";

const stats = [
  { value: "4.2 GW", label: "Energy Monitored" },
  { value: "98.7%", label: "Uptime Accuracy" },
  { value: "34%", label: "Avg ROI Lift" },
];

const floatingMetrics = [
  {
    icon: "☀️",
    label: "Live Output",
    value: "2.84 MW",
    change: "+12%",
    positive: true,
    top: "22%",
    left: "5%",
  },
  {
    icon: "⚡",
    label: "Grid Feed",
    value: "1.2 MW",
    change: "Active",
    positive: true,
    top: "28%",
    right: "5%",
    left: undefined,
  },
  {
    icon: "🔋",
    label: "Storage",
    value: "87%",
    change: "Charged",
    positive: true,
    bottom: "30%",
    left: "6%",
    top: undefined,
  },
  {
    icon: "📈",
    label: "Monthly Savings",
    value: "$14.2K",
    change: "+8.3%",
    positive: true,
    bottom: "32%",
    right: "5%",
    left: undefined,
    top: undefined,
  },
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
        background: "#030712",
        paddingTop: 80,
      }}
    >
      {/* Radial glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 10%, rgba(249,115,22,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Secondary glow - bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(ellipse 80% 80% at 100% 100%, rgba(251,146,60,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

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
          maxWidth: 860,
        }}
      >
        {/* Pill badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 13,
            fontWeight: 600,
            color: "#f97316",
          }}
        >
          <Sun size={13} strokeWidth={2.5} />
          Introducing Solaris AI — Now in Beta
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#fff",
            margin: 0,
          }}
        >
          Solar Intelligence
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #f97316, #fb923c, #fcd34d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            at Scale
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: 580,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Monitor every panel. Predict every outage. Maximize every kilowatt.
          Solaris brings AI-powered analytics to your entire solar portfolio in
          real time.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(249,115,22,0.4)",
            }}
          >
            Start Free Trial
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Watch Demo
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 0,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            width: "100%",
            maxWidth: 520,
            justifyContent: "space-between",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", flex: 1 }}>
              <div
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating metric cards */}
      {[
        {
          icon: "☀️",
          label: "Live Output",
          value: "2.84 MW",
          change: "+12%",
          style: { top: "22%", left: "4%" },
        },
        {
          icon: "⚡",
          label: "Grid Feed",
          value: "1.2 MW",
          change: "Active",
          style: { top: "30%", right: "4%" },
        },
        {
          icon: "🔋",
          label: "Storage",
          value: "87%",
          change: "Charged",
          style: { bottom: "28%", left: "5%" },
        },
        {
          icon: "📈",
          label: "Monthly Savings",
          value: "$14.2K",
          change: "+8.3%",
          style: { bottom: "30%", right: "4%" },
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...card.style,
            zIndex: 3,
            background: "rgba(15,20,35,0.8)",
            border: "1px solid rgba(249,115,22,0.15)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: 16,
            padding: "12px 16px",
            minWidth: 148,
            display: "none",
          } as React.CSSProperties}
          className="solaris-float-card"
        >
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.4)",
              marginBottom: 4,
              fontWeight: 500,
            }}
          >
            {card.icon} {card.label}
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {card.value}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#f97316",
              fontWeight: 600,
              marginTop: 2,
            }}
          >
            {card.change}
          </div>
        </div>
      ))}

      {/* Energy ring visual */}
      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "1px solid rgba(249,115,22,0.08)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -160,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          border: "1px solid rgba(249,115,22,0.05)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Dashboard preview card */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          marginTop: 60,
          width: "100%",
          maxWidth: 900,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            background: "rgba(15,20,35,0.7)",
            border: "1px solid rgba(249,115,22,0.15)",
            borderRadius: 24,
            padding: 24,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(249,115,22,0.06)",
          }}
        >
          {/* Fake browser chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 20,
              paddingBottom: 16,
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
            <div
              style={{
                marginLeft: 12,
                flex: 1,
                height: 22,
                borderRadius: 6,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>
                app.solarisplatform.io/dashboard
              </span>
            </div>
          </div>

          {/* Dashboard grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 16 }}>
            {[
              { label: "Active Panels", value: "12,480", icon: "☀️", color: "#f97316" },
              { label: "Today's Output", value: "8.4 MWh", icon: "⚡", color: "#fb923c" },
              { label: "Revenue Today", value: "$3,210", icon: "💰", color: "#fcd34d" },
              { label: "Efficiency Score", value: "96.3%", icon: "📊", color: "#f97316" },
            ].map((metric, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(249,115,22,0.06)",
                  border: "1px solid rgba(249,115,22,0.1)",
                  borderRadius: 12,
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 6 }}>{metric.icon}</div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: metric.color,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {metric.value}
                </div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Fake chart bars */}
          <div
            style={{
              background: "rgba(249,115,22,0.04)",
              border: "1px solid rgba(249,115,22,0.08)",
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
                Energy Output — Last 7 Days
              </span>
              <span style={{ fontSize: 11, color: "#f97316", fontWeight: 600 }}>
                +18.4% vs last week
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 8,
                height: 80,
              }}
            >
              {[55, 70, 48, 82, 90, 75, 96].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background:
                      i === 6
                        ? "linear-gradient(to top, #f97316, #fb923c)"
                        : "rgba(249,115,22,0.2)",
                    borderRadius: "4px 4px 0 0",
                    position: "relative",
                  }}
                >
                  {i === 6 && (
                    <div
                      style={{
                        position: "absolute",
                        top: -24,
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: 9,
                        color: "#f97316",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Today
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div
                  key={d}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    fontSize: 9,
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
