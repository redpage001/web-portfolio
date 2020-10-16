import React from "react";
import { 
    LeftCircleFilled,
    RightCircleFilled,
    GithubFilled,
    LinkedinFilled,
    GoogleCircleFilled,
    PhoneFilled,
    MediumCircleFilled,
} from '@ant-design/icons';
import "../scss/Contact.scss";

function scrollLeft(){
    window.scrollBy(500, 0)
    console.log("Scroll")
}

function Contact(){
    return(
        <>
            {/* <canvas id="canvas"></canvas> */}
            <div id="contactContainer">

                <div className="NavBar">
                    <LeftCircleFilled 
                        onClick={scrollLeft}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                    />
                    <div id="header">
                        <h1>Contact</h1>
                    </div>
                    <RightCircleFilled 
                        style={{ color: 'rgba(255, 255, 255, 0)'}}
                    />
                </div>

                <div id="ContentContaier">

                    <div id="Contact">
                        <h3>If you want to reach out and connect, shoot me an email or call me at my personal number:</h3>
                        <div className="link">
                            <GoogleCircleFilled 
                                className="linkIcon"
                                style={{ fontSize: '30px', color: '#ffffff' }}
                            /> 
                            <h3>mdelamora001@gmail.com</h3>
                        </div>
                        
                        <div className="link">
                            <PhoneFilled 
                                className="linkIcon"
                                style={{ fontSize: '30px', color: '#ffffff' }}
                            />
                            <h3>(619)227-6064</h3>
                        </div>
                    </div>

                    <div id="Links">
                        <h3>If you're interested in any of my material or want a better look, check out my social media at the following links down below:</h3>
                        <div className="link">
                            <LinkedinFilled
                                className="linkIcon"
                                style={{ fontSize: '30px', color: '#ffffff' }}
                            />
                            <a href="https://www.linkedin.com/in/mcdelamora/">https://www.linkedin.com/in/mcdelamora/</a>
                        </div>
                        
                        <div className="link">
                            <GithubFilled 
                                className="linkIcon"
                                style={{ fontSize: '30px', color: '#ffffff' }}
                            />
                            <a href="https://github.com/redpage001">https://github.com/redpage001</a>
                        </div>
                        
                        <div className="link">
                            <MediumCircleFilled
                                className="linkIcon"
                                style={{ fontSize: '30px', color: '#ffffff' }}
                            />
                            <a href="https://medium.com/@mdelamora001">https://medium.com/@mdelamora001</a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact;