import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    memberInfo: {
        display: 'block',
        width: 370,
        height: 440,
        marginTop: 10,
        position: 'relative',
        overflow: 'auto',
        '&:hover $memberInfoDescription': {
            opacity: 1,
        }
    },
    memberInfoDescription: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        opacity: 0,
        position: 'absolute',
        width: 335,
        height: 241,
        margin: 15,
        padding: 39,
        bottom: 0,
        zIndex: 10,
        backgroundColor: '#71f5ea',
        boxShadow: '2px 6px 8px rgba(20, 20, 21, 0.18)',
        transition: 'opacity 0.3s ease-in',
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: 0,
            height: 0,
            top: -42,
            left: 21,
            borderTop: '21px solid transparent',
            borderRight: '11px solid transparent',
            borderBottom: '21px solid #71f5ea',
            borderLeft: '11px solid transparent',
            zIndex: 10,
        },
    },
    memberInfoImage: {
        display: 'flex',
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
