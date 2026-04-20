// Animated stack trace visualization section

const VIOLET = "#8b5cf6";

const frames = [
  { fn: "handleRequest", file: "api/server.ts", line: 204, active: false },
  { fn: "authenticate",  file: "auth/middleware.ts", line: 88,  active: false },
  { fn: "getSession",    file: "auth/session.ts", line: 142, active: true },  // root cause
  { fn: "redis.get",     file: "cache/client.ts", line: 31,  active: false },
];

const aiSteps = [
  { label: "Parsing exception", done: true, color: "#34d399" },
  { label: "Tracing call stack (4 frames)", done: true, color: "#34d399" },
  { label: "Identifying root cause", done: true, color: "#34d399" },
  { label: "Generating fix suggestion", done: false, color: VIOLET },
];

export default function StackTrace() {
  return (
    <section style={{
      background: "#060410",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes helix-trace-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.0), inset 0 0 0 0 rgba(139,92,246,0.0); }
          50% { box-shadow: 0 0 30px rgba(139,92,246,0.2), inset 0 0 20px rgba(139,92,246,0.05); }
        }
        @keyframes helix-progress {
          from { width: 0%; }
          to { width: 65%; }
        }
        @keyframes helix-type-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes helix-ai-ping {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>

      {/* Background accent */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(139,92,246,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}>
          {/* Left: copy */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: 100,
              padding: "5px 14px",
              fontSize: 12,
              fontWeight: 700,
              color: "#c4b5fd",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}>
              Stack Trace Analysis
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#fff",
              margin: "0 0 20px",
            }}>
              From raw exception
              <br />
              to{" "}
              <span style={{
                background: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                root cause in &lt;2s.
              </span>
            </h2>

            <p style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              margin: "0 0 32px",
              maxWidth: 460,
            }}>
              No more "grep through 40 services" debugging sessions. Helix walks every frame of your stack, correlates with recent deploys, and tells you exactly which line broke and why.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Identifies the offending commit automatically",
                "Links to the exact line in GitHub or GitLab",
                "Suggests a code fix with confidence score",
                "Opens a PR for trivial fixes with one click",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(52,211,153,0.15)",
                    border: "1px solid rgba(52,211,153,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated stack trace UI */}
          <div>
            <div style={{
              background: "rgba(8,5,22,0.95)",
              border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(139,92,246,0.08)",
              animation: "helix-trace-glow 4s ease-in-out infinite",
            }}>
              {/* Chrome bar */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 18px",
                borderBottom: "1px solid rgba(139,92,246,0.1)",
                background: "rgba(139,92,246,0.05)",
              }}>
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(248,113,113,0.5)" }} />
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(251,191,36,0.5)" }} />
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(52,211,153,0.5)" }} />
                <span style={{
                  marginLeft: 10,
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "monospace",
                }}>
                  TypeError — auth/session.ts:142
                </span>
              </div>

              {/* Error header */}
              <div style={{ padding: "16px 18px 12px", borderBottom: "1px solid rgba(139,92,246,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#f87171",
                    boxShadow: "0 0 8px #f87171",
                    flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#f87171", fontFamily: "monospace" }}>TypeError</span>
                </div>
                <div style={{ fontFamily: "monospace", fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                  Cannot read properties of undefined
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>(reading &apos;user&apos;)</span>
                </div>
              </div>

              {/* Stack frames */}
              <div style={{ padding: "12px 0" }}>
                <div style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0 18px 8px",
                }}>
                  Call Stack
                </div>
                {frames.map((frame, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 18px",
                    background: frame.active ? "rgba(139,92,246,0.12)" : "transparent",
                    borderLeft: frame.active ? `2px solid ${VIOLET}` : "2px solid transparent",
                    marginBottom: 2,
                  }}>
                    <span style={{
                      fontSize: 11,
                      fontFamily: "monospace",
                      color: frame.active ? "#c4b5fd" : "rgba(255,255,255,0.45)",
                      fontWeight: frame.active ? 700 : 400,
                      flex: 1,
                    }}>
                      {frame.fn}
                    </span>
                    <span style={{
                      fontSize: 10,
                      fontFamily: "monospace",
                      color: frame.active ? "rgba(139,92,246,0.8)" : "rgba(255,255,255,0.2)",
                    }}>
                      {frame.file}:{frame.line}
                    </span>
                    {frame.active && (
                      <span style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#fff",
                        background: VIOLET,
                        borderRadius: 4,
                        padding: "2px 6px",
                        letterSpacing: "0.05em",
                      }}>
                        ROOT CAUSE
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* AI analysis section */}
              <div style={{
                borderTop: "1px solid rgba(139,92,246,0.1)",
                padding: "16px 18px",
                background: "rgba(139,92,246,0.04)",
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}>
                  <div style={{ position: "relative" }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: VIOLET,
                    }} />
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: VIOLET,
                      animation: "helix-ai-ping 1.5s ease-out infinite",
                    }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#a78bfa" }}>Helix AI Analysis</span>
                </div>

                {aiSteps.map((step, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}>
                    <div style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: step.done ? "rgba(52,211,153,0.2)" : "rgba(139,92,246,0.15)",
                      border: `1px solid ${step.color}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {step.done ? (
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3L3 5L7 1" stroke="#34d399" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <div style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: VIOLET,
                          animation: "helix-dot-pulse 1s ease-in-out infinite",
                        }} />
                      )}
                    </div>
                    <span style={{
                      fontSize: 11,
                      fontFamily: "monospace",
                      color: step.done ? "rgba(255,255,255,0.5)" : "#c4b5fd",
                      fontWeight: step.done ? 400 : 600,
                    }}>
                      {step.label}
                      {!step.done && (
                        <span style={{ animation: "helix-type-cursor 0.8s ease-in-out infinite" }}>_</span>
                      )}
                    </span>
                  </div>
                ))}

                {/* Progress bar */}
                <div style={{
                  marginTop: 12,
                  background: "rgba(139,92,246,0.1)",
                  borderRadius: 4,
                  height: 4,
                  overflow: "hidden",
                }}>
                  <div style={{
                    height: "100%",
                    background: `linear-gradient(90deg, ${VIOLET}, #a78bfa)`,
                    borderRadius: 4,
                    animation: "helix-progress 3s ease-in-out infinite alternate",
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
