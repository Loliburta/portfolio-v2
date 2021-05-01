import { NavigationBar } from "./navigationBar/NavigationBar";
import { Hero } from "./hero/Hero";
import { AboutMe } from "./aboutMe/AboutMe";
import { Projects } from "./projects/Projects";

export const App = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
};
