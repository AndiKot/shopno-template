import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    carouselCard: {
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    '@media (max-width: 1199px)': {

    },
    '@media (max-width: 991px)': {

    },
    '@media (max-width: 767px)': {
        carouselCard: {
            flexWrap: "wrap",
        },
    },
    '@media (max-width: 575px)': {

    },
});
