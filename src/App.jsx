import React, { useState } from "react";

import Routes from "./routes/Routes";
import "./sass/main.scss";
import "./App.scss";

import Header from "./component/Header/Header";
import BottomNav from "./component/BottomNav/BottomNav";
import SideNav from "./component/SideNav/SideNav";

const App = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  return (
    <main id="main-container">
      <Header />
      <div id="pages" onClick={() => setSideNavIsOpen(false)}>
        {sideNavIsOpen && <SideNav />}
        <Routes />
      </div>
      <BottomNav setSideNavIsOpen={setSideNavIsOpen} sideNavIsOpen={sideNavIsOpen} />
    </main>
  );
};

export default App;
