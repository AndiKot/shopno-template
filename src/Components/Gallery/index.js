import React from 'react';
import { useStyles } from "./styles";

const Gallery = ({ className, children }) => {
    const {
        gallery
    } = useStyles();
    return (
        <div className={`${gallery} ${className}`}>
            {children}
        </div>
    );
};

export default Gallery;
