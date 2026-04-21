import { Activity, Cpu, MemoryStick, Wifi, Server } from "lucide-react";

const CYAN = "#00d4ff";

const services = [
  { name: "api-gateway", latency: "1.1ms", status: "healthy", delay: "0s" },
  { name: "auth-service", latency: "0.8ms", status: "healthy", delay: "0.2s" },
  { name: "postgres-primary", latency: "2.4ms", status: "healthy", delay: "0.4s" },
  { name: "redis-cluster", latency: "0.3ms", status: "healthy", delay: "0.6s" },
  { name: "ml-inference", latency: "4.7ms", status: "healthy", delay: "0.8s" },
];

// Sparkline bar heights (CPU)
const cpuBars = [40, 55, 48, 72, 61, 45, 68, 80, 55, 42, 58, 73, 65, 50, 44, 60, 70, 55, 48, 65];
// Memory bars
const memBars = [60, 62, 61, 63, 65, 64, 66, 68, 67, 66, 70, 72, 71, 73, 74, 73, 75, 74, 72, 76];
// Network bars
const netBars = [20, 45, 30, 80, 55, 35, 90, 60, 25, 50, 70, 40, 85, 30, 55, 65, 45, 75, 50, 35];

export default function Dashboard() {
  return (
    <section style={{
      position: "relative",
      background: "#020408",
      padding: "0 40px 120px",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes nova-bar-cpu-1 {
          0%, 100% { height: 40%; }
          25% { height: 75%; }
          50% { height: 55%; }
          75% { height: 85%; }
        }
        @keyframes nova-bar-cpu-2 {
          0%, 100% { height: 65%; }
          33% { height: 40%; }
          66% { height: 80%; }
        }
        @keyframes nova-bar-cpu-3 {
          0%, 100% { height: 50%; }
          20% { height: 85%; }
          60% { height: 35%; }
        }
        @keyframes nova-bar-mem-1 {
          0%, 100% { height: 65%; }
          50% { height: 78%; }
        }
        @keyframes nova-bar-mem-2 {
          0%, 100% { height: 72%; }
          40% { height: 60%; }
          80% { height: 80%; }
        }
        @keyframes nova-bar-net-1 {
          0%, 100% { height: 20%; }
          15% { height: 90%; }
          30% { height: 35%; }
          60% { height: 75%; }
          80% { height: 25%; }
        }
        @keyframes nova-bar-net-2 {
          0%, 100% { height: 55%; }
          25% { height: 15%; }
          50% { height: 85%; }
          75% { height: 40%; }
        }
        @keyframes nova-pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }
        @keyframes nova-scanline-move {
          0% { transform: translateY(-2px); }
          100% { transform: translateY(100%); }
        }
        @keyframes nova-live-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes nova-dash-glow {
          0%, 100% { box-shadow: 0 0 60px rgba(0,212,255,0.06), 0 40px 80px rgba(0,0,0,0.6); }
          50% { box-shadow: 0 0 100px rgba(0,212,255,0.1), 0 40px 80px rgba(0,0,0,0.6); }
        }
        @keyframes nova-value-pulse {
          0%, 100% { color: ${CYAN}; }
          50% { color: #66e8ff; }
        }
      `}</style>

      {/* Section label */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
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
          Live Dashboard
        </div>
        <h2 style={{
          fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "#fff",
          margin: "0 0 16px",
          lineHeight: 1.05,
        }}>
          Everything running.
          <br />
          <span style={{
            background: `linear-gradient(90deg, ${CYAN}, #66e8ff)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            All at once.
          </span>
        </h2>
        <p style={{
          fontSize: "1.05rem",
          color: "rgba(255,255,255,0.38)",
          maxWidth: 500,
          margin: "0 auto",
          lineHeight: 1.7,
        }}>
          One pane. Every service, every metric, every millisecond.
        </p>
      </div>

      {/* Dashboard panel */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "rgba(0,212,255,0.03)",
          border: "1px solid rgba(0,212,255,0.12)",
          borderRadius: 24,
          overflow: "hidden",
          animation: "nova-dash-glow 4s ease-in-out infinite",
          position: "relative",
        }}>
          {/* Scanline overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,255,0.008) 3px, rgba(0,212,255,0.008) 4px)",
            pointerEvents: "none",
            zIndex: 10,
          }} />

          {/* Top bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 24px",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
            background: "rgba(0,212,255,0.03)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(248,113,113,0.5)" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(251,191,36,0.5)" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(52,211,153,0.5)" }} />
              <span style={{
                marginLeft: 12,
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                fontFamily: "monospace",
              }}>
                nova — prod-us-east-1 — infrastructure overview
              </span>
            </div>
            {/* LIVE badge */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 800,
              color: "#ef4444",
              letterSpacing: "0.1em",
            }}>
              <span style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#ef4444",
                display: "inline-block",
                animation: "nova-live-blink 1s ease-in-out infinite",
                boxShadow: "0 0 8px #ef4444",
              }} />
              LIVE
            </div>
          </div>

          {/* Dashboard body */}
          <div style={{ display: "flex", gap: 0 }}>
            {/* Sidebar */}
            <div style={{
              width: 280,
              borderRight: "1px solid rgba(0,212,255,0.08)",
              padding: "20px 0",
              flexShrink: 0,
            }}>
              <div style={{
                padding: "0 20px 12px",
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                Services
              </div>
              {services.map((svc, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 20px",
                  borderBottom: "1px solid rgba(0,212,255,0.05)",
                  transition: "background 0.2s",
                }}>
                  {/* Pulse dot */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 6px #22c55e",
                      animation: `nova-pulse-dot 2s ease-in-out ${svc.delay} infinite`,
                    }} />
                  </div>
                  {/* Name */}
                  <span style={{
                    flex: 1,
                    fontSize: 13,
                    fontFamily: "monospace",
                    color: "rgba(255,255,255,0.7)",
                  }}>
                    {svc.name}
                  </span>
                  {/* Latency */}
                  <span style={{
                    fontSize: 12,
                    fontFamily: "monospace",
                    color: CYAN,
                    fontWeight: 700,
                    animation: "nova-value-pulse 3s ease-in-out infinite",
                    animationDelay: svc.delay,
                  }}>
                    {svc.latency}
                  </span>
                </div>
              ))}

              {/* System metrics */}
              <div style={{ padding: "20px 20px 0" }}>
                {[
                  { label: "CPU avg", value: "34%", color: CYAN },
                  { label: "Memory", value: "71%", color: "#f59e0b" },
                  { label: "Disk I/O", value: "12%", color: "#22c55e" },
                  { label: "Net out", value: "2.1 GB/s", color: "#a78bfa" },
                ].map((m, i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{m.label}</span>
                    <span style={{ fontSize: 12, fontFamily: "monospace", fontWeight: 700, color: m.color }}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Charts area */}
            <div style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Chart row 1: CPU + Memory */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
                {/* CPU Sparkline */}
                <div style={{
                  background: "rgba(0,212,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  borderRadius: 14,
                  padding: "16px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <Cpu size={14} style={{ color: CYAN }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>CPU Usage</span>
                    <span style={{ marginLeft: "auto", fontSize: 14, fontWeight: 900, color: CYAN, fontFamily: "monospace" }}>34%</span>
                  </div>
                  {/* Sparkline bars */}
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 60 }}>
                    {cpuBars.map((h, i) => (
                      <div key={i} style={{
                        flex: 1,
                        borderRadius: 2,
                        background: `linear-gradient(to top, ${CYAN}, rgba(0,212,255,0.3))`,
                        animation: i % 3 === 0 ? `nova-bar-cpu-1 ${2 + (i % 3) * 0.5}s ease-in-out ${i * 0.1}s infinite` :
                                   i % 3 === 1 ? `nova-bar-cpu-2 ${2.5 + (i % 4) * 0.3}s ease-in-out ${i * 0.15}s infinite` :
                                                 `nova-bar-cpu-3 ${3 + (i % 5) * 0.2}s ease-in-out ${i * 0.08}s infinite`,
                        height: `${h}%`,
                        opacity: 0.7 + (i / cpuBars.length) * 0.3,
                      }} />
                    ))}
                  </div>
                </div>

                {/* Memory Sparkline */}
                <div style={{
                  background: "rgba(0,212,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  borderRadius: 14,
                  padding: "16px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <MemoryStick size={14} style={{ color: "#f59e0b" }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Memory</span>
                    <span style={{ marginLeft: "auto", fontSize: 14, fontWeight: 900, color: "#f59e0b", fontFamily: "monospace" }}>71%</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 60 }}>
                    {memBars.map((h, i) => (
                      <div key={i} style={{
                        flex: 1,
                        borderRadius: 2,
                        background: "linear-gradient(to top, #f59e0b, rgba(245,158,11,0.3))",
                        animation: i % 2 === 0 ? `nova-bar-mem-1 ${3 + (i % 4) * 0.4}s ease-in-out ${i * 0.12}s infinite` :
                                                  `nova-bar-mem-2 ${2.8 + (i % 3) * 0.3}s ease-in-out ${i * 0.1}s infinite`,
                        height: `${h}%`,
                        opacity: 0.6 + (i / memBars.length) * 0.4,
                      }} />
                    ))}
                  </div>
                </div>

                {/* Network Sparkline */}
                <div style={{
                  background: "rgba(0,212,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  borderRadius: 14,
                  padding: "16px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <Wifi size={14} style={{ color: "#a78bfa" }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Network I/O</span>
                    <span style={{ marginLeft: "auto", fontSize: 14, fontWeight: 900, color: "#a78bfa", fontFamily: "monospace" }}>2.1 GB/s</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 60 }}>
                    {netBars.map((h, i) => (
                      <div key={i} style={{
                        flex: 1,
                        borderRadius: 2,
                        background: "linear-gradient(to top, #a78bfa, rgba(167,139,250,0.3))",
                        animation: i % 2 === 0 ? `nova-bar-net-1 ${1.8 + (i % 5) * 0.3}s ease-in-out ${i * 0.07}s infinite` :
                                                  `nova-bar-net-2 ${2.2 + (i % 4) * 0.4}s ease-in-out ${i * 0.09}s infinite`,
                        height: `${h}%`,
                        opacity: 0.6 + (i / netBars.length) * 0.4,
                      }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Incident timeline / event log */}
              <div style={{
                background: "rgba(0,212,255,0.02)",
                border: "1px solid rgba(0,212,255,0.08)",
                borderRadius: 14,
                padding: "16px 20px",
              }}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}>
                  Recent Events
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { time: "now", event: "Deploy complete: api-gateway v2.41.0", type: "success", color: "#22c55e" },
                    { time: "2m ago", event: "Auto-scaled: ml-inference +2 replicas (load spike)", type: "info", color: CYAN },
                    { time: "8m ago", event: "Anomaly resolved: redis latency spike — 847ms → 0.3ms", type: "resolved", color: "#22c55e" },
                    { time: "14m ago", event: "Alert fired: p99 latency > 200ms on auth-service", type: "warn", color: "#f59e0b" },
                    { time: "14m ago", event: "PagerDuty notified: @sre-oncall-primary", type: "info", color: "rgba(255,255,255,0.3)" },
                  ].map((ev, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 12,
                      fontFamily: "monospace",
                    }}>
                      <span style={{ color: "rgba(255,255,255,0.2)", minWidth: 50, flexShrink: 0 }}>{ev.time}</span>
                      <div style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: ev.color,
                        flexShrink: 0,
                        boxShadow: `0 0 6px ${ev.color}`,
                      }} />
                      <span style={{ color: "rgba(255,255,255,0.55)" }}>{ev.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
