import useScrollFadeInClass from "../hooks/useScrollFadeInClass";

import "../blocks/ServicesSection.css";

function ServicesSection() {
  const { ref, isVisible } = useScrollFadeInClass();

  return (
    <section
      id="services"
      className={`services ${isVisible ? "services--fade-up" : ""}`}
      ref={ref}
    >
      <div className="services__header">
        <p className="services__eyebrow">Services</p>
        <h2 className="services__title">
          Modern websites for small businesses
        </h2>
        <p className="services__intro">
          I help businesses stand out online with clean, modern, and responsive
          web design solutions.
        </p>
      </div>

      <div className="services__grid">
        <div className="service-card">
          <span className="service-card__badge">01</span>
          <h3 className="service-card__title">Website Redesign</h3>
          <p className="service-card__text">
            I revamp outdated sites with modern layouts, better UX, and
            performance optimization.
          </p>
        </div>

        <div className="service-card">
          <span className="service-card__badge">02</span>
          <h3 className="service-card__title">Mobile Optimization</h3>
          <p className="service-card__text">
            Your site will look great and load fast on phones and tablets with
            responsive design.
          </p>
        </div>

        <div className="service-card">
          <span className="service-card__badge">03</span>
          <h3 className="service-card__title">Custom Design</h3>
          <p className="service-card__text">
            I build tailored layouts that match your brand, from scratch or with
            preferred frameworks.
          </p>
        </div>
      </div>

      <a href="#contact" className="services__cta">
        Start a Project
      </a>
    </section>
  );
}

export default ServicesSection;
