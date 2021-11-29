import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 50,
      strings: [
        "Full Stack JavaScript",
        "Web Developer",
        "Designer & Artist",
        "Freelance",
      ],
    });
  }, []);

  console.log(
    "Hola visitante!! Bienvenido a mi Portfolio, espero que sea de tu agrado"
  );
  console.log("Enjoy =)");

  return (
    <div className="intro" id="intro">
      <div className="photo">
        <div className="imgContainer">
          <img
            src={process.env.PUBLIC_URL + "/assets/ale.png"}
            alt="img portada"
          />
        </div>
      </div>
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Alejandro Valverde</h1>
        <h3>
          <span ref={textRef}></span>
        </h3>
      </div>
      <a href="#aboutMe">
        <img
          src={process.env.PUBLIC_URL + "/assets/down.png"}
          alt="arrow down"
        />
      </a>
    </div>
  );
}
