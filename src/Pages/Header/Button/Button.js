import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    Button: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 140,
        padding: '18px 46px',
        fontSize: '18px',
        lineHeight: '18px',
        fontWeight: 400,
        letterSpacing: 2,
        textTransform: 'uppercase',
        border: '2px solid #505050',
        borderRadius: 2,
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
            background: '#71f6eb',
        },
        '&:active': {
            boxShadow: 'inset 0 0 10px rgba(80, 80, 80, 0.35)',
        },
    },
});

function Button({children, ...props}) {
    const classes = useStyles();

    return (
        <button className={classes.Button}>{children}</button>
    );
}

export default Button;
