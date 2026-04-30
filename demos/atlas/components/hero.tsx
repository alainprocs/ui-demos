export default function Hero() {
  const nodes = [
    {x:"18%",y:"32%",delay:"0s",label:"NYC"},
    {x:"28%",y:"55%",delay:"0.4s",label:"SAO"},
    {x:"47%",y:"22%",delay:"0.8s",label:"LON"},
    {x:"52%",y:"38%",delay:"1.2s",label:"FRA"},
    {x:"58%",y:"28%",delay:"0.3s",label:"STO"},
    {x:"63%",y:"48%",delay:"0.9s",label:"DXB"},
    {x:"72%",y:"35%",delay:"0.5s",label:"MUM"},
    {x:"80%",y:"30%",delay:"1.4s",label:"SIN"},
    {x:"85%",y:"22%",delay:"0.7s",label:"TYO"},
    {x:"88%",y:"40%",delay:"1.1s",label:"SYD"},
    {x:"22%",y:"28%",delay:"1.6s",label:"ORD"},
    {x:"14%",y:"42%",delay:"0.2s",label:"LAX"},
    {x:"75%",y:"52%",delay:"1.3s",label:"JKT"},
  ]

  return (
    <>
      <style>{`
        @keyframes atlas-hex-drift {
          0%{background-position:0 0}
          100%{background-position:60px 104px}
        }
        @keyframes atlas-node-pulse {
          0%,100%{transform:scale(1);opacity:0.9}
          50%{transform:scale(1.5);opacity:0.4}
        }
        @keyframes atlas-node-ring {
          0%{transform:scale(1);opacity:0.6}
          100%{transform:scale(3.5);opacity:0}
        }
        @keyframes atlas-line-flow {
          0%{stroke-dashoffset:200}
          100%{stroke-dashoffset:0}
        }
        @keyframes atlas-headline-shimmer {
          0%,100%{background-position:0% 50%}
          50%{background-position:100% 50%}
        }
        @keyframes atlas-pill-float {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-6px)}
        }
        @keyframes atlas-cta-glow {
          0%,100%{box-shadow:0 0 24px #38bdf844,0 0 48px #38bdf820}
          50%{box-shadow:0 0 48px #38bdf888,0 0 80px #38bdf840}
        }
        @keyframes atlas-scan {
          0%{transform:translateY(-100%);opacity:0}
          10%{opacity:1}
          90%{opacity:1}
          100%{transform:translateY(100vh);opacity:0}
        }
        @keyframes atlas-blink {
          0%,100%{opacity:1}
          50%{opacity:0.2}
        }
        .atlas-headline {
          background:linear-gradient(90deg,#fff 0%,#38bdf8 40%,#7dd3fc 60%,#fff 100%);
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:atlas-headline-shimmer 4s ease-in-out infinite;
        }
        .atlas-pill { animation:atlas-pill-float 3.2s ease-in-out infinite; }
        .atlas-pill:nth-child(2){ animation-delay:.8s }
        .atlas-pill:nth-child(3){ animation-delay:1.6s }
        .atlas-cta-primary { animation:atlas-cta-glow 2.4s ease-in-out infinite; transition:transform .15s; }
        .atlas-cta-primary:hover { transform:translateY(-2px); }
        .atlas-node-dot { animation:atlas-node-pulse 2s ease-in-out infinite; }
        .atlas-node-ring { animation:atlas-node-ring 2s ease-out infinite; }
        .atlas-blink { animation:atlas-blink 1.1s step-end infinite; }
      `}</style>

      <section style={{
        minHeight:"100vh",paddingTop:64,
        background:"#020c14",
        position:"relative",overflow:"hidden",
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      }}>
        {/* Hex grid drift */}
        <div style={{
          position:"absolute",inset:0,
          backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpath d='M30 2L58 17v30L30 62 2 47V17z' fill='none' stroke='%2338bdf808' strokeWidth='1'/%3E%3Cpath d='M30 54L58 69v30L30 114 2 99V69z' fill='none' stroke='%2338bdf808' strokeWidth='1'/%3E%3C/svg%3E")`,
          animation:"atlas-hex-drift 18s linear infinite",
          pointerEvents:"none",
        }} />

        {/* Radial glow */}
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% 50%,#38bdf81a 0%,transparent 70%)",pointerEvents:"none"}} />
        <div style={{position:"absolute",top:0,left:"20%",width:"60%",height:"1px",background:"linear-gradient(90deg,transparent,#38bdf830,transparent)"}} />

        {/* Scan beam */}
        <div style={{
          position:"absolute",left:0,right:0,height:2,
          background:"linear-gradient(90deg,transparent,#38bdf866,transparent)",
          animation:"atlas-scan 7s ease-in-out infinite",
          pointerEvents:"none",
        }} />

        {/* Edge network map */}
        <div style={{
          position:"relative",width:"min(860px,92vw)",height:"clamp(220px,30vw,340px)",
          marginBottom:48,
        }}>
          <svg viewBox="0 0 860 340" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
            {/* Landmass silhouettes */}
            <path d="M60 80 Q100 60 160 70 Q200 65 230 90 Q240 110 220 130 Q190 150 160 140 Q120 145 90 130 Q55 110 60 80Z" fill="#38bdf808" stroke="#38bdf815" strokeWidth="1"/>
            <path d="M60 150 Q80 140 100 155 Q115 170 105 190 Q90 205 70 195 Q52 180 60 150Z" fill="#38bdf808" stroke="#38bdf815" strokeWidth="1"/>
            <path d="M320 60 Q380 50 420 70 Q450 80 460 110 Q465 140 445 160 Q420 180 390 175 Q355 178 335 160 Q310 140 308 110 Q305 80 320 60Z" fill="#38bdf808" stroke="#38bdf815" strokeWidth="1"/>
            <path d="M490 90 Q540 75 600 80 Q660 78 700 100 Q730 115 735 145 Q740 175 720 200 Q695 225 660 230 Q610 240 570 225 Q530 215 505 190 Q480 165 478 135 Q476 105 490 90Z" fill="#38bdf808" stroke="#38bdf815" strokeWidth="1"/>
            <path d="M620 250 Q660 245 700 260 Q730 275 735 300 Q730 320 700 328 Q660 335 625 320 Q600 308 598 285 Q597 260 620 250Z" fill="#38bdf808" stroke="#38bdf815" strokeWidth="1"/>
            <path d="M740 70 Q800 60 840 80 Q860 100 858 130 Q855 155 835 170 Q805 185 770 178 Q738 168 730 142 Q723 112 740 70Z" fill="#38bdf808" stroke="#38bdf815" strokeWidth="1"/>
            {/* Connection lines */}
            {[
              [155,100,400,95],[400,95,448,135],[155,100,70,185],[448,135,572,143],
              [572,143,688,100],[688,100,800,100],[448,135,190,50],[572,143,800,100],
              [688,100,660,270],[190,50,400,95],
            ].map(([x1,y1,x2,y2],i)=>(
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.25"
                strokeDasharray="6 8"
                style={{animation:`atlas-line-flow ${3+i*0.4}s linear infinite`,animationDelay:`${i*0.3}s`}}
              />
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map((n,i)=>(
            <div key={i} style={{position:"absolute",left:n.x,top:n.y,transform:"translate(-50%,-50%)"}}>
              <div className="atlas-node-ring" style={{
                position:"absolute",inset:-6,borderRadius:"50%",
                border:"1px solid #38bdf8",animationDelay:n.delay,
              }} />
              <div className="atlas-node-dot" style={{
                width:8,height:8,borderRadius:"50%",background:"#38bdf8",
                boxShadow:"0 0 12px #38bdf8cc",animationDelay:n.delay,
              }} />
              <span style={{
                position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",
                fontSize:"0.42rem",fontWeight:700,letterSpacing:"0.08em",
                color:"#38bdf8aa",whiteSpace:"nowrap",
              }}>{n.label}</span>
            </div>
          ))}
        </div>

        {/* Badge */}
        <div style={{
          display:"flex",alignItems:"center",gap:8,
          background:"rgba(56,189,248,0.08)",border:"1px solid rgba(56,189,248,0.2)",
          borderRadius:99,padding:"6px 16px",marginBottom:28,
        }}>
          <span className="atlas-blink" style={{width:6,height:6,borderRadius:"50%",background:"#38bdf8",display:"inline-block"}} />
          <span style={{fontSize:"0.72rem",fontWeight:600,color:"#38bdf8",letterSpacing:"0.05em"}}>310 edge locations · 0 incidents in the last 30 days</span>
        </div>

        {/* Headline */}
        <h1 className="atlas-headline" style={{
          fontSize:"clamp(2.8rem,6vw,5.5rem)",fontWeight:900,
          letterSpacing:"-0.04em",lineHeight:1.06,
          textAlign:"center",margin:"0 0 20px",
          maxWidth:780,padding:"0 24px",
        }}>
          Your users everywhere.<br />Under 8 milliseconds.
        </h1>
        <p style={{
          fontSize:"clamp(1rem,1.6vw,1.2rem)",color:"rgba(255,255,255,0.5)",
          textAlign:"center",lineHeight:1.65,margin:"0 0 40px",
          maxWidth:560,padding:"0 24px",
        }}>
          Atlas delivers your app from the edge location closest to every user.
          Zero config. Infinite scale. No excuses.
        </p>

        {/* Stat pills */}
        <div style={{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",marginBottom:44}}>
          {[
            {label:"Avg global latency",val:"7.4ms"},
            {label:"Uptime SLA",val:"99.999%"},
            {label:"Requests/sec peak",val:"28M"},
          ].map(s=>(
            <div key={s.label} className="atlas-pill" style={{
              background:"rgba(56,189,248,0.06)",border:"1px solid rgba(56,189,248,0.2)",
              borderRadius:10,padding:"10px 20px",textAlign:"center",
            }}>
              <div style={{fontSize:"1.3rem",fontWeight:800,color:"#38bdf8",letterSpacing:"-0.02em"}}>{s.val}</div>
              <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)",marginTop:2,letterSpacing:"0.04em"}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center"}}>
          <a href="#" className="atlas-cta-primary" style={{
            fontSize:"0.95rem",fontWeight:700,color:"#000",
            background:"#38bdf8",borderRadius:10,padding:"14px 32px",
            textDecoration:"none",letterSpacing:"-0.01em",
          }}>Deploy in 60 seconds →</a>
          <a href="#" style={{
            fontSize:"0.95rem",fontWeight:600,color:"rgba(255,255,255,0.7)",
            background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",
            borderRadius:10,padding:"14px 32px",textDecoration:"none",
          }}>See the network</a>
        </div>
      </section>
    </>
  )
}
