import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Typewriter from "typewriter-effect";
import "./style.scss";

function Bash() {
    return (
        <section  id="command-wrapper">
            <div  id="command-nav">
                <div className="dots-wrapper">
                        <div id="dot-1" ></div>
                        <div id="dot-2" ></div>
                        <div id="dot-3" ></div> 
                </div>
                <div className="command-nav-title">
                    <FontAwesomeIcon  icon={['fas', 'home']} size="1x" color="red" />
                    <span>Prince -- -Arthur </span>  
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
                        .typeString("whoami")
                        .pauseFor(2000)
                        .pasteString("<br/> \t I am a fullstack developer")
                        .pasteString("<br/>I am geniusapc")
                        .pasteString("<br/> geniusapc :~ ")
                        .pauseFor(2000)
                        .typeString("clear")
                        .pauseFor(2000)
                        .deleteAll(0.1)
                        .start();
                    }}
                />
            </div>
        </section>
    )
}

export default Bash
