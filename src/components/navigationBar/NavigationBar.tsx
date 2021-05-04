import Logo from "../../icons/logo.svg";

export const NavigationBar = () => {
  return (
    <div className="navBar">
      <img src={Logo} alt="logo" className="navBar__logo" />
      <div className="navBar__links">
        <div className="navBar__links__link">01. About</div>
        <div className="navBar__links__link">02. Projects</div>
        <div className="navBar__links__link">03. Contact</div>
        <div className="navBar__links__resume">Resume</div>
      </div>
    </div>
  );
};
