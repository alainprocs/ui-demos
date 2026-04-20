import { Zap } from "lucide-react";

const links = {
  Product: ["Features", "Integrations", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security", "DPA"],
};

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t" style={{ background: "#04080a", borderColor: "rgba(16,185,129,0.1)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}
              >
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Cascade</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              AI-native workflow automation for modern ops teams.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{group}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-200 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-xs text-slate-600">© 2026 Cascade Technologies, Inc. All rights reserved.</p>
          <p className="text-xs text-slate-700">A UI Demo by Alain Procs</p>
        </div>
      </div>
    </footer>
  );
}
