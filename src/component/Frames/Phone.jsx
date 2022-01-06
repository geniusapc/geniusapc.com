import React from 'react'

function Phone(props) {
    return (
        <div id="phone">
            <div className='notch'>
                <div id="speaker"></div>
                <div id="camera" ></div>
            </div>
            <div id="screen">
                {props.children}

            </div>
            <div id="bottom">

            </div>
    </div>
            
    
    )
}

export default Phone
