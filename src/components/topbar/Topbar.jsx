import { WhatsApp, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/alevalverde-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://api.whatsapp.com/send?phone=5492612062481&text=Hola%21%20Quisiera%20contactarme%20contigo%20para%20contratar%20tus%20servicios%21"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp className="icon" color="$mainColor" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://github.com/Alevalverde"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://twitter.com/AleRValverde"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="icon" />
            </a>
          </div>
        </div>
        <div className="center">
          <a href="#intro" className="logo">
            {/* αλέξανδρος.  */}
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
