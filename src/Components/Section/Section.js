import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    Section: {
        width: 1440,
        margin: '0 auto',
    },
    container: {
        width: 1170,
        margin: '0 auto',
        padding: '0 15px',
    },
});

const Section = ({...props}) => {
    const classes = useStyles();

    return (
        <section className={`${classes.Section} ${props.className}`} style={props.style}>
            <div className={classes.container}>
                {props.children}
            </div>
        </section>
    );
}

export default Section;
