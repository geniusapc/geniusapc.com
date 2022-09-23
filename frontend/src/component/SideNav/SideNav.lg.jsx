import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "./Links";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { aboutMe } from "../../service";

export default function SideNav() {
  const { linkedIn, github, twitter } = aboutMe.socailLinks;

  return (
    <aside id="side-nav">
      <div className="nav-link">
        {links.map((e) => (
          <a href={e.link}>
            <FontAwesomeIcon
              className="nav-link-icon"
              size="2x"
              icon={e.icon}
            />
          </a>
        ))}
      </div>

      <section id="nav-social_links">
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
