import { useState, useEffect } from "react";

import "../blocks/Header.css";

function Header() {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = scrolled ? "header header_scrolled" : "header";

  return (
    <header className={headerClass}>
      <nav className="nav">
        <h1 className="nav__logo">LicataWebDesign</h1>
        <div className="nav__links">
          <a href="#about" className="nav__about">
            About
          </a>
          <a href="#portfolio" className="nav__portfolio">
            Portfolio
          </a>
          <a href="#services" className="nav__services">
            Services
          </a>
          <a href="#contact" className="nav__contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
