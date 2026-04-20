import { Sun } from "lucide-react";

const links = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Community", "Status", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#030712",
        borderTop: "1px solid rgba(249,115,22,0.08)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px repeat(4, 1fr)",
            gap: 40,
            marginBottom: 56,
          }}
        >
          {/* Brand column */}
          <div>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                textDecoration: "none",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 12px rgba(249,115,22,0.3)",
                }}
              >
                <Sun size={16} color="#fff" strokeWidth={2.2} />
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 18,
                  color: "#fff",
                  letterSpacing: "-0.04em",
                }}
              >
                Solaris
              </span>
            </a>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              AI-powered solar energy analytics for portfolios of every size. Monitor, forecast, and optimize.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 16,
                }}
              >
                {category}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.35)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            © 2026 Solaris Technologies, Inc. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
