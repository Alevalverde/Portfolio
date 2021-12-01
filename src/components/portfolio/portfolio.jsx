import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import InfoProyect from "./InfoProyect";
import "./portfolio.scss";
import {
  featuredPortfolio,
  spaPortfolio,
  dspPortfolio,
  mobilePortfolio,
  artPortfolio,
  listArea,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [capture, setCapture] = useState(null);
  const [section, setSection] = useState(null);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "spa":
        setData(spaPortfolio);
        break;
      case "dsp":
        setData(dspPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "art":
        setData(artPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  function all(e) {
    setModal(true);
    setCapture(e);
    setSection(selected);
  }

  return (
    <div className="portfolio" id="portfolio">
      <>
        <h1>Portfolio</h1>
        <ul>
          {listArea.map((e) => (
            <PortfolioList
              title={e.title}
              active={selected === e.id}
              setSelected={setSelected}
              id={e.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.length ? (
            data.map((d) => (
              <div className="item" id={d.id} onClick={() => all(d.id)}>
                <img src={process.env.PUBLIC_URL + d.img} alt="" />
                <h3>{d.title}</h3>
              </div>
            ))
          ) : (
            // eslint-disable-next-line jsx-a11y/alt-text
            <div className="boxloader">
              <img
                className="loader"
                src="https://www.gifsanimados.org/data/media/695/en-construccion-imagen-animada-0035.gif"
                alt="construction"
              />
            </div>
          )}
        </div>
      </>
      {modal && <InfoProyect setModal={setModal} capture={capture} section={section}/>}
      <div className="a">
        <a href="#contact">
          <img
            src={process.env.PUBLIC_URL + "/assets/down.png"}
            alt="arrow down"
          />
        </a>
      </div>
    </div>
  );
}
