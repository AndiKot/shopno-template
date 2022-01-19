import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    PageTitle: {
        width: '100%',
        textAlign: 'center',
    },
    PageTitle__header: {
        fontSize: 38,
        lineHeight: '38px',
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    PageTitle__description: {
        marginTop: 12,
        fontFamily: 'Merriweather, Times New Roman, serif',
        fontSize: 18,
        lineHeight: '18px',
        fontWeight: 400,
        textTransform: 'uppercase',
    },
});

const PageTitle = ({...props}) => {
    const {title, titleDescription} = props;
    const classes = useStyles();
    return (
        <div className={classes.PageTitle}>
            <h2 className={classes.PageTitle__header}>{title}</h2>
            <p className={classes.PageTitle__description}>{titleDescription}</p>
        </div>
    );
}

export default PageTitle;
