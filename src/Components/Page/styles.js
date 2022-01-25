import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    page: {
        // position: 'relative',
        width: '100%',
    },
    container: {
        width: 1170,
        margin: '0 auto',
    },
    '@media (max-width: 1199px)': {
        container: {
            width: 960,
        },
    },
    '@media (max-width: 991px)': {
        container: {
            width: 720,
        },
    },
    '@media (max-width: 767px)': {
        container: {
            width: 540,
        },
    },
    '@media (max-width: 575px)': {
        container: {
            width: '100%',
        },
    },
});
