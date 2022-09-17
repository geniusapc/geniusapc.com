import React, { useState } from "react";
import "./sass/main.scss";
import BottomNav from "./component/BottomNav/BottomNav";
import SideNav from "./component/SideNav/SideNav";
import SideNavLg from "./component/SideNav/SideNav.lg";
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
      <div style={{ display: "flex" }}>
        <div>
          <SideNavLg
            setSideNavIsOpen={setSideNavIsOpen}
            sideNavIsOpen={sideNavIsOpen}
          />
        </div>

        <div style={{ width: "100%" }}>
          <Intro />
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default App;

// <BottomNav
//   setSideNavIsOpen={setSideNavIsOpen}
//   sideNavIsOpen={sideNavIsOpen}
// />
