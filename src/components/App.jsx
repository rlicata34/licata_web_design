// import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "../components/ContactSection";
import BackToTop from "../components/BackToTop";
import "../blocks/App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
