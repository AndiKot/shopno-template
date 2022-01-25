import React from 'react';
import { useStyles } from "./styles";

const Description = ({ title, text, clickHandler }) => {
    const {
        description,
        descriptionTitle,
        descriptionText,
        button,
    } = useStyles();

    return (
        <div className={description}>
            <h3 className={descriptionTitle}>
                {title}
            </h3>
            <p className={descriptionText}>
                {text}
            </p>
            <button
                className={button}
                onClick={clickHandler}
            >
                Know more
            </button>
        </div>
    );
};

export default Description;
