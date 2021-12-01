import "./infoProyect.scss";
import React, { useState } from "react";
import {
  Close,
  GitHub,
  YouTube,
  OpenInBrowser,
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material";
import {
  featuredPortfolio,
  spaPortfolio,
  dspPortfolio,
  mobilePortfolio,
  artPortfolio,
} from "../../data";

export default function InfoProyect({ capture, setModal, section }) {
  let [current, setCurrent] = useState(0);
  let [zoom, setZoom] = useState(false);
  let nro = capture;
  let card = undefined;

  if (section === "featured")
    card = featuredPortfolio.find((e) => e.id === nro);
  if (section === "spa") card = spaPortfolio.find((e) => e.id === nro);
  if (section === "dsp") card = dspPortfolio.find((e) => e.id === nro);
  if (section === "mobile") card = mobilePortfolio.find((e) => e.id === nro);
  if (section === "art") card = artPortfolio.find((e) => e.id === nro);

  let slide = card.images.map((e) => e);

  function forward() {
    if (current === slide.length - 1) {
      current = -1;
    }
    setCurrent(current + 1);
  }

  function back() {
    if (current === 0) {
      current = slide.length;
    }
    setCurrent(current - 1);
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="close" onClick={() => setModal(false)}>
          <Close />
        </div>
        <h1>{card.title}</h1>
        <p>{card.description}</p>
        <h4>{card.tech}</h4>
        <div className="carrousel">
          <div className="arrow" onClick={back}>
            <ArrowBackIosOutlined />
          </div>

          <div className={zoom === false ? "boxImg" : "boxImgZoom"}>
            <img
              src={process.env.PUBLIC_URL + slide[current]}
              alt="images"
              onClick={() => setZoom(!zoom)}
            />
          </div>

          <div className="arrow" onClick={forward}>
            <ArrowForwardIosOutlined />
          </div>
        </div>
        <footer>
          {card.github && (
            <a href={card.github} target="_blank" rel="noreferrer">
              <GitHub className="ico" />
            </a>
          )}
          {card.deploy && (
            <a href={card.deploy} target="_blank" rel="noreferrer">
              <OpenInBrowser className="ico" />
            </a>
          )}
          {card.youtube && (
            <a href={card.youtube} target="_blank" rel="noreferrer">
              <YouTube className="ico" />
            </a>
          )}
        </footer>
      </div>
    </div>
  );
}
