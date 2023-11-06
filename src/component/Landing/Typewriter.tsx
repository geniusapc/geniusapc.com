import React from 'react';
import TypewriterEffect from 'typewriter-effect';
import { about } from '../../resources';

function Typewriter() {
    return (
        <code className="font-mono">
            <div className="p-2 select-none">
                <span style={{ color: '#17a175' }}>geniusapc :</span>
                <span className="text-orange-400"> ~</span>
                <TypewriterEffect
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(' <br/> $  who am I')
                            .pauseFor(1000)
                            .pasteString('<br/> I am <span style="color:#ed9935">Prince Arthur</span>', null)
                            .pasteString(`<br/> I am a <span style="color:#b31b2d">${about.role}</span>`, null)
                            .pasteString(
                                '<br/><br/><span style="color:#17a175" >  geniusapc :</span> <span style="color: #ed9935"> ~</span>',
                                null
                            )
                            .pauseFor(1000)
                            .typeString(' <br/> $  Technology')
                            .pauseFor(1000)
                            .pasteString('<br/> &nbsp -  <span style="color:#ed9935">Node.js</span>', null)
                            .pasteString('<br/> &nbsp  - <span style="color:#ed9935">React.js</span>', null)
                            .pasteString('<br/> &nbsp -  <span style="color:#ed9935">AWS</span>', null)
                            .pauseFor(2000)
                            .typeString('<br/> $ clear')
                            .pauseFor(2000)
                            .deleteAll(0.1)
                            .start();
                    }}
                />
            </div>
        </code>


    );
}

export default Typewriter;
