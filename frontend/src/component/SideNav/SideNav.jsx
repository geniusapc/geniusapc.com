import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
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
    <aside id="side-nav">
      <div id="side-nav-left">
        <FontAwesomeIcon
          className="side-nav-arrow"
          size="1x"
          icon={faArrowLeft}
        />

        <section className="social-link-wrapper">
          <a href={linkedIn.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faLinkedin} />
          </a>
          <a href={github.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faGithub} />
          </a>
          <a href={twitter.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faTwitter} />
          </a>
          <a href={facebook.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faFacebook} />
          </a>
        </section>
      </div>
      <ul id="side-nav-right">
        {links.map((e) => (
          <li key={e.id}>
            <Link
              className="side-nav-link"
              onClick={() => setSideNavIsOpen(false)}
              to={e.link}
              key={e.id}
            >
              <FontAwesomeIcon
                className="side-nav-link-logo"
                size="2x"
                icon={e.icon}
              />{" "}
              <span>{e.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
