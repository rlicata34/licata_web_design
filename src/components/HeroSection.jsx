import hero_image from "../assets/hero-image.jpg";
import "../blocks/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__conatiner">
          <h1 className="hero__title">Simple. Smart. Responsive.</h1>
          <img
            src={hero_image}
            alt="View of what a personal workspace for a developer could look like"
            className="hero__image"
          />
        </div>
        <div className="hero__container">
          <p className="hero__description">
            Elevate your online presence with Licata Web Design. We build clean,
            responsive websites that help small businesses stand out. Ready to
            upgrade your site and grow your business?
          </p>
          <a href="#contact" className="hero__button">
            Let’s Build Your Site
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
