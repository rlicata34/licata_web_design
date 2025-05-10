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
        <h1
          className="animated-logo"
          id="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
        </h1>
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
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </div>
        <button
          className="header__button"
          type="button"
          onClick={handleButtonClick}
        ></button>
      </nav>
    </header>
  );
}

export default Header;
