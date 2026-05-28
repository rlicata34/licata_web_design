import logo from "../assets/LI-Logo.png";
import "../blocks/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <p className="footer__name">Licata Web Design</p>
          <p className="footer__tagline">
            Modern websites for small businesses.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#services" className="footer__nav-link">
            Services
          </a>
          <a href="#portfolio" className="footer__nav-link">
            Portfolio
          </a>
          <a href="#about" className="footer__nav-link">
            About
          </a>
          <a href="#contact" className="footer__nav-link">
            Contact
          </a>
        </nav>

        <div className="footer__meta">
          <a
            href="https://www.linkedin.com/in/rlicata34/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="LinkedIn logo" className="footer__link-image" />
          </a>
          <p className="footer__copyright">{`Copyright © ${year}`}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
