import React from 'react';
import { useStyles } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DetailedDescription = ({ title, text, clickHandler }) => {
    const {
        detailedDescription,
        detailedDescriptionTitle,
        detailedDescriptionText,
        button,
    } = useStyles();

    return (
        <div className={detailedDescription}>
            <h3 className={detailedDescriptionTitle}>
                {title}
            </h3>
            <p className={detailedDescriptionText}>
                {text}
            </p>
            <button
                className={button}
                onClick={clickHandler}
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
};

export default DetailedDescription;
