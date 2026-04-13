import Nav from "./components/nav";
import Hero from "./components/hero";
import Marquee from "./components/marquee";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function LuminaryHome() {
  return (
    <main
      style={{
        background: "#06071a",
        minHeight: "100vh",
        color: "#fff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
