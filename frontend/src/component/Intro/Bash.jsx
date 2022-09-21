import React from "react";
import Typewriter from "typewriter-effect";
import "./style.scss";

function Bash() {
  return (
    <div id="command-wrapper">
      <div id="command-nav">
        <div className="dots-wrapper">
          <div id="dot-1"></div>
          <div id="dot-2"></div>
          <div id="dot-3"></div>
        </div>
      </div>
      <div id="command-body">
        geniusapc :~
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("who am I")
              .pauseFor(2000)
              .pasteString("<br/> \t I am Prince Arthur")
              .pasteString("<br/> \t I am a fullstack developer")
              .pasteString("<br/> geniusapc :~ ")
              .pauseFor(2000)
              .typeString("clear")
              .pauseFor(2000)
              .deleteAll(0.1)
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default Bash;
