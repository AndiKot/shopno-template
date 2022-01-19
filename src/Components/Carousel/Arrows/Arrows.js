import React from 'react';
import {createUseStyles} from "react-jss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
    Arrows: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    Arrows__button: {
        width: 55,
        height: 55,
        fontSize: '22px',
        lineHeight: '55px',
        color: 'rgba(0, 0, 0, 0.67)',
        backgroundColor: '#ffffff',
        borderRadius: 3,
        border: 0,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#71f6eb',
        },
        '&:active': {
            transform: 'scale(0.9)',
        }
    },
});

const Arrows = ({...props}) => {
    const classes = useStyles();

    return (
        <div className={classes.Arrows}>
            <button className={`${classes.Arrows__button}`}
                    onClick={props.prevHandler}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={classes.Arrows__button}
                    onClick={props.nextHandler}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default Arrows;
