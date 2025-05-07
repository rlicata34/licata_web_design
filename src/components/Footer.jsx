import logo from "../assets/LI-Logo.png";
import "../blocks/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">{`Copyright © ${year} LicataWebDesign`}</p>
        <a
          href="https://www.linkedin.com/in/rlicata34/"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="LinkedIn logo" className="footer__link-image" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
