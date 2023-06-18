import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./style.scss";

const SocialLink = ({ socialLink }) => {
  return (
    <div className="social-link-wrapper">
      <a href={"/#"} className="social-links">
        <FontAwesomeIcon className="social-link-icon" icon={faLinkedin} />
        <span className="social-link-name">{"LinkedIn"}</span>
      </a>
    </div>
  );
};

export default SocialLink;
