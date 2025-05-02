import { useState, useEffect, useRef } from "react";
import Cleave from "cleave.js/react";
import ReCAPTCHA from "react-google-recaptcha";

import "../blocks/ContactSection.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    projectDetails: "",
  });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stops observing after first trigger
        }
      },
      { threshold: 0.4 } // Trigger when 40% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      className={`contact ${isVisible ? "contact--fade-up" : ""}`}
      ref={sectionRef}
      id="contact"
    >
      <div className="contact__content">
        <div className="contact__container">
          <h2 className="contact__title">Contact Us</h2>
          <p className="contact__text">
            We'd love to hear from you.
            <br />
            Let's build something great together.
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="form"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
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
              <Cleave
                className="form__input"
                name="phone"
                options={{
                  delimiters: ["(", ") ", "-", ""],
                  blocks: [0, 3, 3, 4],
                  numericOnly: true,
                }}
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

          <div className="form__container">
            <ReCAPTCHA
              sitekey="6LfzVisrAAAAAOP1rgX7RRDoAVxfqZTgSrir0REX"
              onChange={handleCaptcha}
            />
          </div>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <button type="submit" className="form__submitbtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
