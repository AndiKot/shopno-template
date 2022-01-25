import { createUseStyles } from "react-jss";
import color from 'color';

export const useStyles = createUseStyles({
    menu: {
        width: '100%',
        paddingTop: 64,
        display: 'flex',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        transition: 'width 0.4s ease-in-out',
    },
    menuItems: {
        // height: 21,
        display: 'flex',
        marginRight: 12,
        listStyle: "none",
    },
    menuItem: {
        height: 42,
        margin: 6,
        padding: '0 8px',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '42px',
        color: 'rgba(0, 0, 0, 0.7)',
        textTransform: 'uppercase',
        borderBottom: `1px solid ${color('#71f6eb').alpha(0.5).darken(0.7)}`,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        cursor: 'pointer',
        transition: '0.3s ease-in',
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
            transition: '0.1s ease-in',
            '&:active': {
                transform: 'translateY(-3px)',
            }
        },
        '&:hover': {
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
            backgroundColor: `${color('#71f6eb').alpha(0.5)}`,
            borderBottomWidth: 4,
        },
        // '&:active': {
        //     transform: 'translateY(-3px)',
        // },
    },
    '@media (max-width: 1199px)': {
        menuItem: {
            fontSize: 15,
        },
    },
    '@media (max-width: 991px)': {
        menuItem: {
            fontSize: 14,
        },
    },
    '@media (max-width: 767px)': {

    },
    '@media (max-width: 575px)': {

    },
});
