import Nav from "./components/nav"
import Hero from "./components/hero"
import Features from "./components/features"
import Metrics from "./components/metrics"
import Testimonials from "./components/testimonials"
import CTA from "./components/cta"
import Footer from "./components/footer"

export default function AtlasHome() {
  return (
    <main style={{background:"#020c14",minHeight:"100vh",overflowX:"hidden"}}>
      <Nav />
      <Hero />
      <Features />
      <Metrics />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
