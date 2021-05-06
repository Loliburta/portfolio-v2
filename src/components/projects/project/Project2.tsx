import img2 from "../../../images/weatherapp.jpg";

import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/codicon/github-alt";
import externalIcon from "@iconify-icons/gridicons/external";

export const Project2 = () => {
  return (
    <li className="projects__list__item">
      <div className="projects__list__item__content content--flipped">
        <div className="projects__list__item__content__overline">
          Featured Project
        </div>
        <div className="projects__list__item__content__title">Weather App</div>
        <div className="projects__list__item__content__description description--flipped">
          A nicer look at today's weather and forecast for the next few days
          with several animations and great looking backgrounds. Check out the
          weather of any place on earth using your native language.
        </div>
        <div className="projects__list__item__content__tech ">
          <div className="projects__list__item__content__tech__item item--flipped">
            React
          </div>
          <div className="projects__list__item__content__tech__item item--flipped">
           Sass
          </div>
          <div className="projects__list__item__content__tech__item item--flipped">
           Gsap 3
          </div>
          <div className="projects__list__item__content__tech__item item--flipped">
           OpenWeatherMap API
          </div>
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
      <div className="projects__list__item__imageDiv imageDiv--flipped">
        <img
          src={img2}
          alt="project 2"
          className="projects__list__item__imageDiv__img"
        />
      </div>
    </li>
  );
};
