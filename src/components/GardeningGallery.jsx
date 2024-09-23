import React from "react";
import Gallery from './Gallery';
import { gardenGalleryItems } from "../data/defs.js"

function GardeningGallery() {
    return (
        <Gallery galleryItems={gardenGalleryItems} />
    );
}

export default GardeningGallery;
