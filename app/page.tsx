import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchChanging from "./components/SearchChanging";
import AISystem from "./components/AISystem";
import ComparisonTable from "./components/ComparisonTable";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9", color: "#1c1917", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <SearchChanging />
      <AISystem />
      <ComparisonTable />
      <FAQ />
      <Footer />
    </div>
  );
}
