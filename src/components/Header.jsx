import { useState, useEffect } from "react";

import "../blocks/Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 180) {
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
          <a href="#portfolio" className="nav__portfolio">
            Portfolio
          </a>
          <a href="#services" className="nav__services">
            Services
          </a>
          <a href="#about" className="nav__about">
            About
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
