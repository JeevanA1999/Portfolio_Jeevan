
import Close from "../assets/close.svg";
import { useState } from "react";
const PortfolioItem = ({ img, title, details,link }) => {
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Toggles the visibility of the modal.
 * If the modal is currently open, it will be closed, and vice versa.
 */

/******  0407599d-3114-4c85-b9a2-8ee6e93675f7  *******/  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>

                    <span className="item__title">{title}</span>
                    <span className="item__details">{desc}</span>
                  </li>
                );
              })}
            </ul>
            <a href={link} target="_blank" rel="noopener noreferrer"><img className="modal__img" src={img} alt="" /></a>
            {/* <img className="modal__img" src={img} alt="" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
