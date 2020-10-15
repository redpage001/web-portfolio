import React from "react";

import SaverLife from './../images/SaverLife.png'
import SpotifyMusicSelector from './../images/SpotifyMusicSelector.png'
import adventureMap from './../images/adventureMap.png';
import GameOfLife from './../images/GameOfLife.png';
import ReactBubbles from './../images/ReactBubbles.png';
import YuGiOhCardGenerator from './../images/YuGiOhCardGenerator.png'
import "../scss/Portfolio.scss";

function Portfolio(){
    return(
        <>
            <canvas id="canvas"></canvas>
            <div id="portfolioContainer">
                <h1>Portfolio</h1>
                <div id="portfolioContent">
                    <div className="project">
                        <div className="imageContainer">
                            <img 
                                className="image"
                                src={SaverLife}
                                alt="Image of SaverLife sample page"
                            />
                        </div>
                        <p>SaverLife</p>
                    </div>
                    <div className="project">
                        <div className="imageContainer">
                            <img 
                                className="image"
                                src={SpotifyMusicSelector}
                                alt="Image of Spotify Music Selector sample page"
                            />
                        </div>
                        <p>Spotify Music Selector</p>
                    </div>
                    <div className="project">
                        <div className="imageContainer">
                            <img 
                                className="image"
                                src={adventureMap}
                                alt="Image of Python: Adventure Game map visual"
                            />
                        </div>
                        <p>Python: Adventure Game</p>
                    </div>
                    <div className="project">
                        <div className="imageContainer">
                            <img 
                                className="image"
                                src={GameOfLife}
                                alt="Image of Conway's Game of Life sample page"
                            />
                        </div>
                        <p>Conway's Game of Life</p>
                    </div>
                    <div className="project">
                        <div className="imageContainer">
                            <img 
                                className="image"
                                src={ReactBubbles}
                                alt="Image of React Bubbles sample page"
                            />
                        </div>
                        <p>React Bubbles</p>
                    </div>
                    <div className="project">
                        <div className="imageContainer">
                            <img 
                                className="image"
                                src={YuGiOhCardGenerator}
                                alt="Image of YuGiOh Card Generator sample page"
                            />
                        </div>
                        <p>YuGiOh Card Generator</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;