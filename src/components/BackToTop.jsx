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
      onClick={scrollToTop}
      ref={ref}
    >
      Back to top
    </button>
  );
}

export default BackToTop;
