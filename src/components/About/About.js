import React from 'react'
import './About.css'
import { Controller, Scene } from 'react-scrollmagic'

const About = () => {
    return(
        <div id="about" className="about__container">
            <Controller>
                <Scene classToggle="anim-about-img" triggerElement="#about" offset="-100px">
            <div className="about-image">
                <img src={require('../resources/myaboutpic.jpg')} alt="about me"></img>
            </div>
                </Scene>
            </Controller>
            <div className="about-text-container">
                <h3 className="about-header">
                    About Me <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">01.</span>
                </h3>
                <Controller>
                <Scene classToggle="anim-about-div" triggerElement="#about" offset="-100px">
                <div className="about-div">
                <h4 className="about-sub-title">
                    Hi there! Once again my name is Daryl Magera and I'm currently working as a Jr Web Developer at Markentum. 
                </h4>
                <p className="about-sub-text">
                I decided to pursue web development by joining a coding boot-camp and in the process I realized it was meant for me because I really enjoy coding, working with a team and building websites especially from scratch. It will be an honor to work for your company or build a project you have in mind. Thanks in advance!
                </p>
                <div className="about-card">
                    <p className="name"><span><i className="fas fa-circle"></i> Name: </span>Daryl Magera</p>
                    <p className="phone"><span><i className="fas fa-circle"></i> No: </span>+1 757 402 0354</p>
                    <p className="age"><span><i className="fas fa-circle"></i> Age: </span>22</p>
                    <p className="location"><span><i className="fas fa-circle"></i> Loc: </span>Florida,USA</p>
                    <i className="fas fa-address-card"></i>
                </div>
                <a href="./MyResume.pdf" download="Resume"><button className="btn btn--about">Download Resume</button></a>
                </div>
                </Scene>
            </Controller>
            </div>
        </div>
    )
}

export default React.memo(About);