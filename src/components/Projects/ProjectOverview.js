import React from 'react'
import './ProjectOverview.css'



const ProjectOverview = (props) => {
    let id = props.match.params.projectId
    

    return (
        <>
        <a href="/home/#portfolio"><i className="fas fa-backward btn--back"> Go back to projects</i></a>
        <div className="project__overview-container">
             <h3 className="project__overview-header">
                    Project Overview 
                    {props.projectDetail.map(detail => {
                        return id === detail.id ?
                        <span key={detail.id}>
                        <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">{detail.num}</span>
                        </span>
                        : null
                    })}
                </h3>

                <div className="project__overview-description">
                    {props.projectDetail.map(detail => {
                        return id === detail.id ?
                        <div key={detail.id}>
                        <h4 className="h4--mod">{detail.title}</h4>
                        <br></br>
                        <p className="project__overview-text">
                            {detail.description}
                            <br>
                            </br>
                            <br></br>
                            <strong>{detail.features}</strong>
                        </p>
                        </div>
                        : null
                    })}
                    
                </div>

                <div className="project__overview-gif">
                {props.projectDetail.map(detail => {
                        return id === detail.id ?
                        <div key={detail.id}>
                        <img className="image--mod" src={detail.img} alt={detail.alt}></img>
                        </div>
                        : null
                    })}
                        <button className="btn btn--view">View Site</button>
                        <button className="btn btn--view">View Code</button>
                </div>
        </div>
        </>
    )
}

export default ProjectOverview;
