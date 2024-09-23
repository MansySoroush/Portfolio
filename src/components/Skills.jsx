import React from "react";
import { skillsData } from '../data/defs';import './skills.css';  

function Skills() {
    return (
        <section id="skills" className="light-background">
            <div className="container col-xxl-12 px-4 py-5">
                <h1 className="sedan-regular-italic display-5 fw-bold lh-1 mb-3 custom-text-center">
                    My Skills as a Full-Stack Senior Software Engineer
                </h1>
                <div className="row mt-5">
                    {skillsData.map((category, index) => (
                        <div key={index} className="col-md-6">
                            <div className="card skill-card">
                                <div className="card-header">
                                    <img src={category.logo} alt={`${category.category} logo`} className="skill-header-logo" />
                                    {category.category}
                                </div>
                                <ul className="list-group list-group-flush">
                                    {category.skills.map((skill, idx) => (
                                        <li key={idx} className="list-group-item">
                                            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
