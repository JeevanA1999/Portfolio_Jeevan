
import { portfolio } from "../../data";
import PortfolioItem from "../../Components/PortfolioItem";
import "./portfolio.css";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio section">
        <h2 className="section__title">
          My <span>Portfolio</span>
        </h2>
        <div className="portfolio__container container grid">
          {portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item} />;
          })}
        </div>
        <div className="button-container">
          <Link to="/contact" className="button buttonNxt">
            Contact Us{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
