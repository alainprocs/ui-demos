"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Deep gradient bg */}
      <div className="absolute inset-0 bg-[#08090a]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, rgba(139,92,246,0.12) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(6,182,212,0.4), rgba(139,92,246,0.4), transparent)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          className="relative flex flex-col items-center text-center p-12 sm:p-16 rounded-3xl overflow-hidden"
          style={{
            background: "rgba(15,17,23,0.8)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.08), transparent)",
            }}
          />

          {/* Corner decorations */}
          <div
            className="absolute top-0 left-0 w-32 h-32 rounded-full blur-2xl"
            style={{
              background: "radial-gradient(circle, rgba(6,182,212,0.2), transparent)",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.2), transparent)",
              transform: "translate(50%, 50%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.25)",
                color: "#67e8f9",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              No credit card required
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Ready to{" "}
              <span className="gradient-text-cyan-violet">drift into async?</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 max-w-md leading-relaxed"
            >
              Join 500+ design teams who shipped faster by replacing meetings
              with Driftwave. Set up in 2 minutes.
            </motion.p>

            {/* Email form */}
            <motion.div variants={itemVariants} className="w-full max-w-md">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-emerald-400 font-semibold"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.25)",
                  }}
                >
                  <span>You&apos;re on the list!</span>
                  <span>We&apos;ll be in touch soon. 🎉</span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  <motion.button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white whitespace-nowrap"
                    style={{
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
                      boxShadow: "0 4px 20px rgba(139,92,246,0.3)",
                    }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 4px 32px rgba(139,92,246,0.5)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Get early access
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Trust notes */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 text-xs text-slate-600"
            >
              {[
                "Free 14-day Pro trial",
                "No credit card needed",
                "Cancel anytime",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "#06b6d4" }}
                  />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
