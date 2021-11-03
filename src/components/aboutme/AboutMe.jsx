import "./aboutMe.scss";
import { tech } from "../../data";

export default function AboutMe() {
  const back = tech.filter((e) => e.tech === "back");
  const front = tech.filter((e) => e.tech === "front");
  const other = tech.filter((e) => e.tech === "other");
  const inProgress = tech.filter((e) => e.tech === "inProgress");

  return (
    <div className="aboutMe">
      <div className="left">
        <h1>soy el izquierdo</h1>
      </div>

      <div className="right">
        <h1 className="title" id="aboutMe">
          ABOUT ME
        </h1>
        <p className="description">
          Soy un desarrollador Web Full Stack, nacido al pie de las colosales
          montañas de Mendoza, Argentina. Siempre fui un apasionado por la
          tecnología, la filosofía y el arte.
          <br />
          <br />
          Mí marcado perfil técnico y artístico me permiten desenvolverme con
          facilidad tanto en el desarrollo lógico del back y del front, como así
          también en los lineamientos estéticos y artísticos del diseño web.
          <br />
          <br />
          Mi capacidad resiliente de trabajar con esmero, dedicación y
          profesionalismo me han permitido asimilar conceptos y nuevas
          tecnologías para ir creciendo exponencialmente en un campo en donde la
          innovación tech es moneda corriente.
        </p>
        <br />

        <h2 className="title">TECHNOLOGY STACK</h2>

        <div className="boxSliders">

          <div className="box1">
          <h3>BACKEND & DATA BASE:</h3>
            {back.map((e) => (
              <div className="slider" id={e.id}>
                <a href={e.webSite} target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + e.img} alt={e.alt} />
                </a>
              </div>
            ))}
          </div>
          <div className="box2">
          <h3>FRONTEND & DESIGN:</h3>
            {front.map((e) => (
              <div className="slider" id={e.id}>
                <a href={e.webSite} target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + e.img} alt={e.alt} />
                </a>
              </div>
            ))}
          </div>
          <div className="box3">
          <h3>OTHER TECHNOLOGIES:</h3>
            {other.map((e) => (
              <div className="slider" id={e.id}>
                <a href={e.webSite} target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + e.img} alt={e.alt} />
                </a>
              </div>
            ))}
          </div>
          <div className="box4">
          <h3>LEARNING NEW TECHNOLOGIES:</h3>
            {inProgress.map((e) => (
              <div className="slider" id={e.id}>
                <a href={e.webSite} target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + e.img} alt={e.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
