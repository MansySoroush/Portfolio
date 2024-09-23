import React from "react";


function ContactMe() {
    return (
        <section id="contact-me" class="light_background">
            <div class="container col-xxl-5 px-4 py-5 custom-text-center">
                <img src="../Images/Me3.jpeg" class="profile-img d-block mx-auto img-fluid" alt="My image" loading="lazy" />
                <p class="sedan-regular-italic-no-weight mb-5">Hello, I'm Mansoureh Soroush.</p>
            
                <h1 class="sedan-regular-italic display-5 fw-bold lh-1 mb-3">Get In Touch</h1>
                <p>If you would like to get in touch, please find my contact details below:</p>
                <ul class="list-unstyled">
                    <li><strong>Email:</strong> mansy.soroush@gmail.com</li>
                    <li><strong>Phone:</strong> +60173700131</li>
                    <li><strong>Address:</strong> Kuala Lumpur, Malaysia</li>
                    <li><strong>Linkedin:</strong> <a class="text-body-secondary" href="https://www.linkedin.com/in/mansoureh-soroush">https://www.linkedin.com/in/mansoureh-soroush</a></li>
                    <li><strong>Github:</strong> <a class="text-body-secondary" href="https://github.com/MansySoroush">https://github.com/MansySoroush</a></li>
                </ul>
            </div>
        </section>
    );
}

export default ContactMe;
