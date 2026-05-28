import aboutImage from "../assets/about-image.png";
import useScrollFadeInClass from "../hooks/useScrollFadeInClass";
import "../blocks/AboutSection.css";

function AboutSection() {
  const { ref, isVisible } = useScrollFadeInClass();

  return (
    <section
      className={`about ${isVisible ? "about--fade-up" : ""}`}
      ref={ref}
      id="about"
    >
      <div className="about__content">
        <div className="about__media">
          <img
            src={aboutImage}
            alt="Image of business owner"
            className="about__image"
          />
        </div>
        <div className="about__container">
          <p className="about__eyebrow">About</p>
          <h2 className="about__title">
            Design-minded development for small business websites
          </h2>
          <p className="about__lead">
            Freelance web designer and full-stack software engineer.
          </p>
          <p className="about__text">
            Hi, I'm a graduate of the TripleTen Software Engineering Program and
            the founder of Licata Web Design. I offer affordable, collaborative
            web design services tailored specifically for small businesses
            looking to unlock their full potential online.
          </p>
          <p className="about__text">
            My goal is to equip clients with the tools and modern design they
            need to confidently present themselves to the world. Whether you're
            starting fresh or looking to update your existing site, let me help
            improve your global web presence.
          </p>
          <div className="about__proof-list">
            <span className="about__proof-item">Collaborative process</span>
            <span className="about__proof-item">Responsive-first builds</span>
            <span className="about__proof-item">Small business focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
