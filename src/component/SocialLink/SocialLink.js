import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constant from "../../constants";

const SocialLink = (props) => {
  return (
    <section className="social-link-wrapper">
      {constant.personalInfo.socailLinks.map((e) => (
        <a href={e.link} key={e.id} className="social-links">
          <FontAwesomeIcon className= "social-link-logo" size="2x" icon={e.icon} />
          <span className="social-link-name">{e.name}</span>
        </a>
      ))}
    </section>
  );
};

export default SocialLink;
