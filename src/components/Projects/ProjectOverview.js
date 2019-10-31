import React from 'react'
import './ProjectOverview.css'



const ProjectOverview = () => {
    // console.log(match)
    return (
        <>
        <a href="/home/#portfolio"><i className="fas fa-backward btn--back"> Go back to projects</i></a>
        <div className="project__overview-container">
             <h3 className="project__overview-header">
                    Project Overview 
                    <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">2.5</span>
                </h3>
                <div className="project__overview-description">
                    <h4>Title</h4>
                        <p>
                            project description text goes here asd,hfaknjkeanijncdc wkjikncae wkefgber kqwrfukhkberfbk cugkcn kinkerf ikchguakfurehfourhouvenerluw ielulhfrunrewi eriuhfnlerw iukherfun4wgmcgiyhf ,ALUIHLFH My name is Daryl Magera and I like to code.
                        </p>
                </div>

                <div className="project__overview-gif">
                        <img className="image--width" src={require('../resources/forkify.png')} alt="project-0"></img>
                        <button className="btn btn--view">View Site</button>
                        <button className="btn btn--view">View Code</button>
                </div>
        </div>
        </>
    )
}

export default ProjectOverview;
