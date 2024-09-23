import React from "react";
import Gallery from './Gallery';
import { crochetGalleryItems } from "../data/defs.js"

function CrochetGallery() {
    return (
        <Gallery galleryItems={crochetGalleryItems} />
    );
}

export default CrochetGallery;
