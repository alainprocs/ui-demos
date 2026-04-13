"use client";
import { motion } from "framer-motion";
import { Zap, Twitter, Github, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "API Reference", "Community", "Templates", "Tutorials"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(0,0,0,0.3)",
        padding: "64px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 40,
            marginBottom: 56,
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 2" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
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
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: 220,
                marginBottom: 24,
              }}
            >
              The creative OS for designers who want to build beautiful things
              fast, together.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.5)")
                  }
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.4)")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © 2026 Luminary, Inc. All rights reserved.
          </span>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Crafted with{" "}
            <span style={{ color: "#ff4d6d" }}>♥</span>{" "}
            for the creative community
          </div>
        </div>
      </div>
    </footer>
  );
}
