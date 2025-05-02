import { useState, useEffect, useRef } from "react";

import "../blocks/ServicesSection.css";

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stops observing after first trigger
        }
      },
      { threshold: 0.4 } // Trigger when 40% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className={`services ${isVisible ? "services--fade-up" : ""}`}
      ref={sectionRef}
    >
      <h2 className="services__title">My Services</h2>
      <p className="services__intro">
        I help businesses stand out online with clean, modern, and responsive
        web design solutions.
      </p>

      <div className="services__grid">
        <div className="service-card">
          <h3>Website Redesign</h3>
          <p>
            I revamp outdated sites with modern layouts, better UX, and
            performance optimization.
          </p>
        </div>

        <div className="service-card">
          <h3>Mobile Optimization</h3>
          <p>
            Your site will look great and load fast on phones and tablets with
            responsive design.
          </p>
        </div>

        <div className="service-card">
          <h3>Custom Design</h3>
          <p>
            I build tailored layouts that match your brand, from scratch or with
            preferred frameworks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
