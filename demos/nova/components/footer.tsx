const CYAN = "#00d4ff";

const links = {
  Product: ["Features", "Pricing", "Changelog", "Status", "Roadmap"],
  Developers: ["Documentation", "API Reference", "SDKs", "Webhooks", "Open Source"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy", "Terms", "Security", "Compliance", "DPA"],
};

export default function Footer() {
  return (
    <footer style={{
      background: "#020408",
      borderTop: "1px solid rgba(0,212,255,0.08)",
      padding: "80px 40px 40px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 80, marginBottom: 60 }}>
          {/* Brand */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: `linear-gradient(135deg, ${CYAN}, #0090b3)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px rgba(0,212,255,0.3)`,
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="2" fill="#000" />
                  <circle cx="8" cy="8" r="5" stroke="#000" strokeWidth="1.5" strokeDasharray="2 1.5" fill="none" />
                </svg>
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.04em", color: "#fff" }}>Nova</span>
            </div>
            <p style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.7,
              maxWidth: 220,
              margin: "0 0 20px",
            }}>
              Infrastructure monitoring at the speed of light. Sub-2ms alerts, AI anomaly detection.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["X", "GH", "LI", "YT"].map((s) => (
                <a key={s} href="#" style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
            {Object.entries(links).map(([col, items]) => (
              <div key={col}>
                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}>
                  {col}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {items.map((item) => (
                    <a key={item} href="#" style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.35)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            © 2026 Nova Inc. All rights reserved.
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: "rgba(255,255,255,0.18)",
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 6px #22c55e",
            }} />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
