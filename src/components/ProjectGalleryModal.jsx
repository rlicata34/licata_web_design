import { useEffect, useState } from "react";

import "../blocks/ProjectGalleryModal.css";

function ProjectGalleryModal({ onClose, activeModal, isOpen, project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = project?.imageUrls.length || 0;
  const hasMultipleImages = imageCount > 1;

  useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, project]);

  useEffect(() => {
    if (!isOpen || !project) return;

    project.imageUrls.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [isOpen, project]);

  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const next = () => {
    if (!hasMultipleImages) return;
    setCurrentIndex((prev) => (prev + 1) % imageCount);
  };

  const prev = () => {
    if (!hasMultipleImages) return;
    setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount);
  };

  if (activeModal && !project) {
    return null;
  }

  return (
    activeModal && (
      <div
        className={`modal-preview ${isOpen ? "modal-preview_opened" : ""}`}
        onClick={handleOverlay}
      >
        <div className="modal-preview__content">
          <div className="modal-preview__header">
            <div>
              <p className="modal-preview__eyebrow">Project Gallery</p>
              <h3 className="modal-preview__title">{project.title}</h3>
            </div>
            <button
              className="modal-preview__close-button"
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
            />
          </div>

          <div className="modal-preview__stage">
            {hasMultipleImages && (
              <button
                className="modal-preview__nav-button modal-preview__nav-button_prev"
                type="button"
                onClick={prev}
                aria-label="View previous image"
              />
            )}
            <img
              src={project.imageUrls[currentIndex]}
              alt={`Preview of ${project.title}`}
              className="modal-preview__image"
              decoding="async"
              fetchPriority="high"
            />
            {hasMultipleImages && (
              <button
                className="modal-preview__nav-button modal-preview__nav-button_next"
                type="button"
                onClick={next}
                aria-label="View next image"
              />
            )}
          </div>

          <p className="modal-preview__counter">
            {currentIndex + 1} / {imageCount}
          </p>
        </div>
      </div>
    )
  );
}

export default ProjectGalleryModal;
