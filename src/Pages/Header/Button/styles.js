import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    button: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 137,
        padding: '15px 46px',
        fontSize: '18px',
        lineHeight: '18px',
        fontWeight: 400,
        letterSpacing: 2,
        textTransform: 'uppercase',
        border: '2px solid rgba(0, 0, 0, 0.5)',
        borderRadius: 2,
        cursor: 'pointer',
        transition: 'all 0.2s',
        opacity: '0.75',
        '&:hover': {
            background: '#71f6eb',
        },
        '&:active': {
            boxShadow: 'inset 0 0 10px rgba(80, 80, 80, 0.35)',
        },
    },
});
