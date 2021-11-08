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
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  

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

  return (
    <div className="portfolio" id="portfolio">
      {!modal ? (
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
                <div className="item" id={d.id} onClick={()=>setModal(true)}>
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>
                </div>
              ))
            ) : (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src="https://i.imgur.com/VxJeFsf.jpg"
                height="400px"
                margin-top="150px"
              />
            )}
          </div>
        </>
      ) : (
        <InfoProyect modal={modal} />
      )}
    </div>
  );
}
