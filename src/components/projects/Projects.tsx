import img1 from "../../images/img1.png";
import { Icon } from "@iconify/react";
import githubFill from "@iconify-icons/akar-icons/github-fill";
import externalIcon from "@iconify-icons/gridicons/external";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__heading">02. Some Things I've Built</div>
      <ul className="projects__list">
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="projects__list__item__content__tech">
              <div className="projects__list__item__content__tech__item">
                React
              </div>
              <div className="projects__list__item__content__tech__item">
                Typescript
              </div>
              <div className="projects__list__item__content__tech__item">
                SCSS
              </div>
            </div>
            <div className="projects__list__item__content__links">
              <div className="projects__list__item__content__links__icon">
                <Icon icon={githubFill} height="20px" />
              </div>
              <div className="projects__list__item__content__links__icon">
                <Icon icon={externalIcon} height="20px" />
              </div>
            </div>
          </div>
          <div className="projects__list__item__imageDiv">
            <img
              src={img1}
              alt="project 1"
              className="projects__list__item__imageDiv__img"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
