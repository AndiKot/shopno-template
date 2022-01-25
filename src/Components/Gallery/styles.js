import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    gallery: {
        width: '100%',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
        gap: 15,
        alignItems: 'center',
    },
    '@media (max-width: 1199px)': {
    },
    '@media (max-width: 991px)': {
        gallery: {
            // width: 720,
            // justifyContent: 'center',
        },
    },
    '@media (max-width: 767px)': {

    },
    '@media (max-width: 575px)': {

    },
});
