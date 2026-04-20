import { Activity } from "lucide-react";

const VIOLET = "#8b5cf6";
const links = ["Features", "Pricing", "Integrations", "Docs", "Status"];

export default function Nav() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        background: "rgba(6,4,16,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139,92,246,0.12)",
      }}
    >
      <style>{`
        .helix-nav-link:hover { color: #c4b5fd !important; }
        .helix-signin:hover { border-color: rgba(139,92,246,0.7) !important; color: #c4b5fd !important; }
        .helix-cta-btn:hover { box-shadow: 0 0 40px rgba(139,92,246,0.7) !important; transform: translateY(-1px); }
      `}</style>
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
        {/* Wordmark */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 20px ${VIOLET}55`,
            }}
          >
            <Activity size={18} color="#fff" strokeWidth={2.5} />
          </div>
          <span
            style={{
              fontWeight: 800,
              fontSize: 20,
              color: "#fff",
              letterSpacing: "-0.04em",
            }}
          >
            Helix
          </span>
        </a>

        {/* Desktop nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="helix-nav-link"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            className="helix-signin"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "9px 20px",
              borderRadius: 100,
              background: "transparent",
              border: `1px solid rgba(139,92,246,0.35)`,
              color: VIOLET,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
              marginRight: 4,
            }}
          >
            Sign in
          </a>
          <a
            href="#"
            className="helix-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "9px 20px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: `0 0 28px ${VIOLET}55`,
              transition: "all 0.2s",
            }}
          >
            Start free
          </a>
        </nav>
      </div>
    </header>
  );
}
