"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const AMBER = "#f59e0b";

function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        setPos({ x: dx * strength, y: dy * strength });
      } else {
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [strength]);

  return { ref, pos };
}

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const magnet = useMagnet();
  const isMobile = useIsMobile();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, backdrop-filter 0.3s",
        background: scrolled || menuOpen ? "rgba(5,5,8,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245,158,11,0.12)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontWeight: 900,
              fontSize: "1.25rem",
              letterSpacing: "0.12em",
              color: "#fff",
            }}
          >
            ORBITA
          </span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: AMBER,
              boxShadow: `0 0 8px ${AMBER}`,
              display: "inline-block",
            }}
          />
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["Platform", "Pricing", "Docs", "Blog"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
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
                {label}
              </a>
            ))}
            <motion.button
              ref={magnet.ref}
              animate={{ x: magnet.pos.x, y: magnet.pos.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                background: AMBER,
                color: "#050508",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Request Access
            </motion.button>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "flex-end",
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#fff",
                transformOrigin: "center",
              }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              style={{
                display: "block",
                width: 18,
                height: 2,
                background: AMBER,
              }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#fff",
                transformOrigin: "center",
              }}
            />
          </button>
        )}
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid rgba(245,158,11,0.12)",
            }}
          >
            <div
              style={{
                padding: "16px 24px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {["Platform", "Pricing", "Docs", "Blog"].map((label, i) => (
                <motion.a
                  key={label}
                  href="#"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "block",
                  }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                style={{
                  marginTop: 16,
                  background: AMBER,
                  color: "#050508",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  padding: "14px 20px",
                  border: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  width: "100%",
                }}
              >
                Request Access
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
          height: 2,
          background: AMBER,
          boxShadow: `0 0 8px ${AMBER}`,
        }}
      />
    </header>
  );
}
