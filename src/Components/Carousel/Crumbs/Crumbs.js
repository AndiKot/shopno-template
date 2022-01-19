import React, {useState, useEffect, useRef} from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    'Crumbs-container': {
        width: '50%',
        height: 11,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    Crumbs__item: {
        width: 10,
        height: 10,
        margin: 2,
        backgroundColor: '#d0d0d0',
        borderRadius: 3,
    },
    'Crumbs__item--active': {
        backgroundColor: '#71f6eb',
    },
});

const Crumbs = ({className, dataIds, crumbsHandler, ...props}) => {
    const parent = useRef(null);
    const classes = useStyles();
    let crumbs;

    useEffect(() => {
        crumbs = Array.from(parent.current.children);
    }, []);

    const createCrumbs = (ids, className) => {
        return ids.map(id => <div key={id}
                                  data-id={id}
                                  data-active={false}
                                  data-crumb={true}
                                  className={className}></div>);
    };

    return (
        <div className={`${classes['Crumbs-container']} ${className}`}
             ref={parent}
             onClick={props.onClick}>
            {createCrumbs(dataIds, classes.Crumbs__item)}
        </div>

    );
};

export default Crumbs;
