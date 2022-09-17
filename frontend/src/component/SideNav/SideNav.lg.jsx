import React from "react";
import { Link } from "react-router-dom";
import "./style.lg.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faHome,
  faIdCard,
  faPhoneVolume,
  faMicrochip,
  faHandPointLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { aboutMe } from "../../service";

export default function SideNav({ setSideNavIsOpen }) {
  const links = [
    {
      id: 1,
      icon: faHome,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      icon: faIdCard,
      name: "Skills",
      link: "#skills",
    },

    {
      id: 3,
      icon: faPhoneVolume,
      name: "CONTACT",
      link: "#contact",
    },
  ];
  const { linkedIn, github, twitter, facebook } = aboutMe.socailLinks;

  return (
    <aside id="side-nav-lg">
      <div className="nav-link">
        <a href="#home">
          <FontAwesomeIcon className="nav-link-icon" size="2x" icon={faHome} />{" "}
        </a>
        <a href="#skills">
          <FontAwesomeIcon className="nav-link-icon" icon={faIdCard} />
        </a>
        <a href="#contact">
          <FontAwesomeIcon className="nav-link-icon" icon={faPhoneVolume} />
        </a>
      </div>

      <section id="side-nav-social_links">
        <a href={linkedIn.link} className="social-links">
          <FontAwesomeIcon className="social-link-icon" icon={faLinkedin} />
        </a>
        <a href={github.link} className="social-links">
          <FontAwesomeIcon className="social-link-icon" icon={faGithub} />
        </a>
        <a href={twitter.link} className="social-links">
          <FontAwesomeIcon className="social-link-icon" icon={faTwitter} />
        </a>
      </section>
    </aside>
  );
}
