import React, { useState } from "react";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faHandPointLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function StartBar({ setSideNavIsOpen, sideNavIsOpen }) {
  const [isWindowClicked, setIsWindowClicked] = useState(false);

  const toggleSideBar = () => {
    setSideNavIsOpen(!sideNavIsOpen);
    setIsWindowClicked(true);
  };

  return (
    <div id="bottom-nav">
      {!isWindowClicked && (
        <FontAwesomeIcon
          id="window-pointer"
          transform={{ rotate: 290 }}
          size="2x"
          icon={faHandPointLeft}
        />
      )}
      <FontAwesomeIcon
        onClick={toggleSideBar}
        className="windows"
        size="2x"
        icon={faMicrochip}
      />
    </div>
  );
}
