import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/features";
import StackTrace from "./components/stacktrace";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function HelixHome() {
  return (
    <main
      style={{
        background: "#060410",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <Features />
      <StackTrace />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
