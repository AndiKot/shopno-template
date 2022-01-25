import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    description: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: '181px 83px 54px 67px',
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Raleway, sans-serif',
        color: '#fff',
        cursor: 'default',
    },
    descriptionTitle: {
        fontFamily: 'Merriweather, sans',
        fontSize: '20px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1.2px',
        opacity: '0.95',
        cursor: 'default',
    },
    descriptionText: {
        marginTop: 0,
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '1.25px',
        opacity: '0.9',
    },
    button: {
        display: 'inline-block',
        position: 'relative',
        width: 200,
        padding: 0,
        background: 'transparent',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '18px',
        lineHeight: '18px',
        textAlign: 'left',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        verticalAlign: 'middle',
        color: 'rgba(255, 255, 255, 0.7)',
        border: 0,
        cursor: 'pointer',
        opacity: '0.9',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translate(136px ,-50%)',
            width: 18,
            borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
            transition: 'transform 0.5s ease-out',
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '4px',
            width: 8,
            height: 8,
            borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
            borderRight: '2px solid rgba(255, 255, 255, 0.7)',
            transform: 'translateX(28px) rotateZ(-45deg)',
            transition: 'transform 0.2s ease-out',
        },
        '&:active:before': {
            transform: 'translate(146px ,-50%)',
        },
        '&:active:after': {
            transform: 'translateX(38px) rotateZ(-45deg)',
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
