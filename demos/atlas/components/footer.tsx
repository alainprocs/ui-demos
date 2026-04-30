import { Globe } from "lucide-react"

export default function Footer() {
  const cols = [
    {head:"Network",links:["Edge Locations","Backbone","Status","Peering"]},
    {head:"Products",links:["CDN","Edge Compute","DDoS Shield","Analytics"]},
    {head:"Developers",links:["Docs","CLI","API Reference","SDKs"]},
    {head:"Company",links:["About","Blog","Careers","Security"]},
  ]
  return (
    <footer style={{padding:"60px 5% 32px",background:"#020c14",borderTop:"1px solid rgba(56,189,248,0.08)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.4fr repeat(4,1fr)",gap:40,marginBottom:48}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
              <Globe size={18} color="#38bdf8" />
              <span style={{fontSize:"1rem",fontWeight:800,color:"#fff"}}>Atlas</span>
            </div>
            <p style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.35)",lineHeight:1.65,margin:"0 0 20px"}}>The edge network built for what comes next.</p>
            <div style={{fontSize:"0.72rem",color:"#38bdf8",fontWeight:600}}>● All systems operational</div>
          </div>
          {cols.map(c=>(
            <div key={c.head}>
              <div style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)",marginBottom:16}}>{c.head}</div>
              {c.links.map(l=>(
                <a key={l} href="#" style={{display:"block",fontSize:"0.82rem",color:"rgba(255,255,255,0.55)",textDecoration:"none",marginBottom:10,transition:"color .15s"}}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:24,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.25)"}}>© 2026 Atlas Network, Inc.</span>
          <span style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.25)"}}>Privacy · Terms · Security</span>
        </div>
      </div>
    </footer>
  )
}
