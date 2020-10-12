import React from "react";

import "../scss/Portfolio.scss";

function Portfolio(){
    return(
        <>
            <canvas id="canvas"></canvas>
            <div id="portfolioContainer">
                <h1>Portfolio</h1>
                <div id="portfolioContent">
                    <div className="project">
                        <div className="image">

                        </div>
                        <p>title</p>
                    </div>
                    <div className="project">
                        <div className="image">

                        </div>
                        <p>title</p>
                    </div>
                    <div className="project">
                        <div className="image">

                        </div>
                        <p>title</p>
                    </div>
                    <div className="project">
                        <div className="image">

                        </div>
                        <p>title</p>
                    </div>
                    <div className="project">
                        <div className="image">

                        </div>
                        <p>title</p>
                    </div>
                    <div className="project">
                        <div className="image">

                        </div>
                        <p>title</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;