import React from 'react';

import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    Description: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        padding: '57px 83px 57px 65px',
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Raleway, sans-serif',
        color: '#fff',
        cursor: 'default',
    },
    Description__title: {
        fontFamily: 'Merriweather, sans',
        fontSize: '20px',
        fontWeight: 700,
        textTransform: 'uppercase',
        opacity: '0.95',
        cursor: 'default',
    },
    Description__text: {
        marginTop: 27,
        fontSize: '16px',
        lineHeight: '24px',
        opacity: '0.9',
    },
    button: {
        display: 'inline-block',
        position: 'relative',
        width: 200,
        marginTop: 60,
        padding: 0,
        background: 'transparent',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '18px',
        lineHeight: '18px',
        textAlign: 'left',
        textTransform: 'uppercase',
        verticalAlign: 'middle',
        color: 'rgba(255, 255, 255, 0.7)',
        border: 0,
        cursor: 'pointer',
        opacity: '0.9',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translate(140px ,-50%)',
            width: 17,
            borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '4px',
            width: 8,
            height: 8,
            borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
            borderRight: '2px solid rgba(255, 255, 255, 0.7)',
            transform: 'translateX(35px) rotateZ(-45deg)',
        },
    }
});

const Description = ({...props}) => {
    const classes = useStyles();

    return (
        <div className={classes.Description}>
            <h3 className={classes.Description__title}>{props.descriptionTitle}</h3>
            <p className={classes.Description__text}>{props.descriptionText}</p>
            <button className={classes.button}
                    onClick={props.clickHandler}
            >Know more</button>
        </div>
    );
};

export default Description;
