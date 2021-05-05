import { NavigationBar } from "./navigationBar/NavigationBar";
import { Socials } from "./socials/Socials";
import { Mail } from "./mail/Mail";
import { Hero } from "./hero/Hero";
import { AboutMe } from "./aboutMe/AboutMe";
import { Projects } from "./projects/Projects";
import { OtherProjects } from "./otherProjects/OtherProjects";
import { Contact } from "./contact/Contact";

export const App = () => {
  return (
    <>
      <NavigationBar />
      <div id="wrapper">
        <Socials />
        <Mail />
        <Hero />
        <AboutMe />
        <Projects />
        <OtherProjects />
        <Contact />
      </div>
    </>
  );
};
