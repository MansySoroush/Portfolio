import React from "react";


function Resume() {
    return (
        <div id="embed-resume" class="light_background">
            <div class="container col-xxl-7 px-4 py-5 custom-text-center">
                <h1 class="sedan-regular-italic display-5 fw-bold lh-1 mb-3">Here is my latest Resume in 2024.</h1>
                <div class="pdf-container">
                    <object data="Resume.pdf" type="application/pdf" width="100%" height="100%">
                    <p>Your browser does not support PDFs. Download the PDF to view it: <a href="Resume.pdf">Download PDF</a>.</p>
                    </object>
                </div>
            </div>
        </div>
    );
}

export default Resume;
