import { Zap, Shield, BarChart3, Globe, GitBranch, Cpu } from "lucide-react"

const features = [
  { icon: Zap, title: "Smart Anycast Routing", body: "Every request hits the closest healthy edge node automatically. No DNS tricks, no manual rules — just speed.", stat: "<3ms routing decision" },
  { icon: Shield, title: "DDoS Absorption", body: "Absorb terabit-scale attacks at the edge before they reach your origin. No throttling, no degradation.", stat: "12 Tbps mitigation capacity" },
  { icon: Cpu, title: "Edge Compute", body: "Run your functions in 310 cities with cold-start times under 2ms. Deploy once, execute everywhere.", stat: "1.8ms avg cold start" },
  { icon: BarChart3, title: "Real-Time Analytics", body: "See request volume, cache hit rates, and latency percentiles across every PoP — updated every second.", stat: "1s analytics delay" },
  { icon: GitBranch, title: "Zero-Config CDN", body: "Point your domain. Atlas auto-discovers assets, sets cache rules, and pre-warms critical paths.", stat: "4-minute setup" },
  { icon: Globe, title: "Private Backbone", body: "Traffic between edge nodes never touches the public internet. Your data travels our own fiber.", stat: "99.999% backbone uptime" },
]

export default function Features() {
  return (
    <>
      <style>{`
        @keyframes atlas-border-shimmer {
          0%{background-position:-200% center}
          100%{background-position:200% center}
        }
        @keyframes atlas-icon-glow {
          0%,100%{box-shadow:0 0 12px #38bdf830}
          50%{box-shadow:0 0 28px #38bdf870}
        }
        .atlas-feat-card {
          position:relative;border-radius:16px;overflow:hidden;
          background:rgba(56,189,248,0.04);
          transition:transform .2s,background .2s;
        }
        .atlas-feat-card::before {
          content:"";position:absolute;inset:0;border-radius:16px;
          padding:1px;
          background:linear-gradient(90deg,#38bdf800,#38bdf860,#38bdf800);
          background-size:300% auto;
          -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor;mask-composite:exclude;
          animation:atlas-border-shimmer 3s linear infinite;
          pointer-events:none;
        }
        .atlas-feat-card:hover{transform:translateY(-4px);background:rgba(56,189,248,0.08)}
        .atlas-icon-wrap{animation:atlas-icon-glow 2.5s ease-in-out infinite}
      `}</style>
      <section style={{padding:"clamp(60px,10vw,120px) 5%",background:"#020c14"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"#38bdf8",marginBottom:14}}>Built for performance</div>
            <h2 style={{fontSize:"clamp(2rem,4vw,3.2rem)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",margin:"0 0 16px"}}>Everything fast. Nothing optional.</h2>
            <p style={{fontSize:"1rem",color:"rgba(255,255,255,0.45)",maxWidth:480,margin:"0 auto",lineHeight:1.65}}>Six layers of edge infrastructure working together so your app never blinks.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24}}>
            {features.map((f,i)=>(
              <div key={i} className="atlas-feat-card" style={{padding:"28px 28px 24px"}}>
                <div className="atlas-icon-wrap" style={{
                  width:44,height:44,borderRadius:12,
                  background:"rgba(56,189,248,0.12)",border:"1px solid rgba(56,189,248,0.25)",
                  display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,
                  animationDelay:`${i*0.35}s`,
                }}>
                  <f.icon size={20} color="#38bdf8" />
                </div>
                <h3 style={{fontSize:"1rem",fontWeight:700,color:"#fff",margin:"0 0 10px",letterSpacing:"-0.01em"}}>{f.title}</h3>
                <p style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.45)",lineHeight:1.6,margin:"0 0 18px"}}>{f.body}</p>
                <div style={{
                  display:"inline-block",fontSize:"0.65rem",fontWeight:700,
                  color:"#38bdf8",background:"rgba(56,189,248,0.1)",
                  border:"1px solid rgba(56,189,248,0.2)",borderRadius:99,
                  padding:"3px 10px",letterSpacing:"0.04em",
                }}>{f.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
