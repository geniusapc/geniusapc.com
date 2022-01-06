import React, {useRef, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom'
import {  stacks} from "../../service";


export default function Technologies(){
    const {hash} = useLocation();
    const tech = useRef(null)
    useEffect(()=>{hash==="#technologies" && tech.current.scrollIntoView()}, [hash])

    return(
        <div className="container technologies" ref={tech} >
            <h1>Technologies</h1>
            <ul>
                {stacks.map((e)=><li key={e.name}>  <FontAwesomeIcon  className="icon"   icon={ e.icon} /> {e.name} </li>)}
            </ul>                            
        </div>
    )
}