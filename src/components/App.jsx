import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ContactSection from "../components/ContactSection";
import BackToTop from "../components/BackToTop";
import Footer from "./Footer";
import "../blocks/App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
          <BackToTop />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
