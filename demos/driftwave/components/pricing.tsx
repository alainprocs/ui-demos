"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceDetail: "forever",
    description: "Perfect for solo designers and small side projects.",
    cta: "Get started free",
    ctaVariant: "ghost" as const,
    popular: false,
    features: [
      "5 video threads / month",
      "Up to 10 minutes per video",
      "Timestamped comments",
      "2 workspace members",
      "7-day video retention",
      "720p recording quality",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    priceDetail: "per seat / month",
    description:
      "For design teams who want to go fully async — no limits, no compromises.",
    cta: "Start Pro trial",
    ctaVariant: "primary" as const,
    popular: true,
    features: [
      "Unlimited video threads",
      "Up to 60 minutes per video",
      "AI-powered summaries",
      "Unlimited workspace members",
      "1-year video retention",
      "4K recording quality",
      "Figma & Notion integrations",
      "Analytics dashboard",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceDetail: "contact sales",
    description:
      "Custom security, compliance, and SLAs for large design organizations.",
    cta: "Talk to sales",
    ctaVariant: "ghost" as const,
    popular: false,
    features: [
      "Everything in Pro",
      "SSO & SAML 2.0",
      "Custom data retention",
      "SOC 2 Type II compliance",
      "Dedicated success manager",
      "Custom integrations via API",
      "Volume discounts",
      "SLA guarantees",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0b0e]" />
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#a78bfa",
            }}
          >
            Pricing
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5"
          >
            Simple pricing.{" "}
            <span className="gradient-text-cyan-violet">Zero surprises.</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-lg text-slate-400 max-w-xl"
          >
            Start free and scale as your team grows. No hidden fees,
            no per-seat surprises for viewers.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative flex flex-col rounded-2xl p-7 ${
                plan.popular ? "md:-mt-4 md:mb-0" : ""
              }`}
              style={{
                background: plan.popular
                  ? "linear-gradient(160deg, rgba(22,25,35,1) 0%, rgba(15,17,23,1) 100%)"
                  : "rgba(15,17,23,0.8)",
                border: plan.popular
                  ? "1px solid rgba(139,92,246,0.5)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: plan.popular
                  ? "0 0 0 1px rgba(139,92,246,0.2), 0 24px 64px rgba(139,92,246,0.2)"
                  : "none",
              }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <motion.div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
                      boxShadow: "0 4px 16px rgba(139,92,246,0.4)",
                    }}
                    animate={{ boxShadow: ["0 4px 16px rgba(139,92,246,0.4)", "0 4px 24px rgba(139,92,246,0.6)", "0 4px 16px rgba(139,92,246,0.4)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </motion.div>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? "gradient-text-cyan-violet" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500">{plan.priceDetail}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* CTA */}
              <motion.a
                href="#"
                className={`flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-sm font-semibold mb-7 ${
                  plan.ctaVariant === "primary"
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
                style={
                  plan.ctaVariant === "primary"
                    ? {
                        background:
                          "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
                        boxShadow: "0 4px 20px rgba(139,92,246,0.3)",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }
                }
                whileHover={
                  plan.ctaVariant === "primary"
                    ? { scale: 1.02, boxShadow: "0 4px 28px rgba(139,92,246,0.5)" }
                    : { scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }
                }
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>

              {/* Divider */}
              <div
                className="mb-6 h-px"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />

              {/* Feature list */}
              <ul className="flex flex-col gap-3.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: plan.popular
                          ? "rgba(6,182,212,0.15)"
                          : "rgba(255,255,255,0.07)",
                      }}
                    >
                      <Check
                        className="w-2.5 h-2.5"
                        style={{
                          color: plan.popular ? "#06b6d4" : "#64748b",
                        }}
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-sm text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-sm text-slate-600 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          All plans include a 14-day free trial on Pro. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
