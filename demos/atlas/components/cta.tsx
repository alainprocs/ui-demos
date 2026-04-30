export default function CTA() {
  return (
    <>
      <style>{`
        @keyframes atlas-orb-pulse {
          0%,100%{transform:scale(1);opacity:0.35}
          50%{transform:scale(1.15);opacity:0.6}
        }
        @keyframes atlas-orbit-1 {
          from{transform:rotate(0deg) translateX(130px) rotate(0deg)}
          to{transform:rotate(360deg) translateX(130px) rotate(-360deg)}
        }
        @keyframes atlas-orbit-2 {
          from{transform:rotate(180deg) translateX(100px) rotate(-180deg)}
          to{transform:rotate(540deg) translateX(100px) rotate(-540deg)}
        }
        @keyframes atlas-cta-btn-glow {
          0%,100%{box-shadow:0 0 28px #38bdf855}
          50%{box-shadow:0 0 60px #38bdf899,0 0 100px #38bdf833}
        }
        .atlas-cta-btn-main{animation:atlas-cta-btn-glow 2.2s ease-in-out infinite;transition:transform .15s}
        .atlas-cta-btn-main:hover{transform:translateY(-2px)}
      `}</style>
      <section style={{
        padding:"clamp(80px,12vw,140px) 5%",
        background:"linear-gradient(180deg,#010810 0%,#020c14 100%)",
        position:"relative",overflow:"hidden",textAlign:"center",
      }}>
        {/* Orb */}
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none"}}>
          <div style={{
            width:320,height:320,borderRadius:"50%",
            background:"radial-gradient(circle,#38bdf830 0%,transparent 70%)",
            animation:"atlas-orb-pulse 4s ease-in-out infinite",
          }} />
          <div style={{position:"absolute",top:"50%",left:"50%",width:8,height:8,marginLeft:-4,marginTop:-4}}>
            <div style={{position:"absolute",top:"50%",left:"50%",width:10,height:10,marginLeft:-5,marginTop:-5,animation:"atlas-orbit-1 8s linear infinite"}}>
              <div style={{width:10,height:10,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 14px #38bdf8"}} />
            </div>
            <div style={{position:"absolute",top:"50%",left:"50%",width:8,height:8,marginLeft:-4,marginTop:-4,animation:"atlas-orbit-2 5s linear infinite"}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:"#7dd3fc",boxShadow:"0 0 10px #7dd3fc"}} />
            </div>
          </div>
        </div>
        <div style={{position:"relative"}}>
          <h2 style={{
            fontSize:"clamp(2.4rem,5vw,4.5rem)",fontWeight:900,
            letterSpacing:"-0.04em",color:"#fff",margin:"0 0 20px",lineHeight:1.08,
          }}>Deploy to <span style={{color:"#38bdf8"}}>310 cities</span>.<br />Start in 60 seconds.</h2>
          <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.45)",margin:"0 auto 40px",maxWidth:480,lineHeight:1.65}}>
            Free tier includes 100GB bandwidth and 1M edge function invocations per month. No credit card required.
          </p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <a href="#" className="atlas-cta-btn-main" style={{
              fontSize:"1rem",fontWeight:700,color:"#000",
              background:"#38bdf8",borderRadius:10,padding:"16px 36px",textDecoration:"none",
            }}>Start deploying free →</a>
            <a href="#" style={{
              fontSize:"1rem",fontWeight:600,color:"rgba(255,255,255,0.65)",
              background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",
              borderRadius:10,padding:"16px 36px",textDecoration:"none",
            }}>Talk to solutions</a>
          </div>
          <p style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.28)",marginTop:20}}>
            Trusted by 18,000+ engineering teams · SOC 2 Type II · ISO 27001
          </p>
        </div>
      </section>
    </>
  )
}
