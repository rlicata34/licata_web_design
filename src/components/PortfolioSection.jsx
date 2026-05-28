import projects from "../utils/projects.js";
import useScrollFadeInClass from "../hooks/useScrollFadeInClass.js";
import "../blocks/PortfolioSection.css";

export default function PortfolioSection({ handlePreviewClick }) {
  const { ref, isVisible } = useScrollFadeInClass();

  return (
    <section id="portfolio" className="portfolio">
      <div
        className={`portfolio__container ${
          isVisible ? "portfolio__container--fade-up" : ""
        }`}
        ref={ref}
      >
        <div className="portfolio__header">
          <p className="portfolio__eyebrow">Selected Work</p>
          <h2 className="portfolio__title">
            Projects built with purpose and polish
          </h2>
          <p className="portfolio__subtitle">
            Apps I created within the TripleTen software engineering program and
            websites I’ve crafted to help small businesses stand out online.
          </p>
        </div>

        <div className="project__grid">
          {projects.map((project, index) => (
            <div key={index} className="project__card">
              <button
                className="project__media"
                type="button"
                onClick={() => handlePreviewClick(project)}
                aria-label={`Open ${project.title} gallery`}
              >
                <img
                  src={project.imageUrls[0]}
                  alt={project.title}
                  className="project__image"
                />
              </button>
              <div className="project__content">
                <p className="project__type">{project.type}</p>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <div className="project__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project__actions">
                  <button
                    className="project__button project__button_primary"
                    type="button"
                    onClick={() => handlePreviewClick(project)}
                  >
                    View Gallery
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__button project__button_secondary"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
