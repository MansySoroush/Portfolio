import React from "react";
import { useNavigate } from 'react-router-dom';
import { navPaths } from '../data/defs';

function AboutMe() {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div id="about-me" className="light_background">
            <div className="container col-xxl-12 px-4 py-5">
                <h1 className="sedan-regular-italic display-5 fw-bold lh-1 mb-3 custom-text-center">
                    Whatever you might know about my professional life:
                </h1>
                <div className="row align-items-md-stretch">
                    {["Experienced full-stack Senior Software Engineer with a track record of timely, high-quality project deliveries.",
                        "Proficient in C++, Python, JavaScript, SQL, Linux, and Qt, with strong problem-solving skills and a team-focused mindset.",
                        "Eager to use my software development expertise to contribute to challenging projects and drive business growth."]
                        .map((text, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="about_me_info h-100 p-4 border rounded-3">
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container col-xxl-12 px-4 pb-5">
                <h1 className="sedan-regular-italic display-5 fw-bold lh-1 mb-3 custom-text-center">
                    And as for my personal life:
                </h1>
                <div className="row align-items-md-stretch">
                    {[
                        { text: "When I'm not coding, you can find me tending to my garden. We have a so beautiful heaven in our yard, and spend our free time there. Flowers are restful to look at.", 
                            icon: "../Images/Icons/plant-icon.png", 
                            path: navPaths.NAVIGATE_TO_GARDENING, 
                            label: "Gardening" },
                        { text: "Innovative engineer who thrives on creating beautiful crochet pieces. Crocheting is one of my most important hobbies. Voulez-vous crochet avec moi?", 
                            icon: "../Images/Icons/crochet-icon.png", 
                            path: navPaths.NAVIGATE_TO_CROCHET, 
                            label: "Crochet" },
                        { text: "Cooking delicious foods is my favorite way to unwind after a day of engineering. Cooking well, with love, is an art. Enjoyable homemade foods, marinated by Red Wine.", 
                            icon: "../Images/Icons/chef-icon.png", 
                            path: navPaths.NAVIGATE_TO_COOKERY, 
                            label: "Cookery" }
                    ].map((item, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="about_me_info h-100 p-4 border rounded-3">
                                <p>{item.text}</p>
                                <button 
                                    className="btn btn-outline-secondary" 
                                    onClick={() => handleButtonClick(item.path)}>
                                    <img src={item.icon} alt={`${item.label} icon`} className="img-icon" /> {item.label}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
