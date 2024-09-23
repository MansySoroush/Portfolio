import React, { useRef, useEffect, useState } from "react";
import { carouselExpImages, workExperiences } from '../data/defs';
import './Experiences.css';


function Experiences() {
    const carouselItemsRef = useRef(null);
    const [selected, setSelected] = useState(3); // Initially select the 3rd image (index 2)

    const updateCarouselClasses = (selectedIndex) => {
        const items = carouselItemsRef.current.children;
        const totalItems = items.length;

        Array.from(items).forEach((item, index) => {
            item.className = ""; // Reset classes

            if (index === selectedIndex) {
                item.classList.add("selected");
            } else if (index === (selectedIndex - 1 + totalItems) % totalItems) {
                item.classList.add("prev");
            } else if (index === (selectedIndex + 1) % totalItems) {
                item.classList.add("next");
            } else if (index === (selectedIndex - 2 + totalItems) % totalItems) {
                item.classList.add("prevLeftSecond");
            } else if (index === (selectedIndex + 2) % totalItems) {
                item.classList.add("nextRightSecond");
            } else if (index < selectedIndex - 2) {
                item.classList.add("hideLeft");
            } else if (index > selectedIndex + 2) {
                item.classList.add("hideRight");
            }
        });
    };

    const moveToSelected = (direction) => {
        const items = carouselItemsRef.current.children;
        const selectedIndex = Array.from(items).findIndex(item => item.classList.contains("selected"));
        const totalItems = items.length;

        let newSelected;
        if (direction === "next") {
            newSelected = (selectedIndex + 1) % totalItems;
        } else if (direction === "prev") {
            newSelected = (selectedIndex - 1 + totalItems) % totalItems;
        }

        setSelected(newSelected);
        updateCarouselClasses(newSelected);
    };

    const handleClick = (index) => {
        setSelected(index);
        updateCarouselClasses(index);
    };

    useEffect(() => {
        updateCarouselClasses(selected); // Set the 3rd image as the initial selected item
    }, [selected]);

    return (
        <div>
            <section id="exp-showcase" className="gradient-background">
                <div className="container col-xxl-12 align-items-center">
                    <div id="carousel">
                        <div id="carousel-items" className="container align-items-center" ref={carouselItemsRef}>
                            {carouselExpImages.map((image, index) => (
                                <div key={index} onClick={() => handleClick(index)}>
                                    <img src={image} className="exp-carousel-img" alt={`carousel-${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="carousel-buttons" className="container">
                        <button id="prev" type="button" className="btn btn-secondary" onClick={() => moveToSelected("prev")}>Prev</button>
                        <button id="next" type="button" className="btn btn-secondary" onClick={() => moveToSelected("next")}>Next</button>
                    </div>
                </div>
            </section>

            <section id="experiences" className="light_background">
                <div className="container col-xxl-12 px-4 py-5">
                    <h1 className="sedan-regular-italic display-5 fw-bold lh-1 mb-3 custom-text-center">My Work Experiences as a Full-Stack Senior Software Engineer.</h1>
                    <div className="container mt-5">
                        {workExperiences.map((experience, index) => (
                            <div className="card mb-4" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">{experience.company}</h5>
                                    <h6 className="card-subtitle mb-2">{experience.title} ({experience.period})</h6>
                                    <p><strong>Responsibilities:</strong></p>
                                    <ul>
                                        {experience.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                    <p><strong>Projects:</strong></p>
                                    <ul>
                                        {experience.projects.map((project, i) => (
                                            <li key={i}>
                                                <strong>{project.name}:</strong> {project.description} {project.link && (
                                                    <a href={project.link} className="text-body-secondary">
                                                        {project.link}
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experiences;
