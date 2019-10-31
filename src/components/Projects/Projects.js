import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
// import { pics } from '../resources/myaboutpic.jpg'



const Projects = (props) => {
    return (
        <section id="portfolio" className="project__container">
            <h3 className="project-header">
                    My Projects <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">02.</span>
                </h3>

                {props.projectData.map(item => {
                    return <div className="project" key={item.id}>
                        <Link to={`/portfolio/${item.id}`}>
                            <img className="project-img" src={item.img} alt={item.alt}/>
                        </Link>
                    </div>
                })}
            
        </section>
    )
        
    
}

export default Projects;