const pops = [
  {city:"New York",ms:"4.2ms",req:"2.1M",status:"healthy"},
  {city:"London",ms:"3.8ms",req:"1.8M",status:"healthy"},
  {city:"Singapore",ms:"5.1ms",req:"1.4M",status:"healthy"},
  {city:"São Paulo",ms:"6.3ms",req:"0.9M",status:"healthy"},
  {city:"Tokyo",ms:"4.6ms",req:"1.6M",status:"healthy"},
  {city:"Frankfurt",ms:"3.2ms",req:"1.2M",status:"healthy"},
  {city:"Sydney",ms:"7.1ms",req:"0.7M",status:"healthy"},
  {city:"Mumbai",ms:"5.8ms",req:"1.1M",status:"healthy"},
]

export default function Metrics() {
  return (
    <>
      <style>{`
        @keyframes atlas-bar-grow {
          0%{transform:scaleY(0)}
          100%{transform:scaleY(1)}
        }
        @keyframes atlas-counter-up {
          0%{opacity:0;transform:translateY(12px)}
          100%{opacity:1;transform:translateY(0)}
        }
        @keyframes atlas-pop-blink {
          0%,100%{opacity:1} 50%{opacity:0.3}
        }
        .atlas-pop-dot{animation:atlas-pop-blink 1.8s ease-in-out infinite}
        .atlas-metric-bar{animation:atlas-bar-grow .8s ease-out both;transform-origin:bottom}
        .atlas-stat-val{animation:atlas-counter-up .6s ease-out both}
      `}</style>
      <section style={{padding:"clamp(60px,10vw,120px) 5%",background:"linear-gradient(180deg,#020c14 0%,#010810 100%)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:60}}>
            <div style={{fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"#38bdf8",marginBottom:14}}>Live network</div>
            <h2 style={{fontSize:"clamp(1.8rem,3.5vw,3rem)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",margin:0}}>310 cities. All green.</h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
            {/* PoP table */}
            <div style={{
              background:"rgba(56,189,248,0.04)",border:"1px solid rgba(56,189,248,0.12)",
              borderRadius:16,overflow:"hidden",
            }}>
              <div style={{
                display:"flex",justifyContent:"space-between",alignItems:"center",
                padding:"16px 24px",borderBottom:"1px solid rgba(56,189,248,0.08)",
              }}>
                <span style={{fontSize:"0.75rem",fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.08em",textTransform:"uppercase"}}>Top Locations</span>
                <span style={{fontSize:"0.65rem",color:"#38bdf8",fontWeight:600}}>LIVE</span>
              </div>
              {pops.map((p,i)=>(
                <div key={i} style={{
                  display:"flex",alignItems:"center",justifyContent:"space-between",
                  padding:"12px 24px",borderBottom:i<pops.length-1?"1px solid rgba(56,189,248,0.05)":"none",
                }}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span className="atlas-pop-dot" style={{width:6,height:6,borderRadius:"50%",background:"#22c55e",display:"inline-block",animationDelay:`${i*0.22}s`}} />
                    <span style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.75)",fontWeight:500}}>{p.city}</span>
                  </div>
                  <div style={{display:"flex",gap:24,alignItems:"center"}}>
                    <span style={{fontSize:"0.78rem",color:"#38bdf8",fontWeight:700,fontVariantNumeric:"tabular-nums"}}>{p.ms}</span>
                    <span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.35)"}}>{p.req}/s</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Throughput chart */}
            <div style={{
              background:"rgba(56,189,248,0.04)",border:"1px solid rgba(56,189,248,0.12)",
              borderRadius:16,padding:"24px",display:"flex",flexDirection:"column",gap:24,
            }}>
              <div style={{fontSize:"0.75rem",fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.08em",textTransform:"uppercase"}}>24h Throughput</div>
              <div style={{flex:1,display:"flex",alignItems:"flex-end",gap:4,height:160}}>
                {[55,70,45,80,60,90,75,85,50,95,88,72,65,82,78,91,68,84,76,93,87,79,83,96].map((h,i)=>(
                  <div key={i} className="atlas-metric-bar" style={{
                    flex:1,borderRadius:"3px 3px 0 0",
                    height:`${h}%`,
                    background:i>18
                      ?"linear-gradient(180deg,#38bdf8,#0ea5e9)"
                      :"rgba(56,189,248,0.25)",
                    animationDelay:`${i*0.03}s`,
                  }} />
                ))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
                {[
                  {label:"Peak RPS",val:"28.4M"},
                  {label:"Cache hit rate",val:"94.7%"},
                  {label:"P99 latency",val:"18ms"},
                ].map(s=>(
                  <div key={s.label}>
                    <div className="atlas-stat-val" style={{fontSize:"1.3rem",fontWeight:800,color:"#38bdf8",letterSpacing:"-0.02em"}}>{s.val}</div>
                    <div style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.38)",marginTop:2}}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
