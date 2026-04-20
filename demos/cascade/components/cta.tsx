"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 px-4" style={{ background: "#030608" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-14 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(5,150,105,0.06) 100%)",
            border: "1px solid rgba(16,185,129,0.25)",
          }}
        >
          {/* glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative z-10">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.25)" }}
            >
              Get started today
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Your first workflow
              <br />
              <span style={{
                background: "linear-gradient(90deg, #10b981, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                ships in minutes.
              </span>
            </h2>

            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              No credit card. No setup fees. Just describe what you want to automate
              and Cascade handles the rest.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  boxShadow: "0 4px 24px rgba(16,185,129,0.4)",
                }}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 40px rgba(16,185,129,0.55)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Build your first flow
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Talk to sales →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
