import React from 'react';
import { useStyles} from "./styles";

const CarouselCard = ({ image, imageContainerStyles, imageStyles, descriptionStyles, children, className }) => {
    const {
        carouselCard,
    } = useStyles();

    return (
        <div className={`${carouselCard} ${className}`}>
            <div className={`${imageContainerStyles}`}>
                <img
                    className={`${imageStyles}`}
                    src={image}
                    alt={image}
                />
            </div>
            <div className={descriptionStyles} >
                {children}
            </div>
        </div>
    );
};

export default CarouselCard;
