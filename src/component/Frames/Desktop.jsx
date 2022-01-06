import React from 'react'
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.svg";
import constants from "../../constants"
import SocialLinks from "../../component/SocialLink/SocialLink"



function Desktop(props) {
    const {defaultSiteUrl} = constants
    const aboutURL = `${defaultSiteUrl}/search?q=youngenius&fname=prince&lname=arthur`
    return (
        <div id="dsk">
            <div id="dsk-screen">
            <>
            <section id="dsk-browser-tab">
                <div>       
                    <div id="dsk-open-tabs">
                        About me <span><FontAwesomeIcon className="icon"   icon={["fas", "times"]} /> </span>
                    </div>
                    <figure> 
                        <FontAwesomeIcon  className="icon"   icon={["fas", "minus"]} />
                        <FontAwesomeIcon  className="icon"   icon={["fas", "times"]} />
                    </figure>
                </div>
                <div>
                    <FontAwesomeIcon  className="icon"   icon={["fas", "arrow-left"]} /> 
                    <FontAwesomeIcon  className="icon"   icon={["fas", "arrow-right"]} /> 
                    <FontAwesomeIcon  className="icon"   icon={["fas", "redo-alt"]} /> 
                    <input type="text" defaultValue={aboutURL} readOnly/>
                </div>
            </section>
        
        
            <section id="browser-header">   
                <figure>
                    <img width="40px" src={logo} alt="geniusapc" />
                </figure> 
                <SocialLinks  /> 
            </section>
        </>
                {props.children}
            </div>
            <div id="dsk-detail">
                    <span>G</span>
                    <span> Geniusapc</span>
            </div>
        </div>
    )
}

export default Desktop




