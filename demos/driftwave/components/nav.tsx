"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Waves } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.nav
        className="flex items-center justify-between w-full max-w-6xl px-5 py-3 rounded-2xl transition-all duration-300"
        animate={{
          backgroundColor: scrolled
            ? "rgba(8, 9, 10, 0.85)"
            : "rgba(8, 9, 10, 0)",
          borderColor: scrolled
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        }}
        style={{
          border: "1px solid",
          borderColor: scrolled ? "rgba(255,255,255,0.08)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <motion.div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
            }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Waves className="w-4 h-4 text-white" strokeWidth={2.5} />
          </motion.div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Driftwave
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm text-slate-400 rounded-lg transition-colors hover:text-white group"
              whileHover={{ color: "#ffffff" }}
            >
              <motion.span
                className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-200"
                layoutId="nav-hover"
              />
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:block text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            Sign in
          </a>
          <motion.a
            href="#"
            className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />
            Get started free
          </motion.a>
        </div>
      </motion.nav>
    </motion.header>
  );
}
