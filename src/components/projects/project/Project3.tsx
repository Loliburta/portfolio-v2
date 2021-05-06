import img3 from "../../../images/cointracker.jpg";
import { Icon } from "@iconify/react";
import githubIcon from '@iconify-icons/codicon/github-alt';
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <div className="projects__list__item__content__tech">
          <div className="projects__list__item__content__tech__item">React</div>
          <div className="projects__list__item__content__tech__item">
            Typescript
          </div>
          <div className="projects__list__item__content__tech__item">SCSS</div>
        </div>
        <div className="projects__list__item__content__links">
          <div className="projects__list__item__content__links__icon">
            <Icon icon={githubIcon} height="22px" color="#CCD6EB" />
          </div>
          <div className="projects__list__item__content__links__icon">
            <Icon icon={externalIcon} height="25px" color="#CCD6EB" />
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
