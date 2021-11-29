import "./infoProyect.scss";
import { Close } from "@mui/icons-material";

export default function InfoProyect({modal, setModal}) {
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
