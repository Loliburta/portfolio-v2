import { useState } from "react";
import Logo from "../../icons/logo.svg";
import { Squash as Hamburger } from "hamburger-react";
export const NavigationBar = () => {
  const [active, isActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="navBar">
      <img src={Logo} alt="logo" className="navBar__logo" />
      <div className="navBar__hamburger " onClick={() => isActive(!active)}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="navBar__links">
        <div className="navBar__links__link">01. About</div>
        <div className="navBar__links__link">02. Projects</div>
        <div className="navBar__links__link">03. Contact</div>
        <div className="navBar__links__resume">Resume</div>
      </div>
      <div className={active ? "navBar__menu--active" : "navBar__menu"}>
        <div className="navBar__menu__slink">01. About</div>
        <div className="navBar__menu__link">02. Projects</div>
        <div className="navBar__menu__link">03. Contact</div>
        <div className="navBar__menu__resume">Resume</div>
      </div>
    </div>
  );
};
