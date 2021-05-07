import img1 from "../../../images/movies.jpg";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/codicon/github-alt";
import externalIcon from "@iconify-icons/gridicons/external";

export const Project1 = () => {
  return (
    <li className="projects__list__item">
      <div className="projects__list__item__content">
        <div className="projects__list__item__content__overline">
          Featured Project
        </div>
        <div className="projects__list__item__content__title">
          Movies Search
        </div>
        <div className="projects__list__item__content__description">
          A site where you can check out any movie, display it's rating cast and
          overview. Sort by most popular, top rated and see the upcoming movies.
        </div>
        <div className="projects__list__item__content__tech">
          <div className="projects__list__item__content__tech__item">React</div>
          <div className="projects__list__item__content__tech__item">
            Typescript
          </div>
          <div className="projects__list__item__content__tech__item">Sass</div>
          <div className="projects__list__item__content__tech__item">
            TheMovieDB API
          </div>
          <div className="projects__list__item__content__tech__item">
            Lodash
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
          src={img1}
          alt="project 1"
          className="projects__list__item__imageDiv__img"
        />
      </div>
    </li>
  );
};
