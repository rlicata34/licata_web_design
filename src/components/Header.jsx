import { useState, useEffect } from "react";

import "../blocks/Header.css";

function Header({ handleMenuClick, activeModal, onClose }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    if (activeModal === "") {
      handleMenuClick();
    } else {
      onClose();
    }
  };

  return (
    <header className={`header ${scrolled ? "header_scrolled" : ""}`}>
      <nav className="nav">
        <button
          className="animated-logo"
          id="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
          aria-label="Scroll to top"
        >
          <span>L</span>
          <span>i</span>
          <span>c</span>
          <span>a</span>
          <span>t</span>
          <span>a</span>
          <span>W</span>
          <span>e</span>
          <span>b</span>
          <span>D</span>
          <span>e</span>
          <span>s</span>
          <span>i</span>
          <span>g</span>
          <span>n</span>
        </button>
        <div className="nav__links">
          <a href="#services" className="nav__link">
            Services
          </a>
          <a href="#portfolio" className="nav__link">
            Portfolio
          </a>

          <a href="#about" className="nav__link">
            About
          </a>
          <a href="#contact" className="nav__link nav__link_cta">
            Contact
          </a>
        </div>
        <button
          className={`header__button ${
            activeModal === "menu-modal" ? "header__button_active" : ""
          }`}
          type="button"
          onClick={handleButtonClick}
          aria-label={activeModal === "menu-modal" ? "Close menu" : "Open menu"}
          aria-expanded={activeModal === "menu-modal"}
        />
      </nav>
    </header>
  );
}

export default Header;
