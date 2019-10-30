import React from 'react'
import './About.css'

const About = () => {
    return(
        <div id="about" className="about__container">
            <div className="about-image">
                <img src={require('../resources/myaboutpic.png')} alt="about me"></img>
            </div>
            <div className="about-text-container">
                <h3 className="about-header">
                    About Me <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">01.</span>
                </h3>
                <h4 className="about-sub-title">
                    Hi there! Once again my name is Daryl Magera and I'm currently freelancing as a front-end developer. 
                </h4>
                <p className="about-sub-text">
                {/* As we all know, every journey starts somewhere and mine started around 2017, where by I wanted to start an online shopping store and in order for me to do that, I needed a website. So I went online and looked up how create a website and I came across WordPress. Long story short I launched my first website using WordPress which took me about a week to make. I was so fascinated about that I went to show a friend of mine. Well, he asked me if I made it with HTML, CSS and Javascript, but at the time I had no idea what that was and he had no idea what WordPress was either. So I got curious and started looking into that, and I stumbled upon python in code academy, did a few tutorials but in the process there was a huge turn of events in my life so coding became less of my priorities. To fast forward this,  */}
                
                On March 2019, I decided to pursue web development by joining a coding boot-camp and in the process I realized it was meant for me because I really enjoy coding, working with a team and building website's especially from scratch. It will be an honor to work for your company or build a project you have in mind. Thanks in advance!
                </p>
                <div className="about-card">
                    <p className="name"><span><i className="fas fa-circle"></i> Name: </span>Daryl Magera</p>
                    <p className="phone"><span><i className="fas fa-circle"></i> No: </span>+1 470 778 7877</p>
                    <p className="age"><span><i className="fas fa-circle"></i> Age: </span>21</p>
                    <p className="location"><span><i className="fas fa-circle"></i> Loc: </span>Georgia,USA</p>
                    <i className="fas fa-address-card"></i>
                </div>
                <button className="btn btn--about">Download Resume</button>

            </div>
        </div>
    )
}

export default About;