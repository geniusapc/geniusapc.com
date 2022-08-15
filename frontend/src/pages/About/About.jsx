import React from 'react'
import {Link} from "react-router-dom";
import profilePics from "../../assets/img/profilePics.png";
import geniusapc_office2 from "../../assets/img/geniusapc_office2.jpg";
import geniusapc_office1 from "../../assets/img/geniusapc-office1.jpg";
import "./style.scss"
import SocialLinks from "../../component/SocialLink/SocialLink"
import Technologies from "../../component/Technology/Technology"
import CertificateNCertifications from "../../component/Certificate/CertificationList"
import Desktop from "../../component/Frames/Desktop"
import Phone from "../../component/Frames/Phone"
import constants from "../../constants"
import logo from "../../assets/img/logo.svg";



const profileSummaryNav = [
    {
        id:1,
        name:"Contact",
        link:"/contact"
    },
    {
        id:2,
        name:"Certificate",
        link:"#certifications"
    },
    {
        id:3,
        name:"Technologies",
        link:"#technologies"
    }

]


const  About = ()=> {
    const {personalInfo} = constants

    return (
        <main id="about">

            <Phone>
                <section  className='container phone-search'>
                    <figure>
                        <img width="60px" src={logo} alt="geniusapc" />
                        <img className= "roundThumbnail" height = "20px" width="20px" src={profilePics} alt="geniusapc"/> 
                    </figure>
                    <input  defaultValue={"About Prince Arthur"} type="text"  readOnly/>
                    <SocialLinks  />
                </section> 
                <section className="container phone-about-me-summary" >
                    <header>
                        <address>
                            <h3>About me </h3>
                            <div>{personalInfo.role}</div> 
                        </address>
                    </header> 
                    <figure>
                       { [profilePics, geniusapc_office2, geniusapc_office1].map((e)=> <img key={e} height="50px" width="45px" src={e} alt="geniusapc"/>)}    
                    </figure>     
                </section>
                <section id="phone-about-me" className='container' > 
                    <article>
                        {personalInfo.aboutMe}
                    </article>
                </section>  
                <Technologies/>
                <CertificateNCertifications/>
            </Phone>

            <Desktop>
                <section id="dsk-profile-summary">
                    <header className= "container container-summary ">
                        <figure>
                            <img className= "roundThumbnail" width="20px" src={profilePics} alt="geniusapc"/> 
                            <figcaption>{personalInfo.role}</figcaption>
                        </figure>
                        <nav>
                            {profileSummaryNav.map((e)=><Link className="button" to={e.link} key={e.link}>{e.name}</Link> )}
                        </nav>
                    </header>
                    <address className='container container-summary'>  
                        <h2>Personal Information</h2>
                        <ul>
                            <li>Name:  {personalInfo.name}  </li>
                            <li>Alias: {personalInfo.username} </li>
                            <li>Location: {personalInfo.location}  </li>
                        </ul>
                    </address> 
                    <aside className='container'>
                        <h2>Hobby</h2>
                        <ul>
                            {personalInfo.hobby.map((e)=><ol key={e}> {e} </ol>)}
                        </ul>
                    </aside>
                </section>  
                <section id='about-me'>
                    <article>
                        <div className="container">
                            <h1>About me </h1>
                            {personalInfo.aboutMe}
                        </div>                  
                        <Technologies/>
                        <CertificateNCertifications/>
                    </article>
                </section>
            </Desktop> 
        </main>                
    )
}

export default About