import { useState } from "react";
import useScrollFadeInClass from "../hooks/useScrollFadeInClass";

import "../blocks/ContactSection.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    projectDetails: "",
  });
  // const [isButtonActive, setIsButtonActive] = useState(false);

  const { ref, isVisible } = useScrollFadeInClass();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section
      className={`contact ${isVisible ? "contact--fade-up" : ""}`}
      ref={ref}
      id="contact"
    >
      <div className="contact__content">
        <div className="contact__container">
          <p className="contact__eyebrow">Contact</p>
          <h2 className="contact__title">Ready to improve your web presence?</h2>
          <p className="contact__text">
            Tell me what you are building, updating, or trying to fix. I will
            follow up so we can talk through the best next step.
          </p>
          <div className="contact__trust-list">
            <span>Free initial consultation</span>
            <span>Small-business friendly scope</span>
            <span>Clear communication from kickoff to launch</span>
          </div>
        </div>

        <form name="contact" method="POST" className="form">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form__container">
            <div className="form__input-wrapper">
              <input
                id="name"
                type="text"
                className="form__input"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className={`form__label ${
                  formData.name ? "form__label--active" : ""
                }`}
              >
                Full Name
              </label>
            </div>

            <div className="form__input-wrapper">
              <input
                id="email"
                type="email"
                className="form__input"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className={`form__label ${
                  formData.email ? "form__label--active" : ""
                }`}
              >
                Email
              </label>
            </div>
          </div>

          <div className="form__container">
            <div className="form__input-wrapper">
              <input
                id="phone"
                className="form__input"
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
              />
              <label
                htmlFor="phone"
                className={`form__label ${
                  formData.phone ? "form__label--active" : ""
                }`}
              >
                Phone Number
              </label>
            </div>

            <div className="form__input-wrapper">
              <input
                id="website"
                type="url"
                className="form__input"
                name="website"
                autoComplete="url"
                value={formData.website}
                onChange={handleChange}
              />
              <label
                htmlFor="website"
                className={`form__label ${
                  formData.website ? "form__label--active" : ""
                }`}
              >
                Current Site
              </label>
            </div>
          </div>

          <div className="form__container-text form__input-wrapper">
            <textarea
              id="projectDetails"
              name="projectDetails"
              className="form__textarea"
              required
              value={formData.projectDetails}
              onChange={handleChange}
            ></textarea>
            <label
              htmlFor="projectDetails"
              className={`form__label ${
                formData.projectDetails ? "form__label--active" : ""
              }`}
            >
              Project Details
            </label>
            <p className="form__text">
              How can I help with your web project? Share goals, timeline, or
              anything you want improved.
            </p>
          </div>
          <button type="submit" className="form__submitbtn">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
