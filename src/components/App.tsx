import { NavigationBar } from "./navigationBar/NavigationBar";
import { Socials } from "./socials/Socials";
import { Mail } from "./mail/Mail";
import { Hero } from "./hero/Hero";
import { AboutMe } from "./aboutMe/AboutMe";
import { Projects } from "./projects/Projects";
import { OtherProjects } from "./otherProjects/OtherProjects";
import { Contact } from "./contact/Contact";
import { Animations } from "../animations/Animations";
import { ScrollTriggerAnimations } from "../animations/ScrollTriggerAnimations";

export const App = () => {
  Animations();
  ScrollTriggerAnimations();
  return (
    <>
      <NavigationBar />
      <Socials />
      <Mail />
      <div id="wrapper">
        <Hero />
        <AboutMe />
        <Projects />
        <OtherProjects />
        <Contact />
      </div>
    </>
  );
};
