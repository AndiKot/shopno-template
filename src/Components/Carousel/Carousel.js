import React from "react";

import "./Carousel.css"

function Carousel(props) {
    const {isArrows, isCrumbs, items} = props.config;

    return (
        <div className={` ${props.className}`}>
            <div className={"Carousel__item"}>
                <div>IMAGE</div>
                <div>Description</div>
            </div>
        </div>
    );
}

export default Carousel;
