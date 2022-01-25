import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    detailedDescription: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '61px 110px 55px 65px',
        top: 0,
        backgroundColor: '#71f5ea',
    },
    detailedDescriptionTitle: {
        fontFamily: 'Merriweather, sans',
        fontSize: '20px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1.4px',
        opacity: '0.83',
    },
    detailedDescriptionText: {
        height: 170,
        overflow: 'hidden',
        marginTop: 18,
        fontSize: '16px',
        lineHeight: '28px',
        letterSpacing: '-0.27px',
        opacity: '0.75',
    },
    button: {
        display: 'inline-block',
        position: 'relative',
        width: 20,
        height: 20,
        marginTop: 60,
        marginLeft: 5,
        padding: 0,
        background: 'transparent',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'left',
        textTransform: 'uppercase',
        verticalAlign: 'middle',
        color: '#8e8e8e',
        border: 0,
        cursor: 'pointer',
        opacity: '0.97',
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
