const CYAN = "#00d4ff";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: 68,
        background: "rgba(2,4,8,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,212,255,0.08)",
      }}
    >
      <style>{`
        @keyframes nova-nav-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(0,212,255,0.5); }
          50% { text-shadow: 0 0 40px rgba(0,212,255,0.9); }
        }
        .nova-nav-link {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nova-nav-link:hover { color: rgba(255,255,255,0.9); }
        .nova-nav-cta:hover {
          background: ${CYAN} !important;
          color: #000 !important;
          box-shadow: 0 0 30px rgba(0,212,255,0.6) !important;
        }
      `}</style>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: `linear-gradient(135deg, ${CYAN}, #0090b3)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 20px rgba(0,212,255,0.4)`,
          animation: "nova-nav-glow 3s ease-in-out infinite",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="2" fill="#000" />
            <circle cx="8" cy="8" r="5" stroke="#000" strokeWidth="1.5" strokeDasharray="2 1.5" fill="none" />
            <circle cx="8" cy="8" r="7.5" stroke="rgba(0,0,0,0.5)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <span style={{
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: "#fff",
        }}>
          Nova
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {["Product", "Pricing", "Docs", "Blog", "Enterprise"].map((l) => (
          <a key={l} href="#" className="nova-nav-link">{l}</a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <a href="#" className="nova-nav-link">Sign in</a>
        <a
          href="#"
          className="nova-nav-cta"
          style={{
            padding: "9px 22px",
            borderRadius: 100,
            background: "transparent",
            border: `1px solid ${CYAN}`,
            color: CYAN,
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          Start free
        </a>
      </div>
    </nav>
  );
}
