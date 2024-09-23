import React from "react";
import Gallery from './Gallery';
import { cookeryGalleryItems } from "../data/defs.js"

function CookeryGallery() {
    return (
        <Gallery galleryItems={cookeryGalleryItems} />
    );
}

export default CookeryGallery;
