import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    address: {
        position: 'relative',
        width: 500,
        height: 462,
        padding: '36px 24px 24px 24px',
        backgroundColor: 'rgba(2, 22, 35, 0.71)',
    },
    addressChildren: {
        display: 'block',
        width: '100%',
        height: 160,
        marginBottom: 22,
        overflow: 'hidden',
    },
    '@media (max-width: 1199px)': {
        address: {
            width: 460,
        },
    },
    '@media (max-width: 991px)': {
        address: {
            width: '100%',
        },
    },
    '@media (max-width: 767px)': {

    },
    '@media (max-width: 575px)': {

    },
});
