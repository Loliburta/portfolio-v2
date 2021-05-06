import { useState, useEffect, useRef } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Logo from "../../icons/logo.svg";
import { Squash as Hamburger } from "hamburger-react";
export const NavigationBar = () => {
  const screenWidth = useWindowWidth();
  const [isOpen, setOpen] = useState(false);
  const navbar = useRef(null);

  const useOutsideAlerter = (ref: React.MutableRefObject<any>) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(navbar);

  useEffect(() => {
    if (screenWidth > 768) {
      setOpen(false);
    }
  }, [screenWidth]);
  useEffect(() => {
    const wrapper = document.getElementById("wrapper");
    if (isOpen) {
      wrapper!.style.filter = "blur(3px)";
      document.body.style.overflowY = "hidden";
    } else {
      wrapper!.style.filter = "blur(0px)";
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <div className="navBar" ref={navbar}>
      <img src={Logo} alt="logo" className="navBar__logo" />
      <div className="navBar__hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="navBar__links">
        <div className="navBar__links__link">01. About</div>
        <div className="navBar__links__link">02. Projects</div>
        <div className="navBar__links__link">03. Contact</div>
        <div className="navBar__links__resume">Resume</div>
      </div>
      <div className={isOpen ? "navBar__menu--active" : "navBar__menu"}>
        <div className="navBar__menu__link">01. About</div>
        <div className="navBar__menu__link">02. Projects</div>
        <div className="navBar__menu__link">03. Contact</div>
        <div className="navBar__menu__resume">Resume</div>
      </div>
    </div>
  );
};
