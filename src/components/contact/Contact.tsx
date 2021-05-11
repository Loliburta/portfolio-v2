import { Element } from "react-scroll";
import Buildings from "../../svg/Buildings.svg";
import { Design } from "../designed/Design";

export const Contact = () => {
  return (
    <div className="contact--wrapper">
      <img
        src={Buildings}
        alt="buildings"
        className="contact--wrapper__buildings"
      />

      <Element name="contact">
        <div className="contact--wrapper__contact">
          <div className="contact--wrapper__contact__heading">Contact</div>
          <div className="contact--wrapper__contact__description">
            <p>
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, click on this awesome button below
              or send an email to <strong>Maranowski.Mateusz@gmail.com</strong>
            </p>
          </div>
          <div className="contact--wrapper__contact__button">
            <a href="mailto:maranowski.mateusz@gmail.com">Send Mail </a>
          </div>
        </div>
      </Element>
      <Design />
    </div>
  );
};
