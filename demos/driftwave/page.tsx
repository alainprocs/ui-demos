import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function DriftwaveHome() {
  return (
    <main className="relative">
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
