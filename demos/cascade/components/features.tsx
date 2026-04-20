"use client";

import { motion } from "framer-motion";
import { Brain, Plug, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Flow Builder",
    desc: "Describe your automation in plain English. Cascade's AI writes the logic, handles edge cases, and deploys in seconds — no code required.",
    accent: "#10b981",
  },
  {
    icon: Plug,
    title: "300+ Integrations",
    desc: "Salesforce, HubSpot, Notion, GitHub, Stripe, Postgres — if your team uses it, Cascade connects to it. Native two-way sync, not one-off webhooks.",
    accent: "#34d399",
  },
  {
    icon: Shield,
    title: "Enterprise-grade Security",
    desc: "SOC 2 Type II certified. All data encrypted in transit and at rest. Role-based access, audit logs, and SSO out of the box.",
    accent: "#6ee7b7",
  },
  {
    icon: BarChart3,
    title: "Real-time Observability",
    desc: "Every run logged. Every error explained. See exactly what triggered, what changed, and what ran — with full replay and rollback capability.",
    accent: "#10b981",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-4" style={{ background: "#04080a" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(16,185,129,0.1)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            Why Cascade
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            The automation layer<br />your stack was missing
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Most tools make you configure automations. Cascade makes them for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl p-7 overflow-hidden"
              style={{
                background: "rgba(10,20,14,0.6)",
                border: "1px solid rgba(16,185,129,0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ borderColor: `${f.accent}35`, boxShadow: `0 8px 32px ${f.accent}12` }}
            >
              {/* hover glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${f.accent}12, transparent 70%)`, transform: "translate(30%, -30%)" }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${f.accent}18`, border: `1px solid ${f.accent}30` }}
              >
                <f.icon className="w-5 h-5" style={{ color: f.accent }} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
