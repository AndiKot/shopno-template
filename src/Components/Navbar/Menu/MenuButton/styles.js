import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    menuButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 21,
        cursor: 'pointer',
    },
    menuButtonBar: {
        width: 30,
        height: 4,
        backgroundColor: '#606061',
        borderRadius: 2,
        transition: 'all 0.7s ease-in',
    },
    menuButtonBarOpened: {
        '&:nth-of-type(2)': {
            width: 0,
        },
        '&:first-of-type': {
            transform: 'rotateZ(45deg)',
        },
        '&:last-of-type': {
            transform: 'rotateZ(-45deg)',
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
