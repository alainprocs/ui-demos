"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

const links = ["Features", "Testimonials", "Pricing", "Enterprise"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        background: scrolled
          ? "rgba(6, 7, 20, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: "linear-gradient(135deg, #ff4d6d, #ff8c42)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={16} color="#fff" fill="#fff" />
          </div>
          <span
            style={{
              fontWeight: 800,
              fontSize: 18,
              color: "#fff",
              letterSpacing: "-0.03em",
            }}
          >
            Luminary
          </span>
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {links.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)")
                }
              >
                {l}
              </a>
            ))}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 20px",
                borderRadius: 100,
                background: "linear-gradient(135deg, #ff4d6d, #ff8c42)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 24px rgba(255,77,109,0.35)",
              }}
            >
              Start Free
            </motion.a>
          </nav>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: 4,
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "rgba(6,7,20,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {links.map((l) => (
              <a
                key={l}
                href="#"
                onClick={() => setOpen(false)}
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                {l}
              </a>
            ))}
            <a
              href="#"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                padding: "12px 20px",
                borderRadius: 100,
                background: "linear-gradient(135deg, #ff4d6d, #ff8c42)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                marginTop: 8,
              }}
            >
              Start Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
