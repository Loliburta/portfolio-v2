import { useState, useEffect, useRef } from "react";
import { animateScroll, Link } from "react-scroll";
import { useWindowWidth } from "@react-hook/window-size";
import { Squash as Hamburger } from "hamburger-react";
import { useClickOutside } from "../../hooks/useClickOutside";
import Logo from "../../svg/logo.svg";
import cv from "../../cv/Mateusz_Maranowski_CV.pdf";
export const NavigationBar = () => {
  const screenWidth = useWindowWidth();
  const [isOpen, setOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const menu = useRef(null);

  const scrollUp = () => {
    animateScroll.scrollToTop();
  };
  const closeMenu = () => {
    setOpen(false);
  };

  useClickOutside(menu, setOpen);

  useEffect(() => {
    if (screenWidth > 768) {
      setOpen(false);
    }
  }, [screenWidth]);
  useEffect(() => {
    console.log(isOpen);
    const wrapper = document.getElementById("wrapper");
    if (isOpen) {
      wrapper!.style.filter = "blur(3px)";
      document.body.style.overflowY = "hidden";
    } else {
      wrapper!.style.filter = "blur(0px)";
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, [scrollNav]);

  return (
    <div className={scrollNav ? "navBar--active" : "navBar"}>
      <img src={Logo} alt="logo" className="navBar__logo" onClick={scrollUp} />
      <span ref={menu}>
        <div className="navBar__hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="navBar__links">
          <Link to="aboutMe" spy={true} smooth={true} duration={300}>
            <div className="navBar__links__link" id="nav__about">
              <strong className="mr-8">01.</strong> About
            </div>
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={350}>
            <div className="navBar__links__link" id="nav__projects">
              <strong className="mr-8">02.</strong> Projects
            </div>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={550}>
            <div className="navBar__links__link" id="nav__contact">
              <strong className="mr-8">03.</strong> Contact
            </div>
          </Link>
          <a href={cv} rel="noopener noreferrer" target="_blank">
            <div className="navBar__links__resume" id="nav__resume">
              Resume
            </div>
          </a>
        </div>
        <div className={isOpen ? "navBar__menu--active" : "navBar__menu"}>
          <Link to="aboutMe" spy={true} smooth={true} duration={300}>
            <div className="navBar__menu__link" onClick={closeMenu}>
              <strong className="mr-8">01.</strong> About
            </div>
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={300}>
            <div className="navBar__menu__link" onClick={closeMenu}>
              <strong className="mr-8">02.</strong> Projects
            </div>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={300}>
            <div className="navBar__menu__link" onClick={closeMenu}>
              <strong className="mr-8">03.</strong> Contact
            </div>
          </Link>
          <a href={cv} rel="noopener noreferrer" target="_blank">
            <div className="navBar__menu__resume">Resume</div>
          </a>
        </div>
      </span>
    </div>
  );
};
