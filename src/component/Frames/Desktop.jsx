import React from 'react'
import "./style.scss";

function Desktop(props) {
    return (
        <div id="dsk">
            <div id="dsk-screen">
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




