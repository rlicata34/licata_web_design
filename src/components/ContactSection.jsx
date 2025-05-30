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
          <h2 className="contact__title">Contact Me</h2>
          <p className="contact__text">
            I'd love to hear from you.
            <br />
            Let's build something great together.
          </p>
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
                className="form__input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label
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
                value={formData.website}
                onChange={handleChange}
                required
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
              How can we help your with your web project? Please enter your
              details in the above box.
            </p>
          </div>
          <button type="submit" className="form__submitbtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
