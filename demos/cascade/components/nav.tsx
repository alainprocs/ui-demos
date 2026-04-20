"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Zap } from "lucide-react";

const links = [
  { label: "Product", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 20));
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className="flex items-center justify-between w-full max-w-6xl px-5 py-3 rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(4,10,8,0.88)" : "transparent",
          border: `1px solid ${scrolled ? "rgba(16,185,129,0.12)" : "transparent"}`,
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <a href="/" className="flex items-center gap-2.5">
          <motion.div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}
            whileHover={{ scale: 1.05, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </motion.div>
          <span className="text-white font-semibold text-lg tracking-tight">Cascade</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:block text-sm text-slate-400 hover:text-white transition-colors">
            Sign in
          </a>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl"
            style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Start free
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
