import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    arrows: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    arrowsButton: {
        width: 55,
        height: 55,
        fontSize: '22px',
        lineHeight: '55px',
        color: 'rgba(0, 0, 0, 0.67)',
        backgroundColor: '#ffffff',
        borderRadius: 3,
        border: 0,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#71f6eb',
        },
        '&:active': {
            transform: 'scale(0.9)',
        },
    },
    '@media (max-width: 1199px)': {

    },
    '@media (max-width: 991px)': {

    },
    '@media (max-width: 767px)': {

    },
    '@media (max-width: 575px)': {

    },
});
