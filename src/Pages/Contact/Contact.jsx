import { useState } from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xlgamgh",
        "template_m3329er",
        e.target,
        "dWRzjvhZDCmD2BjZx"
      )
      .then(
        () => {
          console.log("Email sent successfully:");
          toast.success("Email sent successfully", {
            theme: "dark"
          })

          setFormData({
            name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error sending email: ", error.text);
        }
      );
  }

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
          />
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className="conatct__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            vision
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me </span>
                <h4 className="info__desc">jeevukulal96@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me </span>
                <h4 className="info__desc">+91 86184 15611</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.facebook.com/"
              className="conatct__social-link"
            >
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com/" className="conatct__social-link">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/" className="conatct__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="form__control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="form__control"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                name="user_subject"
                className="form__control"
                value={formData.user_subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              className="form__control textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
