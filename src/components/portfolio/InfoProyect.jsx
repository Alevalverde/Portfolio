import "./infoProyect.scss";
import { Close } from "@mui/icons-material";
import {
  featuredPortfolio,
  // spaPortfolio,
  // dspPortfolio,
  // mobilePortfolio,
  // artPortfolio,
} from "../../data";

export default function InfoProyect({ capture, setModal }) {
  let nro = capture;
  let carta = featuredPortfolio.find((e) => e.id === nro);

  return (
    <div className="overlay">
      <div className="modal">
        <div className="close" onClick={() => setModal(false)}>
          <Close />
        </div>
        <h1>{carta.title}</h1>
        <p>{carta.description}</p>
        <img src={carta.img} alt={carta.title} />
        <footer>
        {carta.github && <p>logo</p>}
        {carta.deploy && <p>logo</p>}
        {carta.youtube && <p>logo</p>}
        </footer>
      </div>
    </div>
  );
}
