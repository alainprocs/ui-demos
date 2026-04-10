"use client";

import { motion } from "framer-motion";

const AMBER = "#f59e0b";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050508",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontWeight: 900,
              fontSize: "1rem",
              letterSpacing: "0.12em",
              color: "#fff",
            }}
          >
            ORBITA
          </span>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: AMBER,
              display: "inline-block",
            }}
          />
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {["Platform", "Pricing", "Docs", "Blog", "Careers", "Privacy", "Terms"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(255,255,255,0.3)")
              }
            >
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.06em",
          }}
        >
          © 2026 Orbita, Inc.
        </div>
      </div>
    </footer>
  );
}
