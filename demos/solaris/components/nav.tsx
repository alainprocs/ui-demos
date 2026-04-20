import { Sun } from "lucide-react";

const links = ["Features", "Pricing", "Integrations", "Docs"];

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
        background: "rgba(3,7,18,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(249,115,22,0.1)",
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
              background: "linear-gradient(135deg, #f97316, #fb923c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(249,115,22,0.4)",
            }}
          >
            <Sun size={18} color="#fff" strokeWidth={2.2} />
          </div>
          <span
            style={{
              fontWeight: 800,
              fontSize: 20,
              color: "#fff",
              letterSpacing: "-0.04em",
            }}
          >
            Solaris
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
              style={{
                color: "rgba(255,255,255,0.55)",
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
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 20px",
              borderRadius: 100,
              background: "transparent",
              border: "1px solid rgba(249,115,22,0.4)",
              color: "#f97316",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              marginRight: 4,
            }}
          >
            Sign in
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 20px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(249,115,22,0.35)",
            }}
          >
            Start Free
          </a>
        </nav>
      </div>
    </header>
  );
}
