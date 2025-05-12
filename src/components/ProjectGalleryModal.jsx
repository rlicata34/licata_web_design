import { useEffect, useState } from "react";
import projects from "../utils/projects.js";

import "../blocks/ProjectGalleryModal.css";

function ProjectGalleryModal({ onClose, activeModal, isOpen, project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % project.imageUrls.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + project.imageUrls.length) % project.imageUrls.length
    );
  };
  return (
    activeModal && (
      <div
        className={`modal-preview ${isOpen ? "modal-preview_opened" : ""}`}
        onClick={handleOverlay}
      >
        <div className="modal-preview__content">
          <button
            className="modal-preview__prev-button"
            type="button"
            onClick={prev}
          ></button>
          <img
            src={project?.imageUrls[currentIndex]}
            alt={`Preview of ${project?.title}`}
            className="modal-preview__image"
          />
          <button
            className="modal-preview__next-button"
            type="button"
            onClick={next}
          ></button>
        </div>
      </div>
    )
  );
}

export default ProjectGalleryModal;
