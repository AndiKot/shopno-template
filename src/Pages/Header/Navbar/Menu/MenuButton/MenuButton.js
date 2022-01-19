import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    Menu__button: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 21,
        cursor: 'pointer',
    },
    'Menu__button-bar': {
        width: 30,
        height: 4,
        backgroundColor: '#606061',
        borderRadius: 2,
        transition: 'all 0.7s ease-in',
        /*transform-origin: top left,*/
    },
    'Menu__button-bar--opened:nth-of-type(2)': {
        width: 0,
    },
    'Menu__button-bar--opened:first-of-type': {
    transform: 'rotateZ(45deg)',
    },
    'Menu__button-bar--opened:last-of-type': {
        transform: 'rotateZ(-45deg)',
    },
});

function MenuButton({...props}) {
    const classes = useStyles();

    return (
        <div className={classes.Menu__button} onClick={props.clickHandler}>
            <div className={classes["Menu__button-bar"]}></div>
            <div className={classes["Menu__button-bar"]}></div>
            <div className={classes["Menu__button-bar"]}></div>
        </div>
    );
}

export default MenuButton;
