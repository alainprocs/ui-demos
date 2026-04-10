import Link from "next/link";
import { demos } from "@/lib/demos";
import { ArrowUpRight, Layers } from "lucide-react";

const categoryColors: Record<string, string> = {
  SaaS: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Agency: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Startup: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function Gallery() {
  const sorted = [...demos].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      {/* Header */}
      <header className="border-b border-white/[0.06] px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
              <Layers size={16} className="text-white" />
            </div>
            <div>
              <span className="font-semibold text-white tracking-tight">UI Demos</span>
              <span className="text-white/30 mx-2">·</span>
              <span className="text-sm text-white/40">by Alain Procs</span>
            </div>
          </div>
          <a
            href="https://github.com/alainprocs/ui-demos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {demos.length} site{demos.length !== 1 ? "s" : ""} built · updated daily
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Daily UI{" "}
            <span className="gradient-text-cyan-violet">Builds</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            One new landing page every day, built with components from{" "}
            <a
              href="https://21st.dev/community/components"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
            >
              21st.dev
            </a>
            . React, Tailwind, Framer Motion.
          </p>
        </div>
      </section>

      {/* Grid */}
      <main className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {sorted.length === 0 ? (
            <p className="text-center text-white/30 py-20">No demos yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sorted.map((demo) => (
                <Link
                  key={demo.slug}
                  href={`/${demo.slug}`}
                  className="group glass-card rounded-2xl p-5 flex flex-col gap-4 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200"
                >
                  {/* Color swatch */}
                  <div
                    className="w-full h-28 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(ellipse at 30% 40%, ${demo.accent}40, transparent 60%),
                                   radial-gradient(ellipse at 70% 70%, ${demo.accent}20, transparent 50%),
                                   #0f1117`,
                    }}
                  >
                    <div className="w-full h-full rounded-xl dot-grid" />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-white text-sm leading-tight">
                          {demo.name}
                        </p>
                        <p className="text-xs text-white/40 mt-0.5">{demo.tagline}</p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0 mt-0.5"
                      />
                    </div>
                    <p className="text-xs text-white/30 leading-relaxed line-clamp-2">
                      {demo.description}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[demo.category]}`}
                      >
                        {demo.category}
                      </span>
                      <span className="text-[10px] text-white/25 font-mono">{demo.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-6 text-center">
        <p className="text-xs text-white/25">
          Built daily by{" "}
          <a
            href="https://github.com/alainprocs"
            className="text-white/40 hover:text-white/60 transition-colors"
          >
            Alain Procs
          </a>{" "}
          using{" "}
          <a
            href="https://21st.dev"
            className="text-white/40 hover:text-white/60 transition-colors"
          >
            21st.dev
          </a>{" "}
          components.
        </p>
      </footer>
    </div>
  );
}
