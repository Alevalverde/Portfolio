import "./infoProyect.scss";
import { Close } from "@mui/icons-material";
import {setModal, modal} from "./Portfolio"

export default function InfoProyect() { 


  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="close" onClick={() => setModal(!modal)}>
          <Close />
        </div>
      </div>
    </div>
  );
}
