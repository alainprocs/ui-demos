"use client";

import { useRef, useCallback } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { Check } from "lucide-react";

const AMBER = "#f59e0b";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    sub: "Up to $10k/mo cloud spend",
    highlight: false,
    features: [
      "1 cloud account",
      "7-day cost history",
      "Basic anomaly detection",
      "Email alerts",
      "Community support",
    ],
    cta: "Get started free",
  },
  {
    name: "Growth",
    price: "$299",
    period: "/mo",
    sub: "Up to $500k/mo cloud spend",
    highlight: true,
    features: [
      "Unlimited cloud accounts",
      "90-day cost history",
      "ML anomaly detection",
      "Slack + email alerts",
      "RI optimizer",
      "Team budgets",
      "One-click rollbacks",
      "Priority support",
    ],
    cta: "Start 14-day trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    sub: "Unlimited cloud spend",
    highlight: false,
    features: [
      "Everything in Growth",
      "SOC2 compliance reports",
      "Custom integrations",
      "Dedicated CSM",
      "SLA guarantee",
      "SSO / SAML",
    ],
    cta: "Contact sales",
  },
];

function MagneticButton({
  children,
  filled,
}: {
  children: React.ReactNode;
  filled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = ref.current!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        x.set(dx * 0.3);
        y.set(dy * 0.3);
      }
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{
        x,
        y,
        width: "100%",
        padding: "14px",
        background: filled ? AMBER : "transparent",
        color: filled ? "#050508" : "#fff",
        border: filled ? "none" : "1px solid rgba(255,255,255,0.2)",
        fontWeight: 700,
        fontSize: "0.8rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "box-shadow 0.2s",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={
        filled
          ? { boxShadow: `0 0 32px ${AMBER}66`, scale: 1.02 }
          : { scale: 1.02 }
      }
    >
      {children}
    </motion.button>
  );
}

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#050508",
        padding: "120px 24px",
        borderTop: "1px solid rgba(245,158,11,0.08)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.7rem",
            color: AMBER,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Pricing
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.03em",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Pay less than you save.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.45)",
            marginBottom: 64,
            fontSize: "1rem",
          }}
        >
          Most customers save 50–70× what they pay us. Every month.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.04)",
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: plan.highlight ? `rgba(245,158,11,0.06)` : "#050508",
                border: plan.highlight ? `1px solid ${AMBER}44` : "none",
                padding: "40px 32px",
                position: "relative",
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: AMBER,
                    boxShadow: `0 0 16px ${AMBER}`,
                  }}
                />
              )}

              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: AMBER,
                    color: "#050508",
                    fontSize: "0.6rem",
                    fontWeight: 900,
                    letterSpacing: "0.1em",
                    padding: "4px 8px",
                    textTransform: "uppercase",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                style={{
                  fontSize: "0.75rem",
                  color: plan.highlight ? AMBER : "rgba(255,255,255,0.45)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                {plan.name}
              </div>

              <div style={{ marginBottom: 6 }}>
                <span
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    color: "#fff",
                    fontFamily: "'Courier New', monospace",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {plan.period}
                </span>
              </div>

              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 32,
                  letterSpacing: "0.04em",
                }}
              >
                {plan.sub}
              </div>

              <MagneticButton filled={plan.highlight}>
                {plan.cta}
              </MagneticButton>

              <div
                style={{
                  marginTop: 28,
                  paddingTop: 28,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    <Check
                      size={14}
                      color={plan.highlight ? AMBER : "rgba(255,255,255,0.35)"}
                      strokeWidth={2.5}
                      style={{ flexShrink: 0 }}
                    />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
