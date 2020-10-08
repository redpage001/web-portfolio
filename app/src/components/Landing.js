import React from "react";

import "../scss/Landing.scss";

function Landing(){
    return(
        <>
            <canvas id="canvas"></canvas>
            <div id="landingContent">
                <h1>Manuel De La Mora</h1>
                <h2>Full-Stack Web Portfolio</h2>
                <button>Enter</button>
            </div>
        </>
    )
}

export default Landing;