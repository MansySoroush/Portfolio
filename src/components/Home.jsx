import React from "react";
import { navPaths } from '../data/defs';

function Home() {
    return (
        <div class="light_background">
            <section id="title" class="gradient-background">
                <div class="container col-xxl-8 px-4 py-1">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-lg-9">
                    <h1 class="sedan-regular display-5 fw-bold lh-1 mb-3">I'm Mansoureh Soroush</h1>
                    <h2 class="sedan-regular display-7 fw-normal lh-1 mb-3">Full-Stack Senior Software Engineer</h2>
                    <p class="lead">Expertise in C++, Python, JavaScript, SQL, Linux, and Qt, etc. 😜</p>
                    <p class="lead">Stay with me for more 🥰</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a class="btn btn-lg btn-secondary px-4 me-md-2" href={navPaths.NAVIGATE_TO_RESUME}>
                        <img src="./Images/Icons/resume-icon.png" alt="resume icon" class="img-icon" /> My Resume</a>
                    </div>
                    </div>
                    <div class="col-7 col-sm-5 col-lg-3">
                    <img src="./Images/Me.png" class="d-block mx-lg-auto img-fluid" alt="My image" width="500" height="700" loading="lazy" />
                    </div>
                </div>
                </div>
            </section>

            <section>
                <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
                            preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%"></rect></svg>
                    <div class="container">
                        <div class="carousel-caption">
                        <h2 class="hd-showcase sedan-regular-italic display-8 lh-1">Coding isn't just my job; it's my passion and my art.</h2>
                        <img src="./Images/Work/Work.png" class="img-showcase d-block mx-lg-auto img-fluid mt-3" alt="work image" loading="lazy" />
                            <p><a class="btn btn-lg btn-secondary" href={navPaths.NAVIGATE_TO_EXPERIENCES}>
                            <img src="./Images/Icons/working-icon.png" alt="working icon" class="img-icon" /> Work Experiences</a></p>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
                            preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%"></rect></svg>
                    <div class="container">
                        <div class="carousel-caption">
                        <h2 class="hd-showcase sedan-regular-italic display-8 lh-1">When I'm not coding, you can find me tending to my garden.</h2>
                        <img src="./Images/Gardening/Garden.png" class="img-showcase d-block mx-lg-auto img-fluid mt-3" alt="garden image" loading="lazy" />
                            <p><a class="btn btn-lg btn-secondary" href={navPaths.NAVIGATE_TO_GARDENING}>
                            <img src="./Images/Icons/plant-icon.png" alt="plant icon" class="img-icon" /> Gardening</a></p>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
                            preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%"></rect></svg>
                    <div class="container">
                        <div class="carousel-caption">
                        <h2 class="hd-showcase sedan-regular-italic display-8 lh-1">Innovative engineer who thrives on  creating beautiful crochet pieces.</h2>
                        <img src="./Images/Crochet/Crochet.png" class="img-showcase d-block mx-lg-auto img-fluid mt-3" alt="crochet image" loading="lazy" />
                            <p><a class="btn btn-lg btn-secondary" href={navPaths.NAVIGATE_TO_CROCHET}>
                            <img src="./Images/Icons/crochet-icon.png" alt="crochet icon" class="img-icon" /> Crochet</a></p>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
                            preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%"></rect></svg>
                    <div class="container">
                        <div class="carousel-caption">
                        <h2 class="hd-showcase sedan-regular-italic display-8 lh-1">Cooking delicious foods is my favorite way to unwind after a day of engineering.</h2>
                        <img src="./Images/Cookery/Cookery.png" class="img-showcase d-block mx-lg-auto img-fluid mt-3" alt="cookery image" loading="lazy" />
                        <p><a class="btn btn-lg btn-secondary" href={navPaths.NAVIGATE_TO_COOKERY}>
                            <img src="./Images/Icons/chef-icon.png" alt="cookery icon" class="img-icon" /> Cookery</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
