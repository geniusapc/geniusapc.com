import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSimCard } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export default function Technologies({ stacks, title }) {
  return (
    <div className="technologies">
      <h2>{title}</h2>
      <ul>
        {stacks.map((e) => (
          <li key={e.name}>
            <FontAwesomeIcon icon={faSimCard} className="icon" />
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
