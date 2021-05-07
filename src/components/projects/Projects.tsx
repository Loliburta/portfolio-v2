import { Project1 } from "./project/Project1";
import { Project2 } from "./project/Project2";
import { Project3 } from "./project/Project3";
import { useWindowWidth } from "@react-hook/window-size";

export const Projects = () => {
  const screenWidth = useWindowWidth();
  return (
    <div className="projects">
      <div className="projects__heading">
        {screenWidth > 350 ? "Some Things I've Built" : "Things I've Built"}
      </div>
      <ul className="projects__list">
        <Project1 />
        <Project2 />
        <Project3 />
      </ul>
    </div>
  );
};
