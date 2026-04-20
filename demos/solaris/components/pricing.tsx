import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For homeowners and small installers getting started.",
    features: [
      "Up to 50 kW capacity",
      "Real-time monitoring",
      "7-day data history",
      "Email alerts",
      "1 site",
      "Community support",
    ],
    cta: "Get started free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "per month",
    description: "For growing solar portfolios that demand more insight.",
    features: [
      "Up to 10 MW capacity",
      "AI forecasting (14-day)",
      "Unlimited data history",
      "Grid integration APIs",
      "Up to 50 sites",
      "ROI analytics & reports",
      "Priority support",
      "Custom alerts & webhooks",
    ],
    cta: "Start 14-day trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For utilities and large-scale portfolio operators.",
    features: [
      "Unlimited capacity",
      "Dedicated AI model tuning",
      "SCADA integration",
      "On-premise deployment",
      "SLA guarantee (99.99%)",
      "Custom contracts",
      "Dedicated success team",
      "Regulatory reporting",
    ],
    cta: "Talk to sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "120px 24px",
        background: "#030712",
        position: "relative",
      }}
    >
      {/* Divider line top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          maxWidth: 900,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)",
        }}
      />

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            Pricing
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
            }}
          >
            Simple, transparent pricing
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            Scale from a single rooftop to a continental grid — pay only for
            what you need.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                background: plan.popular
                  ? "rgba(249,115,22,0.07)"
                  : "rgba(255,255,255,0.02)",
                border: plan.popular
                  ? "1px solid rgba(249,115,22,0.4)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 24,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                position: "relative",
                overflow: "hidden",
                boxShadow: plan.popular
                  ? "0 0 60px rgba(249,115,22,0.1)"
                  : "none",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: 100,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Glow for popular */}
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "50%",
                    background:
                      "radial-gradient(ellipse at 80% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Plan name + description */}
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#f97316",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 4,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 44,
                      fontWeight: 900,
                      color: "#fff",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: 6,
                      }}
                    >
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.55,
                  }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features list */}
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  flex: 1,
                }}
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(249,115,22,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={10} color="#f97316" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 24px",
                  borderRadius: 14,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  background: plan.popular
                    ? "linear-gradient(135deg, #f97316, #ea580c)"
                    : "rgba(249,115,22,0.08)",
                  color: plan.popular ? "#fff" : "#f97316",
                  border: plan.popular
                    ? "none"
                    : "1px solid rgba(249,115,22,0.2)",
                  boxShadow: plan.popular
                    ? "0 4px 24px rgba(249,115,22,0.35)"
                    : "none",
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: 13,
            color: "rgba(255,255,255,0.25)",
          }}
        >
          All plans include SSL encryption, GDPR compliance, and 30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
