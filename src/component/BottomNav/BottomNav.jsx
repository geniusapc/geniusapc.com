import React from "react";
import "./style.scss";

export default function StartBar({ setSideNavIsOpen,sideNavIsOpen }) {

  const toggleSideBar = () => {
    setSideNavIsOpen(!sideNavIsOpen);
  };

  return (
    <div id="bottom-nav">
      <div className="nav" onClick={toggleSideBar} >
          <div id="window-logo" >
            <span className="start-bar-content"></span>
            <span className="start-bar-content"></span>
            <span className="start-bar-content"></span>
            <span className="start-bar-content"></span>
          </div>
      </div>
    </div>
  );
}
