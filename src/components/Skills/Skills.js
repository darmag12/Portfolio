import React from 'react'
import './Skills.css'


const Skills = () => {
    return (
        <section className="skills__container">
            <h3 className="skills-header">
                    My Skills <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">03.</span>
                </h3>
            <div className="skills">
                <div className="skills--tech">
                <i className="fas fa-cogs"> <span className="sub--text"> Technological Skills</span></i>
                    <div className="tech--01">

                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.01 
                        <span className="middle--dots">........</span>
                            HTML 
                            <i className="fab fa-html5"></i>
                        </span>
                        
                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.02 
                        <span className="middle--dots">........</span>
                            CSS 
                            <i className="fab fa-css3-alt"></i>
                        </span>

                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.03 
                        <span className="middle--dots">........</span>
                            JavaScript 
                            <i className="fab fa-js"></i>
                        </span>

                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.04 
                        <span className="middle--dots">........</span>
                            React 
                            <i className="fab fa-react"></i>
                        </span>

                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.05 
                        <span className="middle--dots">........</span>
                            Redux 
                            <i className="fas fa-sitemap"></i>
                        </span>
                        </div>


                        <div className="tech--02">

                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.06 
                        <span className="middle--dots">........</span>
                            Node 
                            <i className="fab fa-node"></i>
                        </span>
                        
                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.07 
                        <span className="middle--dots">........</span>
                            Less 
                            <i className="fab fa-less"></i>
                        </span>

                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.08 
                        <span className="middle--dots">........</span>
                            JavaScript 
                            <i className="fab fa-js"></i>
                        </span>

                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.09 
                        <span className="middle--dots">........</span>
                            git 
                            <i className="fab fa-git-square"></i>
                        </span>

                        <span className="num">
                            <i className="fas fa-circle"></i>
                            3.10 
                        <span className="middle--dots">........</span>
                            gitHub 
                            <i className="fab fa-github"></i>
                        </span>
                        </div>
                    </div>

                <div className="skills--other">
                <i className="fas fa-code-branch"> Other Skills</i>
                <div className="other">
                    <span className="num">
                                <i className="fas fa-circle"></i>
                                3.06 
                            <span className="middle--dots">........</span>
                                Node 
                                <i className="fab fa-node"></i>
                            </span>
                            
                            <span className="num">
                                <i className="fas fa-circle"></i>
                                3.07 
                            <span className="middle--dots">........</span>
                                Less 
                                <i className="fab fa-less"></i>
                            </span>

                            <span className="num">
                                <i className="fas fa-circle"></i>
                                3.08 
                            <span className="middle--dots">........</span>
                                JavaScript 
                                <i className="fab fa-js"></i>
                            </span>

                            <span className="num">
                                <i className="fas fa-circle"></i>
                                3.09 
                            <span className="middle--dots">........</span>
                                git 
                                <i className="fab fa-git-square"></i>
                            </span>

                            <span className="num">
                                <i className="fas fa-circle"></i>
                                3.10 
                            <span className="middle--dots">........</span>
                                gitHub 
                                <i className="fab fa-github"></i>
                            </span>
                </div>
                </div>

            </div>
        </section>
    )
}
export default Skills;

