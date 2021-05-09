import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Animations = () => {
  const [tl] = useState(gsap.timeline());
  useEffect(() => {
    tl.from(".navBar__logo", { opacity: 0, duration: 0.5, delay: 0.3 });
    tl.from(".navBar__hamburger", { opacity: 0, duration: 0.5 }, "-=0.5");
    tl.from("#nav__about", { y: "-=30", opacity: 0, duration: 0.2 });
    tl.from(
      "#nav__projects",
      { y: "-=30", opacity: 0, duration: 0.2 },
      "-=0.1"
    );
    tl.from("#nav__contact", { y: "-=30", opacity: 0, duration: 0.2 }, "-=0.1");
    tl.from("#nav__resume", { y: "-=30", opacity: 0, duration: 0.2 }, "-=0.1");
    tl.from(".hero__greet", { y: "+=40", opacity: 0, duration: 0.2 });
    tl.from(".hero__name", { y: "+=30", opacity: 0, duration: 0.2 }, "-=0.1");
    tl.from(
      ".hero__catchphrase",
      { y: "+=30", opacity: 0, duration: 0.2 },
      "-=0.1"
    );
    tl.from(
      ".hero__description",
      { y: "+=30", opacity: 0, duration: 0.2 },
      "-=0.1"
    );
    tl.from(".hero__button", { y: "+=30", opacity: 0, duration: 0.2 }, "-=0.1");
    tl.from(".socials", { opacity: 0, duration: 0.5 }, "-=0.1");
    tl.from(".mail", { opacity: 0, duration: 0.5 }, "-=0.5");
  }, [tl]);
};
