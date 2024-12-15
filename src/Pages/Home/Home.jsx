
// import Profile from "../../assets/home.jpg";
import Profile from "../../assets/Profile1.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import {FaGithub ,

  FaWhatsapp ,
  
} from "react-icons/fa";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Jeevan A.</span>
            <br />
            Frontend Developer
          </h1>
          <p className="home__description">
            I'm a Indian based front-end developer focused on crafting clean &
            user-friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </p>
          <div className="contact__socials">
            <a
              href="https://github.com/JeevanA1999" target="_blank"
              className="conatct__social-link"
            >
              <FaGithub  />
            </a>
            <a href="https://x.com/JeevanAkulal"  target="_blank" className="conatct__social-link">
              <FaSquareXTwitter />
            </a>
            <a href="https://wa.me/8618415611?text=Hello"  target="_blank" className="conatct__social-link">
              <FaWhatsapp  />
            </a>
          </div>
          <Link to="/about" className="button button1">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};
export default Home;
