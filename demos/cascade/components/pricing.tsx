"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "For individuals and small projects.",
    features: ["5 active flows", "500 runs / month", "10 integrations", "Community support"],
    cta: "Get started",
    accent: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "per month",
    desc: "For growing teams that need more power.",
    features: ["Unlimited flows", "50,000 runs / month", "All 300+ integrations", "AI Flow Builder", "Priority support", "Audit logs"],
    cta: "Start free trial",
    accent: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large orgs with compliance needs.",
    features: ["Unlimited everything", "SLA guarantee", "SSO / SAML", "Dedicated support", "Custom contracts", "On-prem option"],
    cta: "Talk to sales",
    accent: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-4" style={{ background: "#04080a" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(16,185,129,0.1)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg">Start free. Scale when you're ready.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-7 flex flex-col gap-6 relative overflow-hidden"
              style={{
                background: plan.accent ? "rgba(16,185,129,0.08)" : "rgba(8,16,11,0.6)",
                border: plan.accent ? "1px solid rgba(16,185,129,0.4)" : "1px solid rgba(16,185,129,0.1)",
                ...(plan.accent ? { boxShadow: "0 0 50px rgba(16,185,129,0.12)" } : {}),
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.accent && (
                <div
                  className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "#10b981", color: "#fff" }}
                >
                  Popular
                </div>
              )}

              <div>
                <div className="text-sm font-semibold text-emerald-400 mb-1 uppercase tracking-wider">{plan.name}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 text-sm mb-1">/ {plan.period}</span>}
                </div>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                className="block text-center py-3 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: plan.accent ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : "rgba(16,185,129,0.1)",
                  color: plan.accent ? "#fff" : "#10b981",
                  border: plan.accent ? "none" : "1px solid rgba(16,185,129,0.2)",
                }}
                whileHover={{ scale: 1.02, ...(plan.accent ? { boxShadow: "0 4px 20px rgba(16,185,129,0.4)" } : {}) }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
