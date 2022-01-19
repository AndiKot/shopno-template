import React from 'react';
import {createUseStyles} from "react-jss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
    DetailedDescription: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '65px 100px 55px 65px',
        top: 0,
        backgroundColor: '#71f5ea',
    },
    DetailedDescription__title: {
        fontFamily: 'Merriweather, sans',
        fontSize: '20px',
        fontWeight: 700,
        textTransform: 'uppercase',
        opacity: '0.83',
    },
    DetailedDescription__text: {
        height: 170,
        overflow: 'hidden',
        marginTop: 27,
        fontSize: '16px',
        lineHeight: '30px',
        opacity: '0.75',
    },
    button: {
        display: 'inline-block',
        position: 'relative',
        width: 18,
        height: 18,
        marginTop: 60,
        padding: 0,
        background: 'transparent',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '20px',
        lineHeight: '18px',
        textAlign: 'left',
        textTransform: 'uppercase',
        verticalAlign: 'middle',
        color: '#8e8e8e',
        border: 0,
        cursor: 'pointer',
        opacity: '0.97',
    }
});

const DetailedDescription = ({...props}) => {
    const classes = useStyles();

    return (
        <div className={classes.DetailedDescription}>
            <h3 className={classes.DetailedDescription__title}>{props.descriptionTitle}</h3>
            <p className={classes.DetailedDescription__text}>{props.descriptionText}</p>
            <button className={classes.button}
                    onClick={props.clickHandler}
            ><FontAwesomeIcon icon={faTimes} /></button>
        </div>
    );
};

export default DetailedDescription;
