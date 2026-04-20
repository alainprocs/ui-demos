import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/features";
import Pricing from "./components/pricing";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function SolarisHome() {
  return (
    <main
      style={{
        background: "#030712",
        minHeight: "100vh",
        color: "#fff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
