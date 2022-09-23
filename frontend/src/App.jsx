import React from "react";
import "./sass/main.scss";
import "./App.scss";
import Nav from "./component/SideNav/SideNav.lg";
import Intro from "./component/Intro/Intro";
import Skills from "./component/Skills/Skills";
import Contact from "./component/Contact/Contact";

const App = () => {
  return (
    <main id="main-container">
      <Nav />
      <div>
        <Intro />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default App;
