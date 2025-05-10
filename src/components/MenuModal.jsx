import { useEffect } from "react";

import "../blocks/MenuModal.css";

function MenuModal({ onClose, activeModal, isOpen }) {
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

  return (
    activeModal && (
      <div
        className={`modal ${isOpen ? "modal_opened" : ""}`}
        onClick={handleOverlay}
      >
        <div className="modal__content">
          <div className="modal__links">
            <a href="#services" className="modal__link" onClick={onClose}>
              Services
            </a>
            <a href="#portfolio" className="modal__link" onClick={onClose}>
              Portfolio
            </a>

            <a href="#about" className="modal__link" onClick={onClose}>
              About
            </a>
            <a href="#contact" className="modal__link" onClick={onClose}>
              Contact
            </a>
          </div>
        </div>
      </div>
    )
  );
}

export default MenuModal;
