import Nav from "./components/nav";
import Hero from "./components/hero";
import HowItWorks from "./components/howItWorks";
import Features from "./components/features";
import Numbers from "./components/numbers";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function OrbitaHome() {
  return (
    <main style={{ background: "#050508", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Numbers />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
