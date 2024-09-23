import React from "react";
import './gallery.css';

function Gallery(props) {
    return (
        <section id="gallery" className="light-background">
            <div className="album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {props.galleryItems.map((item, index) => (
                            <div className="col" key={index}>
                                <div className="card shadow-sm">
                                    {item.type === 'image' ? (
                                        <img src={item.imgSrc} className="gallery-media" alt={item.altText} />
                                    ) : (
                                        <video className="gallery-media" controls>
                                            <source src={item.videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
