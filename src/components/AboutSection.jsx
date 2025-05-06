import aboutImage from "../assets/about-image.png";
import useScrollFadeInClass from "../hooks/useScrollFadeInClass";
import "../blocks/AboutSection.css";

function AboutSection() {
  const { ref, isVisible } = useScrollFadeInClass();

  return (
    <section className={`about ${isVisible ? "about--fade-up" : ""}`} ref={ref}>
      <div className="about__content">
        <img
          src={aboutImage}
          alt="Image of business owner"
          className="about__image"
        />
        <div className="about__container">
          <h2 className="about__title">About Me</h2>
          <p className="about__text">
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
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
