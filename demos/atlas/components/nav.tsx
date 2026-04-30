import { Globe } from "lucide-react"

export default function Nav() {
  return (
    <>
      <style>{`
        @keyframes atlas-nav-pulse { 0%,100%{box-shadow:0 0 16px #38bdf833} 50%{box-shadow:0 0 38px #38bdf877} }
        .atlas-nav-cta{animation:atlas-nav-pulse 2.2s ease-in-out infinite;transition:transform .15s}
        .atlas-nav-cta:hover{transform:translateY(-1px)}
        .atlas-nav-link{transition:color .15s}
        .atlas-nav-link:hover{color:#38bdf8!important}
      `}</style>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 5%",height:64,display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(2,6,12,0.88)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(56,189,248,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <Globe size={21} color="#38bdf8" />
          <span style={{fontSize:"1.12rem",fontWeight:800,letterSpacing:"-0.02em",color:"#fff"}}>Atlas</span>
          <span style={{fontSize:"0.58rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",background:"#38bdf810",color:"#38bdf8",border:"1px solid #38bdf830",borderRadius:4,padding:"2px 7px"}}>Edge Network</span>
        </div>
        <div style={{display:"flex",gap:30}}>
          {["Network","Compute","Security","Pricing"].map(l=>(
            <a key={l} href="#" className="atlas-nav-link" style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",textDecoration:"none",fontWeight:500}}>{l}</a>
          ))}
        </div>
        <div style={{display:"flex",gap:12,alignItems:"center"}}>
          <a href="#" style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.55)",textDecoration:"none"}}>Sign in</a>
          <a href="#" className="atlas-nav-cta" style={{fontSize:"0.85rem",fontWeight:700,color:"#000",background:"#38bdf8",borderRadius:8,padding:"8px 20px",textDecoration:"none"}}>Deploy Free</a>
        </div>
      </nav>
    </>
  )
}
