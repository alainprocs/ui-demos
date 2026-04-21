const CYAN = "#00d4ff";

const testimonials = [
  {
    quote: "We reduced MTTR from 47 minutes to 4. Nova caught a cascade failure 8 seconds before it hit production — our runbook auto-attached, the on-call had context before they even opened Slack.",
    author: "Priya Venkataraman",
    title: "VP of Engineering",
    company: "Meridian Systems",
    initials: "PV",
    companyColor: "#00d4ff",
    metric: "47 min → 4 min MTTR",
  },
  {
    quote: "We run 600+ microservices across AWS and GCP. Nova's multi-cloud topology view replaced three separate dashboards and two spreadsheets. Our SREs actually use it now — that alone is worth the contract.",
    author: "James Hargrove",
    title: "CTO",
    company: "Fastflow Labs",
    initials: "JH",
    companyColor: "#66e8ff",
    metric: "600+ services unified",
  },
  {
    quote: "The AI anomaly engine is frighteningly good. It learned our Black Friday traffic shape in week one and stopped paging us for normal load spikes entirely. 94% reduction in false-positive alerts.",
    author: "Amara Osei",
    title: "Staff SRE",
    company: "Convex Commerce",
    initials: "AO",
    companyColor: "#00a8cc",
    metric: "94% fewer false alerts",
  },
];

export default function Testimonials() {
  return (
    <section style={{
      position: "relative",
      background: "#020408",
      padding: "120px 40px",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes nova-testi-glow {
          0%, 100% { box-shadow: -2px 0 20px rgba(0,212,255,0.2); }
          50% { box-shadow: -2px 0 40px rgba(0,212,255,0.5), -4px 0 80px rgba(0,212,255,0.1); }
        }
        @keyframes nova-avatar-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,212,255,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(0,212,255,0); }
        }
      `}</style>

      {/* Background */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "80%",
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)",
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
            From the Trenches
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#fff",
            margin: 0,
            lineHeight: 1.05,
          }}>
            Teams that sleep better
            <br />
            <span style={{
              background: `linear-gradient(90deg, ${CYAN}, #66e8ff)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              because Nova never does.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              position: "relative",
              background: "rgba(0,212,255,0.025)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 20,
              border: "1px solid rgba(0,212,255,0.1)",
              padding: "32px 32px 32px 40px",
              overflow: "hidden",
              animation: `nova-testi-glow 3.5s ease-in-out ${i * 0.5}s infinite`,
            }}>
              {/* Glowing left border */}
              <div style={{
                position: "absolute",
                left: 0,
                top: "10%",
                bottom: "10%",
                width: 3,
                borderRadius: "0 3px 3px 0",
                background: `linear-gradient(to bottom, transparent, ${t.companyColor}, transparent)`,
                boxShadow: `0 0 12px ${t.companyColor}`,
              }} />

              {/* Quote marks */}
              <div style={{
                fontSize: 64,
                lineHeight: 0.8,
                color: `rgba(0,212,255,0.12)`,
                fontFamily: "Georgia, serif",
                marginBottom: 20,
                userSelect: "none",
              }}>
                &ldquo;
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: "0.97rem",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.75,
                margin: "0 0 28px",
              }}>
                {t.quote}
              </p>

              {/* Metric pill */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.15)",
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 800,
                color: CYAN,
                marginBottom: 24,
                fontFamily: "monospace",
              }}>
                {t.metric}
              </div>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.companyColor}33, ${t.companyColor}11)`,
                  border: `1px solid ${t.companyColor}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  color: t.companyColor,
                  flexShrink: 0,
                  animation: `nova-avatar-pulse 2.5s ease-in-out ${i * 0.4}s infinite`,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos row */}
        <div style={{
          marginTop: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          flexWrap: "wrap",
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>
            Trusted by engineering orgs at
          </div>
          {["Meridian", "Fastflow", "Convex", "Aurelion", "Vectorize", "Irongate"].map((co) => (
            <div key={co} style={{
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.18)",
            }}>
              {co}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
