import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./style.scss";
import ContactForm from "./Form";
import { aboutMe, contactMe } from "../../service";

const Contact = () => {
  const { linkedIn, github, twitter } = aboutMe.socailLinks;

  return (
    <section id="contact">
      <h1> CONTACT</h1>
      <article>
      {contactMe.text}
        
        <div id="contact-social-links">
          <a href={linkedIn.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faLinkedin} />
          </a>
          <a href={github.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faGithub} />
          </a>
          <a href={twitter.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faTwitter} />
          </a>
        </div>
      </article>

      <ContactForm />
    </section>
  );
};

export default Contact;
