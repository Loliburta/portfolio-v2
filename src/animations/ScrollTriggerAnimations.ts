import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerAnimations = () => {
  const anim = (className: string, id?: string | undefined, start = 85) => {
    const result = className
      ? {
          y: "+=50",
          opacity: 0,
          scrollTrigger: {
            trigger: className,
            start: "0% 85%",
          },
        }
      : {
          y: "+=50",
          opacity: 0,
          scrollTrigger: {
            trigger: id,
            start: `0% ${start}%`,
          },
        };
    return result;
  };
  useEffect(() => {
    gsap.from(".aboutMe", anim(".aboutMe"));
    gsap.from(".projects__heading", anim(".projects__heading"));
    gsap.from("#p1", anim("", "#p1"));
    gsap.from("#p2", anim("", "#p2"));
    gsap.from("#p3", anim("", "#p3"));
    gsap.from(".otherProjects__heading", anim(".otherProjects__heading"));
    gsap.from(".otherProjects__github", anim(".otherProjects__github"));
    gsap.from("#op1", anim("", "#op1"));
    gsap.from("#op2", anim("", "#op2"));
    gsap.from("#op3", anim("", "#op3"));
    gsap.from("#op4", anim("", "#op4"));
    gsap.from("#op5", anim("", "#op5"));
    gsap.from("#op6", anim("", "#op6"));
    gsap.from(
      ".contact--wrapper__contact__heading",
      anim(".contact--wrapper__contact__heading")
    );
    gsap.from(
      ".contact--wrapper__contact__description",
      anim(".contact--wrapper__contact__description")
    );
    gsap.from(
      ".contact--wrapper__contact__button",
      anim(".contact--wrapper__contact__button", "", 100)
    );
  }, []);
};
