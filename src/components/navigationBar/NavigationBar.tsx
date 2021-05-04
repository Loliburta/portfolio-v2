import { useState } from "react";
import Logo from "../../icons/logo.svg";
import { Icon } from "@iconify/react";
import menu from "@iconify-icons/bx/bx-menu-alt-right";
export const NavigationBar = () => {
  const [active, isActive] = useState(false);
  return (
    <div className="navBar">
      <img src={Logo} alt="logo" className="navBar__logo" />
      <div className="menu" onClick={() => isActive(!active)}>
        <Icon icon={menu} />
      </div>
      <div className="navBar__links">
        <div className="navBar__links__link">01. About</div>
        <div className="navBar__links__link">02. Projects</div>
        <div className="navBar__links__link">03. Contact</div>
        <div className="navBar__links__resume">Resume</div>
      </div>
      <div className={active ? "navBar__menu" : "navBar__menu--active"}>
        <div className="navBar__menu__link">01. About</div>
        <div className="navBar__menu__link">02. Projects</div>
        <div className="navBar__menu__link">03. Contact</div>
        <div className="navBar__menu__resume">Resume</div>
      </div>
    </div>
  );
};
