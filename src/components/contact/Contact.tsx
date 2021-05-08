import { Element } from "react-scroll";
import Buildings from "../../svg/Buildings.svg";

export const Contact = () => {
  return (
    <Element name="contact">
      <div className="contact--wrapper">
        <img
          src={Buildings}
          alt="buildings"
          className="contact--wrapper__buildings"
        />
        <div className="contact--wrapper__contact">
          <div className="contact--wrapper__contact__heading">Contact</div>
          <div className="contact--wrapper__contact__description">
            <p>
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, click on this awesome button below
              or send an email to <strong>Maranowski.Mateusz@gmail.com</strong>
            </p>
          </div>
          <div className="contact--wrapper__contact__button">Send Mail</div>
        </div>
      </div>
    </Element>
  );
};
