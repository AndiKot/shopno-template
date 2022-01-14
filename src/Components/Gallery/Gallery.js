import React from 'react';

import './Gallery.css';

function Gallery(props) {
    return (
        <div className={`Gallery ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Gallery;
