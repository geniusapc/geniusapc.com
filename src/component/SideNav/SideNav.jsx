import React from 'react'
import {Link} from "react-router-dom";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialLink from "../SocialLink/SocialLink"

export default function SideNav({setSideNavIsOpen}) {
  const links = [
    {
      id:1,
      icon:["fas", "home"],
      name:"HOME",
      link:"/"
    },
    {
      id:2,
      icon:["far", "id-card"],
      name:"ABOUT",
      link:"/about"
    },
    {
      id:3,
      icon:["fas", "tasks"],
      name:"PROJECTS",
      link:"/projects"
    },
    {
      id:4,
      icon:["fas", "file-signature"], 
      name:"BLOG",
      link:"/blog"
    },
    {
      id:5,
      icon:["fas", "phone-volume"],
      name:"CONTACT",
      link:"/contact"
    }
  ]
    return (
            <aside id="side-nav">
              <div id="side-nav-left">
                  <FontAwesomeIcon  className="side-nav-arrow"  size="1x"  icon={["fas", "arrow-left"]} />
                  <SocialLink/>
              </div>
              <ul  id= "side-nav-right">
                {links.map((e)=>(                
                  <li key={e.id}> 
                  <Link className="side-nav-link" onClick={()=>setSideNavIsOpen(false)} to={e.link} key={e.id}>
                    <FontAwesomeIcon className="side-nav-link-logo"  size="2x" icon={e.icon} /> <span>{e.name}</span> 
                  </Link>
                  </li>
                ))}
              </ul> 
            </aside>
          );
}
