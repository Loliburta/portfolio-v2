import img3 from "../../../images/cointracker.jpg";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/codicon/github-alt";
import externalIcon from "@iconify-icons/gridicons/external";

export const Project3 = () => {
  return (
    <li className="projects__list__item">
      <div className="projects__list__item__content">
        <div className="projects__list__item__content__overline">
          Featured Project
        </div>
        <div className="projects__list__item__content__title">
          Crypto Price Tracker
        </div>
        <div className="projects__list__item__content__description">
          A web app created for tracking daily and weekly changes of any
          cryptocurrencies, you can search for your favorite crypto or scroll
          over the list.
        </div>
        <div className="projects__list__item__content__tech">
          <div className="projects__list__item__content__tech__item">React</div>
          <div className="projects__list__item__content__tech__item">
            Typescript
          </div>
          <div className="projects__list__item__content__tech__item">Sass</div>
          <div className="projects__list__item__content__tech__item">
            CoinGecko API
          </div>
        </div>
        <div className="projects__list__item__content__links">
          <div className="projects__list__item__content__links__icon">
            <Icon icon={githubIcon} height="22px" color="#ccd6f6" />
          </div>
          <div className="projects__list__item__content__links__icon">
            <Icon icon={externalIcon} height="25px" color="#ccd6f6" />
          </div>
        </div>
      </div>
      <div className="projects__list__item__imageDiv">
        <img
          src={img3}
          alt="project 3"
          className="projects__list__item__imageDiv__img"
        />
      </div>
    </li>
  );
};
