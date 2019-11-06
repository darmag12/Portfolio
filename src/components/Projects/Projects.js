import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import { Controller, Scene } from 'react-scrollmagic'



const Projects = (props) => {
    return (
        <section id="portfolio" className="project__container">
            <h3 className="project-header">
                    My Projects <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">02.</span>
                </h3>
                <Controller>
                        {props.projectData.map(item => {
                            return <Scene key={item.id} classToggle="anim-projects" triggerElement="#portfolio">
                                    <div className="project">
                                        <Link to={`/portfolio/${item.id}`}>
                                            <img className="project-img" src={item.img} alt={item.alt}/>
                                        </Link>
                                    </div>
                                </Scene> 
                        })}
                </Controller>
            
        </section>
    )
        
    
}

export default Projects;