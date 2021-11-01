import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 70,
      strings: ["Full Stack Developer", "Designer", "& Artist"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src={process.env.PUBLIC_URL + "/assets/man.png"}
            alt="img portada"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Alejandro Valverde</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img
              src={process.env.PUBLIC_URL + "/assets/down.png"}
              alt="arrow down"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
