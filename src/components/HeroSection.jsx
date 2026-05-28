import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { urlFor } from "../sanityImage";
import "../blocks/HeroSection.css";

function HeroSection() {
  const [hero, setHero] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GROQ query: get the first heroSection document
    const query = `*[_type == "heroSection"][0]`;

    client
      .fetch(query)
      .then((data) => {
        setHero(data);
      })
      .catch((err) => {
        console.error("Error fetching hero data:", err);
      });
  }, []);

  if (error) {
    return <div style={{ color: "red" }}>Error loading hero section.</div>;
  }

  if (!hero) {
    return <div>Loading hero...</div>;
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow">Freelance Web Design & Development</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__actions">
            <a
              href={hero.buttonLink}
              className="hero__button hero__button_primary"
            >
              {hero.buttonText}
            </a>
            <a href="#portfolio" className="hero__button hero__button_secondary">
              View Work
            </a>
          </div>
        </div>

        {hero.image && (
          <div className="hero__media">
            <img
              src={urlFor(hero.image).width(1200).url()}
              alt={hero.image.alt || "Hero image"}
              className="hero__image"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
