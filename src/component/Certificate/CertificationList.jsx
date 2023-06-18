import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CetificationOfCompletion from "./CertificateofCompletion";
import { certificates, certOfCompletion } from "../../service";
import { useLocation } from "react-router-dom";

const openExternalLink = (link) =>
  link && (
    <a href={link} without rel="noopener noreferrer" target="_blank">
      <FontAwesomeIcon className="icon" icon={["fas", "external-link-alt"]} />
    </a>
  );

export default function CertificateNCertifications() {
  const { hash } = useLocation();
  const certifications = useRef(null);
  useEffect(() => {
    hash === "#certifications" && certifications.current.scrollIntoView();
  }, [hash]);

  return (
    <div className="container certifications" ref={certifications}>
      <section id="certificate">
        <h1>Certificates</h1>
        <ul>
          {certificates.major.map((e) => (
            <li key={e.id}>
              {" "}
              <img src={e.icon} alt="certificate" />{" "}
              <span>
                {e.name}
                {openExternalLink(e.link)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Certificate of Completion</h3>
        {certOfCompletion.map(({ name, certificates }) => (
          <CetificationOfCompletion name={name} certificates={certificates} />
        ))}
      </section>
    </div>
  );
}
