import React from 'react'
import Typewriter from 'typewriter-effect';

function Terminal({ className }) {
    return (
        <div className={`w-[240px] md:w-[500px] h-[250px] md:h-[270px] bg-gray200 rounded ${className}`}>
            <div className="w-full h-4  p-2 flex space-x-1 rounded-t bg-white items-center">
                <div className="w-2 h-2 rounded-full bg-[#fc6858]"></div>
                <div className="w-2 h-2 rounded-full bg-[#fec02f]"></div>
                <div className="w-2 h-2 rounded-full bg-[#2ac43e]"></div>
            </div>
            <div className="p-2 select-none">
                geniusapc :~
                <Typewriter

                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(' who am I')
                            .pauseFor(2000)
                            .pasteString('<br/> \t I am Prince Arthur')
                            .pasteString('<br/> \t I am a fullstack developer')
                            .pasteString('<br/> geniusapc :~ ')
                            .pauseFor(2000)
                            .typeString('clear')
                            .pauseFor(2000)
                            .deleteAll(0.1)
                            .start();
                    }}
                />
            </div>
        </div>
    )
}

export default Terminal