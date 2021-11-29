import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Canvas from "./components/canvas/Canvas";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <div className="canvas">
          <Canvas />
        </div>
        <Intro />
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
