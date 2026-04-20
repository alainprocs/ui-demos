import { ArrowRight, Sun } from "lucide-react";

export default function CTA() {
  return (
    <section
      style={{
        padding: "120px 24px",
        background: "#030712",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Divider top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          maxWidth: 900,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(249,115,22,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Large faded sun icon */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <Sun size={400} color="#f97316" strokeWidth={0.5} />
      </div>

      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: 100,
            padding: "6px 18px",
            fontSize: 13,
            fontWeight: 600,
            color: "#f97316",
            marginBottom: 32,
          }}
        >
          <Sun size={13} strokeWidth={2.5} />
          Join 1,200+ solar operators already on Solaris
        </div>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            margin: "0 0 20px",
          }}
        >
          Start turning sunlight into
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #f97316, #fb923c, #fcd34d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            actionable intelligence
          </span>
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
          }}
        >
          Free to start. No credit card required. Connect your first solar site
          in under 5 minutes and start seeing insights immediately.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "16px 32px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow:
                "0 0 40px rgba(249,115,22,0.45), 0 4px 20px rgba(249,115,22,0.3)",
            }}
          >
            Start Free — No Card Needed
            <ArrowRight size={17} />
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "16px 32px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.75)",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Schedule a Demo
          </a>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            marginTop: 48,
            flexWrap: "wrap",
          }}
        >
          {["SOC 2 Type II", "GDPR Ready", "ISO 27001", "99.9% Uptime SLA"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.3)",
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#f97316",
                    opacity: 0.6,
                  }}
                />
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
