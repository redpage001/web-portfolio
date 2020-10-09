import React from "react";

import "../scss/Profile.scss";
import ProfilePic from './../images/profile.png';

function Profile(){
    return(
        <>
            <canvas id="canvas"></canvas>
            <div id="profileContainer">

                <div id="profileStatement">
                    
                    <img 
                        id="profilePic"
                        src={ProfilePic}
                        alt="Manuel's Profile Picture"
                    />
                    
                    <div id="profileBioContainer">
                        <p>I'm a web developer from Lambda School who's looking to create all kinds of content for everyone that's not only easy to use but are also fun and exciting! I used to be a graphic designer so I have a critical eye for layout and design for what is not only aesthetically appealing but easy to process. With those skills paired with what I learned at Lambda, I know I can create web applications that's exciting to look at and works fluidly with the user in mind.</p>
                    </div>

                </div>
                
                <div id="profileContent">
                    
                    <div className="contentContainer education">

                        <h1 id="educationHeader">EDUCATION</h1>

                        <div className="Category">
                            <div className="educationInfo">
                                <h2>Lambda School | Remote</h2>
                                <h2>February 2020 - Present</h2>
                            </div>
                            <p className="subInfo">Full Stack Web Development and Computer Science</p>
                        </div>

                        <div className="Category">
                            <div className="educationInfo">
                                <h2>Stevens Henager College | Denver, CO</h2>
                                <h2>August 2016</h2>
                            </div>
                            <p className="subInfo">Associate Degree in Applied Science (Graphic Design)</p>
                        </div>
                    
                    </div>

                    <div className="contentContainer skills">
                        
                        <h1 id="skillsHeader">SKILLS</h1>

                        <div className="Category">
                            <h2>PROFESSIONAL SKILLS:</h2>
                            <p>HTML | CSS | Javascript | LESS?SASS | React | React Redux | Jest | React Testing Library | Node JS | Express | SQL | Knex SQLite3 | PostgresSQL | Python</p>
                        </div>

                        <div className="Category">
                            <h2>ADDITIONAL SKILLS:</h2>
                            <p>Adobe Illustrator | Adobe Photoshop/Clip Studio Paint | Adobe InDesign</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile;