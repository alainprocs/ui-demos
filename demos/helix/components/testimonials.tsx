const VIOLET = "#8b5cf6";

const testimonials = [
  {
    quote: "We were losing $40K/month to a memory leak that kept slipping past our staging environment. Helix caught it in production in under 3 minutes on day one. I've never felt this kind of relief from a tool.",
    name: "Priya Nambiar",
    title: "VP of Engineering",
    company: "Finmark",
    initials: "PN",
    metric: "$40K/mo saved",
  },
  {
    quote: "Helix's AI-generated root cause reports have cut our mean-time-to-resolution from 47 minutes to 6 minutes. Our on-call rotation is finally sane. Engineers actually sleep at night now.",
    name: "James Wetherspoon",
    title: "Staff SRE",
    company: "Stripe (fmr.)",
    initials: "JW",
    metric: "47min → 6min MTTR",
  },
  {
    quote: "We evaluated Datadog, Sentry, and Honeycomb. Helix was the only one that didn't just show us errors — it told us why they were happening and opened a PR with the fix. That's a different product category entirely.",
    name: "Catalina Méndez",
    title: "CTO",
    company: "Recurso Labs",
    initials: "CM",
    metric: "3× faster postmortems",
  },
];

const logos = [
  "Vercel", "Linear", "PlanetScale", "Resend", "Clerk", "Neon",
];

export default function Testimonials() {
  return (
    <section style={{
      background: "#060410",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes helix-logo-drift {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.45; }
        }
        .helix-testimonial-card {
          transition: transform 0.25s, border-color 0.25s;
        }
        .helix-testimonial-card:hover {
          transform: translateY(-4px) !important;
          border-color: rgba(139,92,246,0.3) !important;
        }
      `}</style>

      {/* Background radial */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "100%",
        background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(139,92,246,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#fff",
            margin: "0 0 16px",
          }}>
            Trusted by teams who{" "}
            <span style={{
              background: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              can't afford downtime.
            </span>
          </h2>
          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            18,400 engineering teams ship with confidence because Helix has their back.
          </p>
        </div>

        {/* Testimonial grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
          marginBottom: 72,
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="helix-testimonial-card"
              style={{
                background: "rgba(139,92,246,0.04)",
                border: "1px solid rgba(139,92,246,0.14)",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: "absolute",
                top: 16,
                right: 20,
                fontSize: 80,
                lineHeight: 1,
                color: "rgba(139,92,246,0.08)",
                fontFamily: "Georgia, serif",
                fontWeight: 900,
                pointerEvents: "none",
              }}>
                &ldquo;
              </div>

              {/* Metric badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(52,211,153,0.1)",
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: 100,
                padding: "4px 12px",
                fontSize: 11,
                fontWeight: 700,
                color: "#34d399",
                marginBottom: 18,
                letterSpacing: "0.04em",
              }}>
                {t.metric}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                margin: "0 0 28px",
                fontStyle: "italic",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${VIOLET}, #7c3aed)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  boxShadow: `0 0 16px rgba(139,92,246,0.35)`,
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 28,
          }}>
            Trusted by engineers at
          </div>
          <div style={{
            display: "flex",
            gap: 48,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            {logos.map((logo, i) => (
              <span
                key={logo}
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "-0.04em",
                  animation: `helix-logo-drift ${3 + i * 0.4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
