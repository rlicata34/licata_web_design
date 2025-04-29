import hero_image from "../assets/hero-image.jpg";
import "../blocks/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Welcome to my page</h1>
        <img
          src={hero_image}
          alt="View of what a personal workspace for a developer could look like"
          className="hero__image"
        />
        <p className="hero__description">
          I'm passionate about building beautiful, functional websites that help
          businesses stand out. Let's work together to create something great!
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
