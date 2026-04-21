import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/features";
import Dashboard from "./components/dashboard";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function NovaHome() {
  return (
    <main
      style={{
        background: "#020408",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <Features />
      <Dashboard />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
