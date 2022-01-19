import React from 'react';
import {createUseStyles} from "react-jss";
import Map from "./Map/Map";

const useStyles = createUseStyles({
    Address: {
        position: 'relative',
        width: 500,
        height: 462,
        padding: '36px 24px 24px 24px',
        backgroundColor: 'rgba(2, 22, 35, 0.71)',
    },
    Address__children: {
        display: 'block',
        width: '100%',
        height: 160,
        marginBottom: 22,
        overflow: 'hidden',
    },
});

const Address = ({...props}) => {
    const classes = useStyles();

    return (
        <div className={classes.Address}>
            <address className={classes.Address__children}>
                {props.children}
            </address>
            <Map />
        </div>
    );
};

export default Address;
