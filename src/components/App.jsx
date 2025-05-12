import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ContactSection from "../components/ContactSection";
import BackToTop from "../components/BackToTop";
import Footer from "./Footer";
import MenuModal from "./MenuModal";
import ProjectGalleryModal from "./ProjectGalleryModal";

import "../blocks/App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const onClose = () => {
    setActiveModal("");
  };

  const handleMenuClick = () => {
    setActiveModal("menu-modal");
  };

  const handlePreviewClick = (project) => {
    setActiveProject(project);
    setActiveModal("preview-modal");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleMenuClick={handleMenuClick}
          activeModal={activeModal}
          onClose={onClose}
        />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection handlePreviewClick={handlePreviewClick} />
          <AboutSection />
          <ContactSection />
          <BackToTop />
        </main>
        <Footer />
      </div>
      <MenuModal
        onClose={onClose}
        activeModal={activeModal}
        isOpen={activeModal === "menu-modal"}
      />
      <ProjectGalleryModal
        onClose={onClose}
        activeModal={activeModal}
        isOpen={activeModal === "preview-modal"}
        project={activeProject}
      />
    </div>
  );
}

export default App;
