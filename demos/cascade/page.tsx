import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function CascadeHome() {
  return (
    <main style={{ background: "#04080a", minHeight: "100vh", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
