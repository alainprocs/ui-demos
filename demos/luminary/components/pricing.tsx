"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

const tiers = [
  {
    name: "Starter",
    price: 0,
    period: "forever",
    desc: "Perfect for freelancers and solo creators getting started.",
    accent: "rgba(255,255,255,0.15)",
    textAccent: "rgba(255,255,255,0.7)",
    highlighted: false,
    features: [
      "3 active projects",
      "AI generation — 50 prompts/mo",
      "Basic version history",
      "1 collaborator",
      "PNG/SVG export",
      "Community support",
    ],
    cta: "Get started free",
  },
  {
    name: "Pro",
    price: 29,
    period: "per month",
    desc: "For professional designers who want the full creative OS experience.",
    accent: "linear-gradient(135deg, #ff4d6d, #ff8c42)",
    textAccent: "#ff4d6d",
    highlighted: true,
    features: [
      "Unlimited projects",
      "AI generation — unlimited",
      "Full version history + branching",
      "Up to 10 collaborators",
      "Code export (React, Vue, HTML)",
      "Design tokens & system",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Start Pro trial",
  },
  {
    name: "Enterprise",
    price: 99,
    period: "per seat/mo",
    desc: "For large teams needing SSO, compliance, and dedicated support.",
    accent: "rgba(167,139,250,0.25)",
    textAccent: "#a78bfa",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Unlimited collaborators",
      "SSO & SAML",
      "HIPAA / SOC 2 compliance",
      "Custom AI model training",
      "Dedicated success manager",
      "SLA guarantee",
      "Custom contract & billing",
    ],
    cta: "Contact sales",
  },
];

export default function Pricing() {
  const isMobile = useIsMobile();

  return (
    <section
      id="pricing"
      style={{
        padding: isMobile ? "80px 20px" : "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, transparent, #a78bfa)" }} />
        <span style={{ fontSize: 12, fontWeight: 700, color: "#a78bfa", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          Pricing
        </span>
        <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, #a78bfa, transparent)" }} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          fontWeight: 900,
          textAlign: "center",
          letterSpacing: "-0.04em",
          color: "#fff",
          marginBottom: 12,
        }}
      >
        Simple, transparent pricing
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.45)",
          fontSize: 16,
          maxWidth: 440,
          margin: "0 auto 64px",
          lineHeight: 1.65,
        }}
      >
        Start free. Upgrade when you need more power. No surprise bills, ever.
      </motion.p>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 16,
          alignItems: "start",
        }}
      >
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={!tier.highlighted ? { y: -4 } : {}}
            style={{
              position: "relative",
              borderRadius: 24,
              padding: tier.highlighted ? "32px 28px" : "28px 24px",
              border: tier.highlighted
                ? "1.5px solid rgba(255,77,109,0.5)"
                : "1px solid rgba(255,255,255,0.07)",
              background: tier.highlighted
                ? "rgba(255,77,109,0.07)"
                : "rgba(255,255,255,0.02)",
              boxShadow: tier.highlighted
                ? "0 0 60px rgba(255,77,109,0.15), inset 0 0 60px rgba(255,77,109,0.04)"
                : "none",
              transform: tier.highlighted && !isMobile ? "scale(1.04)" : "scale(1)",
              transition: "box-shadow 0.25s",
            }}
          >
            {/* Popular badge */}
            {tier.highlighted && (
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #ff4d6d, #ff8c42)",
                  borderRadius: 100,
                  padding: "4px 16px",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  whiteSpace: "nowrap",
                }}
              >
                <Zap size={10} fill="#fff" color="#fff" /> Most popular
              </div>
            )}

            {/* Name */}
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: tier.textAccent,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 16,
              }}
            >
              {tier.name}
            </div>

            {/* Price */}
            <div style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.05em",
                }}
              >
                {tier.price === 0 ? "Free" : `$${tier.price}`}
              </span>
              {tier.price > 0 && (
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    marginLeft: 6,
                  }}
                >
                  / {tier.period}
                </span>
              )}
            </div>

            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.6,
                marginBottom: 28,
              }}
            >
              {tier.desc}
            </p>

            {/* CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 20px",
                borderRadius: 100,
                background: tier.highlighted
                  ? "linear-gradient(135deg, #ff4d6d, #ff8c42)"
                  : "rgba(255,255,255,0.07)",
                border: tier.highlighted
                  ? "none"
                  : "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                marginBottom: 28,
                boxShadow: tier.highlighted
                  ? "0 0 24px rgba(255,77,109,0.35)"
                  : "none",
              }}
            >
              {tier.cta}
            </motion.a>

            {/* Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {tier.features.map((feat) => (
                <div
                  key={feat}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: tier.highlighted
                        ? "rgba(255,77,109,0.2)"
                        : "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <Check
                      size={10}
                      color={tier.highlighted ? "#ff4d6d" : "rgba(255,255,255,0.5)"}
                      strokeWidth={3}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.5,
                    }}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
