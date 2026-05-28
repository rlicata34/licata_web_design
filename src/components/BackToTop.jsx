import useScrollFadeInClass from "../hooks/useScrollFadeInClass";

import "../blocks/BackToTop.css";

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { ref, isVisible } = useScrollFadeInClass();

  return (
    <button
      className={`back-to-top ${isVisible ? "back-to-top--fade-up" : ""}`}
      type="button"
      onClick={scrollToTop}
      ref={ref}
      aria-label="Back to top"
    >
      <span className="back-to-top__icon" aria-hidden="true">
        ↑
      </span>
      Back to top
    </button>
  );
}

export default BackToTop;
