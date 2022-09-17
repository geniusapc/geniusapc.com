import React, { useState } from "react";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faHandPointLeft,
  faHome,
  faIdCard,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { aboutMe } from "../../service";

const { linkedIn, github, twitter, facebook } = aboutMe.socailLinks;

export default function StartBar({ setSideNavIsOpen, sideNavIsOpen }) {
  const [isWindowClicked, setIsWindowClicked] = useState(false);

  const toggleSideBar = () => {
    setSideNavIsOpen(!sideNavIsOpen);
    setIsWindowClicked(true);
  };

  return (
    <div id="bottom-nav">
      <section id>
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
          icon={faHome}
        />
        <FontAwesomeIcon
          onClick={toggleSideBar}
          className="windows"
          size="2x"
          icon={faIdCard}
        />
        <FontAwesomeIcon
          onClick={toggleSideBar}
          className="windows"
          size="2x"
          icon={faPhoneVolume}
        />
      </section>

      <section id="social-link-wrapper">
        <a href={linkedIn.link} className="links">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a href={github.link} className="links">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a href={twitter.link} className="links">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href={facebook.link} className="links">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </a>
      </section>
    </div>
  );
}
