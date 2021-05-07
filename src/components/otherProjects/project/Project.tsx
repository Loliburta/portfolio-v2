import { Icon } from "@iconify/react";
import folderIcon from "@iconify-icons/akar-icons/folder";
import githubIcon from "@iconify-icons/codicon/github-alt";
import externalIcon from "@iconify-icons/gridicons/external";
interface Props {
  title: string;
  description: string;
  tech: string[];
  code: string;
  site?: string;
}
export const Project: React.FC<Props> = ({
  title,
  description,
  tech,
  code,
  site,
}) => {
  return (
    <div className="otherProjects__projects__item">
      <div className="otherProjects__projects__item__top">
        <div className="otherProjects__projects__item__top__icon">
          <Icon icon={folderIcon} height="50px" color="#ccd6f6" />
        </div>
        <div className="otherProjects__projects__item__top__links">
          <div className="otherProjects__projects__item__top__links__icon">
            <a href={code}>
              <Icon icon={githubIcon} height="25px" color="#ccd6f6" />
            </a>
          </div>
          {typeof site === "string" ? (
            <div className="otherProjects__projects__item__top__links__icon--external">
              <a href={site}>
                <Icon icon={externalIcon} height="25px" color="#ccd6f6" />
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="otherProjects__projects__item__mid">
        <div className="otherProjects__projects__item__mid__title">{title}</div>
        <div className="otherProjects__projects__item__mid__description">
          {description}
        </div>
      </div>
      <div className="otherProjects__projects__item__bot">
        <div className="otherProjects__projects__item__bot__tech">
          {tech.map((name) => {
            return (
              <div className="otherProjects__projects__item__bot__tech__item">
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
