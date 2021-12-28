import React, {useState} from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon  className="side-nav-arrow"  size="1x"  icon={["fas", "hand-point-left"]} />

export default function StartBar({ setSideNavIsOpen,sideNavIsOpen }) {
  const [isWindowClicked, setIsWindowClicked] = useState(false)

  const toggleSideBar = () => {
    setSideNavIsOpen(!sideNavIsOpen);
    setIsWindowClicked(true)
  };

  return (
    <div id="bottom-nav">
       {!isWindowClicked && <FontAwesomeIcon  id="window-pointer"  transform={{ rotate: 290 }}  size="2x"  icon={["fas", "hand-point-left"]} />}
      <FontAwesomeIcon onClick={toggleSideBar} className="windows"  size="2x"  icon={["fab", "windows"]} />
    </div>
  );
}
