import React, { useState } from "react";
import "./sass/main.scss";
import BottomNav from "./component/BottomNav/BottomNav";
import SideNav from "./component/SideNav/SideNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Intro from "./component/Intro/Intro";
import Skills from "./component/Skills/Skills";
import Contact from "./component/Contact/Contact";

const App = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  return (
    <main>
      <ToastContainer />

      {sideNavIsOpen && <SideNav setSideNavIsOpen={setSideNavIsOpen} sideNavIsOpen={sideNavIsOpen} />}
      <div onClick={() => setSideNavIsOpen(false)}>
        <Intro />
        <Skills />
        <Contact />
      </div>
      <BottomNav
        setSideNavIsOpen={setSideNavIsOpen}
        sideNavIsOpen={sideNavIsOpen}
      />
    </main>
  );
};

export default App;
