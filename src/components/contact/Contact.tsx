import Buildings from "../../svg/Buildings.svg";

export const Contact = () => {
  return (
    <div className="contact--wrapper">
      <img src={Buildings} alt="buildings" className="contact--wrapper__buildings" />

      <div className="contact">
        <div className="contact__heading">Contact</div>
        <div className="contact__description">
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, click on this awesome button below or send an email to
          Maranowski.Mateusz@gmail.com
        </div>
        <div className="contact__button">Send Mail</div>
      </div>
    </div>
  );
};
