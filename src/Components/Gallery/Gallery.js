import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    Gallery: {
        width: 1170,
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        // gap: 15,
        alignItems: 'center',
    },
});

const Gallery = ({...props}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.Gallery} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Gallery;
