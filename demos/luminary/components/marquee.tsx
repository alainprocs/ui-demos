"use client";
import { motion } from "framer-motion";

const companies = [
  "Figma", "Notion", "Linear", "Vercel", "Stripe", "Loom",
  "Pitch", "Framer", "Arc", "Railway", "Raycast", "Codeium",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...companies, ...companies];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
        style={{
          display: "flex",
          gap: 40,
          width: "max-content",
        }}
      >
        {doubled.map((name, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 24px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: `hsl(${(i * 37) % 360}, 80%, 65%)`,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "-0.01em",
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      style={{
        padding: "80px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: 40,
          padding: "0 24px",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Trusted by teams at top companies
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
