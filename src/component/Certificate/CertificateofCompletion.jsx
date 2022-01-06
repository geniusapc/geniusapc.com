import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const openExternalLink = (link)=> link &&<a href={link} without rel="noopener noreferrer" target="_blank">
<FontAwesomeIcon  className="icon"   icon={["fas", "external-link-alt"]} />
</a>

export default  function CetificationOfCompletion({name, certificates}){
    const [isOpen, setIsOpen] =  useState(false)

    let icon = isOpen? ["fas", "minus"] :["fas", "plus"]

    
    return(
            <section className="coc" >
                <h5 onClick={()=>setIsOpen(!isOpen)}><span>{name} </span><FontAwesomeIcon  className="icon"   icon={icon} /></h5>
                {isOpen && <ul>
                    {certificates.map((e)=><li key={e.id}>{e.name}{openExternalLink(e.link)}</li>)}
                </ul>}
            </section>
    )
}
