import { Mail, WhatsApp, GitHub, LinkedIn } from "@mui/icons-material";
import "./topbar.scss";

export default function Topbar({menuOpen, setMenuOpen}) {
  
  
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <LinkedIn className="icon" />
            {/* <span>+549 261-206281</span> */}
          </div>
          <div className="itemContainer">
            <WhatsApp className="icon" />
            {/* <span>+549 261-206281</span> */}
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            {/* <span>Alevalverde</span> */}
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            {/* <span>alevalverdev8@gmail.com</span> */}
          </div>
        </div>
        <div className="center">
          <a href="#intro" className="logo">
            {/* αλέξανδρος.  */}
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
