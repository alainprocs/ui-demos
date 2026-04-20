import { CheckCircle } from "lucide-react";

const VIOLET = "#8b5cf6";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For solo developers and side projects. No credit card needed.",
    features: [
      "10,000 errors/month",
      "3 team members",
      "7-day retention",
      "Slack & email alerts",
      "Basic stack trace analysis",
      "GitHub integration",
    ],
    cta: "Start for free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "per month",
    description: "For fast-moving teams that ship multiple times a day.",
    features: [
      "Unlimited errors",
      "15 team members",
      "90-day retention",
      "AI root-cause analysis",
      "Auto-remediation playbooks",
      "CI/CD regression detection",
      "Custom alert routing",
      "SLO tracking & error budgets",
    ],
    cta: "Start 14-day trial",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For orgs with strict compliance and multi-region requirements.",
    features: [
      "Unlimited everything",
      "Unlimited team members",
      "Unlimited retention",
      "Dedicated AI model",
      "SSO & SCIM provisioning",
      "HIPAA & SOC 2 Type II",
      "On-prem deployment option",
      "SLA with 99.99% uptime",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section style={{
      background: "#060410",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes helix-pricing-glow {
          0%, 100% { box-shadow: 0 0 40px rgba(139,92,246,0.25), 0 40px 80px rgba(0,0,0,0.5); }
          50% { box-shadow: 0 0 80px rgba(139,92,246,0.4), 0 40px 80px rgba(0,0,0,0.5); }
        }
        .helix-plan-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 0 50px rgba(139,92,246,0.7) !important;
        }
        .helix-plan-btn-outline:hover {
          border-color: rgba(139,92,246,0.5) !important;
          color: #c4b5fd !important;
          transform: translateY(-2px) !important;
        }
      `}</style>

      {/* Top separator radial */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#fff",
            margin: "0 0 16px",
          }}>
            Start free.{" "}
            <span style={{
              background: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Scale when you're ready.
            </span>
          </h2>
          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
            maxWidth: 420,
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            No hidden fees. No per-seat surprises. Cancel any time.
          </p>
        </div>

        {/* Plan cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          alignItems: "start",
        }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                background: plan.highlight
                  ? "linear-gradient(180deg, rgba(139,92,246,0.12) 0%, rgba(109,40,217,0.06) 100%)"
                  : "rgba(139,92,246,0.04)",
                border: plan.highlight
                  ? `1px solid rgba(139,92,246,0.4)`
                  : "1px solid rgba(139,92,246,0.12)",
                borderRadius: 24,
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
                animation: plan.highlight ? "helix-pricing-glow 4s ease-in-out infinite" : "none",
              }}
            >
              {/* Highlight glow bg */}
              {plan.highlight && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${VIOLET}, transparent)`,
                  pointerEvents: "none",
                }} />
              )}

              {/* Badge */}
              {plan.badge && (
                <div style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#fff",
                  background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                  borderRadius: 100,
                  padding: "4px 12px",
                  letterSpacing: "0.05em",
                  boxShadow: "0 0 16px rgba(139,92,246,0.5)",
                }}>
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div style={{
                fontSize: 13,
                fontWeight: 700,
                color: plan.highlight ? "#c4b5fd" : "rgba(255,255,255,0.5)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                <span style={{
                  fontSize: "clamp(2.2rem, 5vw, 3rem)",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 500,
                }}>
                  {plan.period}
                </span>
              </div>

              <p style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                margin: "0 0 28px",
              }}>
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href="#"
                className={plan.highlight ? "helix-plan-btn" : "helix-plan-btn-outline"}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "13px 24px",
                  borderRadius: 100,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  marginBottom: 28,
                  transition: "all 0.25s",
                  ...(plan.highlight ? {
                    background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                    color: "#fff",
                    boxShadow: "0 0 36px rgba(139,92,246,0.5)",
                  } : {
                    background: "transparent",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(139,92,246,0.25)",
                  }),
                }}
              >
                {plan.cta}
              </a>

              {/* Feature list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {plan.features.map((feat, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle
                      size={14}
                      style={{ color: plan.highlight ? VIOLET : "rgba(139,92,246,0.5)", flexShrink: 0 }}
                    />
                    <span style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.4,
                    }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: 13,
          color: "rgba(255,255,255,0.25)",
          lineHeight: 1.7,
        }}>
          All plans include unlimited integrations. Prices in USD. Annual billing saves 20%.
        </div>
      </div>
    </section>
  );
}
