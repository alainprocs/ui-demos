"use client";

import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  TrendingUp,
  Bookmark,
  Globe,
  Bell,
  RotateCcw,
  Shield,
} from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

const AMBER = "#f59e0b";

const features = [
  {
    Icon: Activity,
    title: "Real-time Cost Monitoring",
    desc: "Sub-second visibility into every dollar spent across all cloud accounts.",
  },
  {
    Icon: AlertTriangle,
    title: "Anomaly Detection",
    desc: "ML-powered spike detection catches runaway costs before they compound.",
  },
  {
    Icon: TrendingUp,
    title: "Auto-scaling Recommendations",
    desc: "Right-size every instance based on actual utilization patterns.",
  },
  {
    Icon: Bookmark,
    title: "Reserved Instance Optimizer",
    desc: "Maximize RI coverage with predictive commitment analysis.",
  },
  {
    Icon: Globe,
    title: "Multi-cloud Support",
    desc: "Unified view across AWS, GCP, and Azure in a single dashboard.",
  },
  {
    Icon: Bell,
    title: "Team Spending Alerts",
    desc: "Per-team budgets with Slack/email alerts before thresholds breach.",
  },
  {
    Icon: RotateCcw,
    title: "One-click Rollbacks",
    desc: "Instantly revert any automated change with full audit trail.",
  },
  {
    Icon: Shield,
    title: "Compliance Reporting",
    desc: "SOC2, ISO 27001, and FinOps-ready reports generated automatically.",
  },
];

// ── 3D Tilt card ────────────────────────────────────────────────
function FeatureCard({
  feat,
  mobile,
}: {
  feat: (typeof features)[0];
  mobile?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.03)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
  }, []);

  const { Icon } = feat;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: mobile ? "100%" : 280,
        flexShrink: 0,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(245,158,11,0.12)",
        padding: mobile ? "22px 18px" : "28px 24px",
        transition: "transform 0.12s ease, box-shadow 0.2s",
        cursor: "default",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(245,158,11,0.12), 0 0 0 1px rgba(245,158,11,0.2)`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(245,158,11,0.35)`;
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          border: `1px solid ${AMBER}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
          background: `${AMBER}0a`,
        }}
      >
        <Icon size={18} color={AMBER} />
      </div>
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.01em",
          marginBottom: 8,
        }}
      >
        {feat.title}
      </div>
      <p
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {feat.desc}
      </p>
      <div
        style={{
          marginTop: 18,
          height: 2,
          background: `linear-gradient(90deg, ${AMBER}, transparent)`,
          width: "40%",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

// ── Desktop: horizontal scroll tape ─────────────────────────────
function DesktopFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-45%"]);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#050508",
        padding: "120px 0",
        overflow: "hidden",
        position: "relative",
        minHeight: "160vh",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "20vh",
          paddingLeft: 24,
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            color: AMBER,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          Everything You Need
        </div>
        <div
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.03em",
            marginBottom: 48,
          }}
        >
          The complete FinOps platform.
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.div
            style={{
              x,
              display: "flex",
              gap: 16,
              paddingRight: 48,
              willChange: "transform",
            }}
          >
            {features.map((feat) => (
              <FeatureCard key={feat.title} feat={feat} />
            ))}
          </motion.div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to left, #050508, transparent)",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}

// ── Mobile: 2-column grid ────────────────────────────────────────
function MobileFeatures() {
  return (
    <section
      style={{
        background: "#050508",
        padding: "72px 20px",
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          color: AMBER,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Everything You Need
      </div>
      <div
        style={{
          fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-0.03em",
          marginBottom: 32,
        }}
      >
        The complete FinOps platform.
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
          >
            <FeatureCard feat={feat} mobile />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── Section ──────────────────────────────────────────────────────
export default function Features() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileFeatures /> : <DesktopFeatures />;
}
