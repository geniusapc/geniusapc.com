import React, { useState } from "react";
import "./style.scss";
// import axios from "axios"
import { toast } from "react-toastify";
import { aboutMe } from "../../service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { linkedIn, github, twitter } = aboutMe.socailLinks;
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      // const url = ""
      // await axios.post(url, {name, email,message})
      // toast.success("Message sent successfully", { hideProgressBar: true });
    } catch (error) {
      toast.error("An error occurred", { hideProgressBar: true });
    }
  };
  return (
    <section id="contact">
      <h1> CONTACT</h1>
      <article>
        Thanks for your interest. If you'd like to get in touch with me, please
        contact me on social media or complete the following form.{" "}
        <div id="contact-social-links">
          <a href={linkedIn.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faLinkedin} />{" "}
          </a>
          <a href={github.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faGithub} />{" "}
          </a>
          <a href={twitter.link} className="social-links">
            <FontAwesomeIcon className="social-link-icon" icon={faTwitter} />{" "}
          </a>
        </div>
      </article>

      <div id="contact-form-container">
        <form id="contact-form" onSubmit={sendMessage}>
          <input
            className="default-input-form"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name *"
          />
          <input
            className="default-input-form"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address *"
          />
          <textarea
            className="default-input-form"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message *"
          />
          <input type="submit" value="Send Message" disabled />
        </form>
      </div>
    </section>
  );
};

export default Contact;
