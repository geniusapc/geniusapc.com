import React, {useRef, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import profilePics from "../../assets/profilePics.png";
import geniusapc_office2 from "../../assets/geniusapc_office2.jpg";
import geniusapc_office1 from "../../assets/geniusapc-office1.jpg";
import "./style.scss"
import SocialLinks from "../../component/SocialLink/SocialLink"
import Desktop from "../../component/Frames/Desktop"
import Phone from "../../component/Frames/Phone"
import constants from "../../constants"
import logo from "../../assets/logo.svg";
import { useLocation } from 'react-router-dom'



const profileSummaryNav = [
    {
        id:1,
        name:"Stack",
        link:"#stack"
    },
    {
        id:2,
        name:"Projects",
        link:"/projects"
    },
    {
        id:3,
        name:"Contact",
        link:"/contact"
    }

]


const  About = ()=> {
    const {personalInfo, defaultSiteUrl} = constants
    const aboutURL = `${defaultSiteUrl}/search?q=youngenius&fname=prince&lname=arthur`
    
    const {hash} = useLocation();
    const stack = useRef(null)
    useEffect(()=>{hash==="#stack" && stack.current.scrollIntoView()}, [hash])

   
    return (
        <main id="about">

            <Phone>

                <section id="phone-search">
                    <figure>
                        <img width="60px" src={logo} alt="geniusapc" />
                        <img className= "roundThumbnail" height = "20px" width="20px" src={profilePics} alt="geniusapc"/> 
                    </figure>
                    <input  defaultValue={"About Prince Arthur"} type="text"  readOnly/>
                    <SocialLinks  />
                </section> 
                <section id="phone-about-me-summary" >
                    <header>
                        <address>
                            <h1>About me </h1>
                            <div>{personalInfo.role}</div> 
                        </address>
                    </header> 
                    <figure>
                       { [profilePics, geniusapc_office2, geniusapc_office1].map((e)=> <img  height="50px" width="45px" src={e} alt="geniusapc"/>)}    
                    </figure>     
                </section>
                <section id="phone-about-me" > 
                    <article>
                        {personalInfo.aboutMe}
                    </article>
                </section>   
            </Phone>

            <Desktop>
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
                <section id="dsk-profile-summary">
                    <header className= "dsk-profile-summary-section">
                        <figure>
                            <img className= "roundThumbnail" width="20px" src={profilePics} alt="geniusapc"/> 
                            <figcaption>{personalInfo.role}</figcaption>
                            
                        </figure>
                        <nav>
                            {profileSummaryNav.map((e)=><Link to={e.link}>{e.name}</Link> )}
                        </nav>
                    </header>
                    <address>
                        <h3>Personal Information</h3>
                        <ul>
                            <li>Name:  {personalInfo.name}  </li>
                            <li>Alias: {personalInfo.username} </li>
                            <li>Location: {personalInfo.location}  </li>
                        </ul>
                    </address> 
                    <aside>
                        <h3>Hobby</h3>
                        <ul>
                            {personalInfo.hobby.map((e)=><ol> {e} </ol>)}
                        </ul>
                    </aside>
   
                </section>  
                <section id='about-me'>
                    <h1>About me </h1>
                    <article>
                        {personalInfo.aboutMe}
                        <br/>
                        <br/>
                        <div ref={stack} >
                            <h3>Stack</h3>
                            <ul>
                                <li>  Javascript </li>
                                <li>  Nodejs </li>
                                <li>  Reactjs </li>
                                <li>  Python </li>
                                <li>  Linux </li>
                                <li>  AWS </li>
                            </ul>
                           
                            <br />
                            
                        </div>
                    </article>
                </section>
            </Desktop> 
        </main>                
    )
}

export default About