import React from "react";
import "./style.scss";
import Technologies from "./Technology";
import { stacks } from "../../service";

export default function Skills() {
  return (
    <section id="skills">
      <h1>SKILLS</h1>
      <div id={"skills-container"}>
        <Technologies stacks={stacks.backend} title={"Backend"} />
        <Technologies
          stacks={stacks.frontend}
          title={"Frontend"}
        />
        <Technologies stacks={stacks.devops} title={"DevOps"} />
      </div>
    </section>
  );
}
