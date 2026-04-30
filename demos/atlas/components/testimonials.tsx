const quotes = [
  {
    quote: "We cut our Asia-Pacific latency from 340ms to 11ms overnight. Our conversion rate in Japan went up 31% the following week. Atlas paid for itself in 4 days.",
    name: "Yuki Tanaka", role: "VP Engineering", company: "Mercado",
    avatar: "YT", metric: "31× latency improvement",
  },
  {
    quote: "During our Super Bowl campaign we hit 18M concurrent users. Atlas didn't even blink — zero downtime, P99 stayed under 20ms. Our previous CDN fell over at 2M.",
    name: "Marcus Webb", role: "CTO", company: "FanStream",
    avatar: "MW", metric: "18M concurrent users",
  },
  {
    quote: "The edge compute runtime replaced our entire fleet of 40 Lambda functions. Cold starts went from 800ms to 2ms. Our team shipped the migration in a single sprint.",
    name: "Priya Kapoor", role: "Director of Infrastructure", company: "Kite Health",
    avatar: "PK", metric: "400× cold start improvement",
  },
]

export default function Testimonials() {
  return (
    <>
      <style>{`
        @keyframes atlas-card-border {
          0%,100%{border-color:rgba(56,189,248,0.12)}
          50%{border-color:rgba(56,189,248,0.35)}
        }
        .atlas-test-card{animation:atlas-card-border 3s ease-in-out infinite}
        .atlas-test-card:nth-child(2){animation-delay:1s}
        .atlas-test-card:nth-child(3){animation-delay:2s}
      `}</style>
      <section style={{padding:"clamp(60px,10vw,120px) 5%",background:"#010810"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:60}}>
            <div style={{fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"#38bdf8",marginBottom:14}}>Results that speak</div>
            <h2 style={{fontSize:"clamp(1.8rem,3.5vw,3rem)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",margin:0}}>The numbers don't lie.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24}}>
            {quotes.map((q,i)=>(
              <div key={i} className="atlas-test-card" style={{
                background:"rgba(56,189,248,0.04)",border:"1px solid rgba(56,189,248,0.12)",
                borderRadius:16,padding:"28px",display:"flex",flexDirection:"column",gap:20,
              }}>
                <div style={{
                  fontSize:"0.7rem",fontWeight:700,color:"#38bdf8",
                  background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.2)",
                  borderRadius:99,padding:"4px 12px",display:"inline-block",width:"fit-content",
                }}>{q.metric}</div>
                <p style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.7)",lineHeight:1.65,margin:0,fontStyle:"italic"}}>"{q.quote}"</p>
                <div style={{display:"flex",alignItems:"center",gap:12,marginTop:"auto"}}>
                  <div style={{
                    width:38,height:38,borderRadius:"50%",flexShrink:0,
                    background:"linear-gradient(135deg,#38bdf8,#0ea5e9)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"0.7rem",fontWeight:800,color:"#000",
                  }}>{q.avatar}</div>
                  <div>
                    <div style={{fontSize:"0.82rem",fontWeight:700,color:"#fff"}}>{q.name}</div>
                    <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.4)"}}>{q.role} · {q.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
