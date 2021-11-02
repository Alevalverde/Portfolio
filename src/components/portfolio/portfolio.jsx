import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  spaPortfolio,
  dspPortfolio,
  mobilePortfolio,
  artPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "spa", title: "SPA" },
    { id: "dsp", title: "Design Page" },
    { id: "mobile", title: "Mobile" },
    { id: "art", title: "Art" },
  ];

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
      <h1>Portfolio</h1>
      <ul>
        {list.map((e) => (
          <PortfolioList
            title={e.title}
            active={selected === e.id}
            setSelected={setSelected}
            id={e.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" id={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
