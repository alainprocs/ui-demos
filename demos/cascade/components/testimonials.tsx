"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We replaced three separate automation tools with Cascade. Setup took one afternoon. The AI built our onboarding flow from a two-sentence description.",
    name: "Mara Lindqvist",
    role: "Head of RevOps · Segment",
    initials: "ML",
    color: "#10b981",
  },
  {
    quote: "The observability alone is worth the switch. I can see exactly what fired, why it fired, and replay any failed run. No more blind spots in our pipeline.",
    name: "Daniel Osei",
    role: "Engineering Lead · Ramp",
    initials: "DO",
    color: "#34d399",
  },
  {
    quote: "Cascade cut our RevOps automation backlog from 6 weeks to 3 days. Non-technical teammates are building flows themselves now.",
    name: "Priya Nair",
    role: "VP Operations · Deel",
    initials: "PN",
    color: "#6ee7b7",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4" style={{ background: "#030608" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-3">Customer stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Loved by operations teams everywhere
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-5"
              style={{
                background: "rgba(8,16,11,0.7)",
                border: "1px solid rgba(16,185,129,0.1)",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ borderColor: "rgba(16,185,129,0.22)", boxShadow: "0 8px 30px rgba(16,185,129,0.08)" }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: t.color, fontSize: 14 }}>★</span>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #059669)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
