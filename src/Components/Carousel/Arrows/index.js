import React from 'react';
import {useStyles } from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Arrows = ({ prevHandler, nextHandler }) => {
    const {
        arrows,
        arrowsButton,
    } = useStyles();

    return (
        <div className={arrows}>
            <button className={`${arrowsButton}`}
                    onClick={prevHandler}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={arrowsButton}
                    onClick={nextHandler}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default Arrows;
