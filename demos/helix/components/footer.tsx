import { Activity } from "lucide-react";

const VIOLET = "#8b5cf6";

const links = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Status Page"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Community", "Migration Guide", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export default function Footer() {
  return (
    <footer style={{
      background: "#060410",
      borderTop: "1px solid rgba(139,92,246,0.1)",
      padding: "64px 24px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "220px repeat(4, 1fr)",
          gap: 40,
          marginBottom: 56,
        }}>
          {/* Brand column */}
          <div>
            <a href="#" style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              textDecoration: "none",
              marginBottom: 14,
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 14px rgba(139,92,246,0.4)`,
              }}>
                <Activity size={16} color="#fff" strokeWidth={2.5} />
              </div>
              <span style={{
                fontWeight: 800,
                fontSize: 18,
                color: "#fff",
                letterSpacing: "-0.04em",
              }}>
                Helix
              </span>
            </a>
            <p style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.6,
              margin: "0 0 20px",
            }}>
              AI-powered error tracking and observability. Catch errors before your users do.
            </p>
            {/* Status pill */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.2)",
              borderRadius: 100,
              padding: "5px 12px",
              fontSize: 11,
              fontWeight: 600,
              color: "#34d399",
            }}>
              <div style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 6px #34d399",
              }} />
              All systems operational
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: "rgba(255,255,255,0.45)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 16,
              }}>
                {category}
              </div>
              <ul style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.3)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            © 2026 Helix Technologies, Inc. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social) => (
              <a key={social} href="#" style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.2)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}>
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
