import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    CarouselCard: {
        minWidth: '100%',
        display: 'flex',
    },
});

const CarouselCard = ({...props}) => {
    const classes = useStyles();

    const {image, imageContainerStyles, imageStyles, descriptionStyles, children} = props;

    return (
        <div className={`${classes.CarouselCard} ${props.className}`}>
            <div className={`${imageContainerStyles}`}>
                <img className={`${imageStyles}`}
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
