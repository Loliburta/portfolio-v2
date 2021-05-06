import { Project1 } from "./project/Project1";
import { Project2 } from "./project/Project2";
import { Project3 } from "./project/Project3";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__heading">Some Things I've Built</div>
      <ul className="projects__list">
        <Project1 />
        <Project2 />
        <Project3 />
      </ul>
    </div>
  );
};
