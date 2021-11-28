import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import "./style.scss";
import Bash from "../../component/Bash/Bash"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Home() {

  useEffect(() => {
    const me = ()=>{
        var c = document.getElementById("binary-fall");
        var ctx = c.getContext("2d");
        c.width =  window.innerWidth;
        c.height=   window.innerHeight;
        var binary = "01"
        binary = binary.split("");
        var font_size =15;

        var columns = c.width/font_size
        var drops = [];
    
        for(var x=0; x<columns; x++){drops[x]=1}   

        function draw(){
            ctx.fillStyle = "rgba(17,34,64, 0.2)";
            ctx.fillRect(0,0, c.width, c.height);
            ctx.fillStyle="#8892b0";
            ctx.font = font_size + "px arial";
            for (var i =0; i<drops.length; i++){
                var text = binary[Math.floor(Math.random()*binary.length)]
                ctx.fillText(text, i*font_size, drops[i]*font_size)
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i]=0;
                drops[i]++;
            }
        } 
        setInterval(draw, 100)
    }
    me()
}, [])


    const folders =  [
        {id:1,name:"About", tagId:"About-folder", link:"/about"},
        {id:2,name:"Contact", tagId:"Contact-folder", link:"/contact"},
        {id:3,name:"Projects", tagId:"Projects-folder", link:"/Project"}
    ]
    
    return (
        <section id="home">        
            <div id="binary-image"></div> 
            <div id="intro-wrapper" >                  
                <Bash/>
               {folders.map((e)=>(
                 <Link className="icon-wrapper" to={e.link} key={e.id} id={e.tagId}>
                    <FontAwesomeIcon className="folder"  transform={{ rotate: 270 }}  icon='folder-open' size="2x" flip="horizontal"   />
                     <div className="folderName">{e.name}</div>
                </Link>))}
            </div>
            <canvas id="binary-fall"  ></canvas> 
        </section>
    )
}
