import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed:  150,
      backDelay: 3000,
      backSpeed: 100,
      strings: ["Full Stack Developer", "Designer & Artist", "Freelance"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src={process.env.PUBLIC_URL + "/assets/ale.png"}
            alt="img portada"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hi There, I'm</h3>
          <h1>Alejandro Valverde</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
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
