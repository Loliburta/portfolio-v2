import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/codicon/github-alt";
import externalIcon from "@iconify-icons/gridicons/external";

interface Props {
  title: string;
  description: string;
  img: string;
  tech: string[];
  code: string;
  site: string;
}

export const ProjectFlipped: React.FC<Props> = ({
  title,
  description,
  img,
  tech,
  code,
  site,
}) => {
  return (
    <li className="projects__list__item">
      <div className="projects__list__item__content content--flipped">
        <div className="projects__list__item__content__overline">
          Featured Project
        </div>
        <div className="projects__list__item__content__title">{title}</div>
        <div className="projects__list__item__content__description description--flipped">
          {description}
        </div>
        <div className="projects__list__item__content__tech ">
          {tech.map((name) => {
            return (
              <div key={name} className="projects__list__item__content__tech__item item--flipped">
                {name}
              </div>
            );
          })}
        </div>
        <div className="projects__list__item__content__links">
          <div className="projects__list__item__content__links__icon">
            <a href={code}>
              <Icon icon={githubIcon} height="22px" color="#ccd6f6" />
            </a>
          </div>
          <div className="projects__list__item__content__links__icon">
            <a href={site}>
              <Icon icon={externalIcon} height="25px" color="#ccd6f6" />
            </a>
          </div>
        </div>
      </div>
      <div className="projects__list__item__imageDiv imageDiv--flipped">
        <img
          src={img}
          alt="project 2"
          className="projects__list__item__imageDiv__img"
        />
      </div>
    </li>
  );
};
