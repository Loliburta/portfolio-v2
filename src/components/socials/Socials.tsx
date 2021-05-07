import { Icon } from "@iconify/react";
import githubFill from "@iconify-icons/akar-icons/github-fill";
import linkedinOutline from "@iconify-icons/eva/linkedin-outline";
export const Socials = () => {
  return (
    <div className="socials">
      <div className="socials__icons">
        <div className="socials__icons__icon">
          <a href="https://github.com/Loliburta">
            <Icon
              icon={githubFill}
              width="23px"
              height="23px"
              color="#a8b2d1"
            />
          </a>
        </div>
        <div className="socials__icons__icon">
          <a href="https://www.linkedin.com/in/mateusz-maranowski-413956207">
            <Icon
              icon={linkedinOutline}
              width="23px"
              height="23px"
              color="#a8b2d1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
