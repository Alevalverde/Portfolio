import "./contact.scss";
import { WhatsApp, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [done, setDone] = useState(false);
  const form = useRef();
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_93ch70g",
        "template_mgotdkm",
        form.current,
        "user_0H6L28FTnXz2kTbO4fX8D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactBody" id="contact">
      <div className="bg"></div>
      <div className="bg2"></div>
      <div className="wrapper">
        <div className="left">
          <h1 className="title"> Let's discuss your project</h1>
          <br />
          <h2> Hablemos sobre tu proyecto...</h2>
          <div className="info">
            <div className="infoItem">
              <div className="containerIco">
                <img
                  src={process.env.PUBLIC_URL + "/assets/phone.png"}
                  alt="phone"
                  className="icon"
                />
              </div>
              +54 9 261 2062481
            </div>

            <div className="infoItem">
              <div className="containerIco">
                <img
                  src={process.env.PUBLIC_URL + "/assets/email.png"}
                  alt="email"
                  className="icon"
                />
                </div>
                alevalverdev8@gmail.com
              </div>

            <div className="infoItem">
              <div className="containerIco">
                <img
                  src={process.env.PUBLIC_URL + "/assets/address.png"}
                  alt="address"
                  className="icon"
                />
              </div>
              Mendoza - Argentina
            </div>
          </div>

          <div className="iconos">
            <div className="itemContainer">
              <a
                href="https://www.linkedin.com/in/alevalverde-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn className="icon" />
              </a>
            </div>
            <div className="itemContainer">
              <a
                href="https://api.whatsapp.com/send?phone=5492612062481&text=Hola%21%20Quisiera%20contactarme%20contigo%20para%20contratar%20tus%20servicios%21"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsApp className="icon" color="$mainColor" />
              </a>
            </div>
            <div className="itemContainer">
              <a
                href="https://github.com/Alevalverde"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub className="icon" />
              </a>
            </div>
            <div className="itemContainer">
              <a
                href="https://twitter.com/AleRValverde"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="desc">
            <b>¿Tienes algún proyecto en mente, alguna idea?</b> No dudes en
            ponerte en contacto conmigo. Puedes enviarme un email, un mensaje de
            whatasapp o simplemente contactarme por las distintas redes
            sociales.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Nombre" name="user_name" />
            <input type="text" placeholder="Motivo" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea rows="10" placeholder="Mensaje" name="message" />
            <button>Submit</button>
          </form>
          {done && (
            <h4 className="resp">
              "Gracias por el mensaje. Te responderé a la brevedad"
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
