import StatusSection from "./StatusSection";
import SiteHeader from "./SiteHeader";
import Hero from "./Hero";
import LinesSection from "./LinesSection";
import MapSection from "./MapSection";
import FaresSection from "./FaresSection";
import SiteFooter from "./SiteFooter";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <StatusSection />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <LinesSection />
        <MapSection />
        <FaresSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default HomePage;
