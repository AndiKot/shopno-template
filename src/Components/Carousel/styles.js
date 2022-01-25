import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    carousel: {
        width: '100%',
    },
    carouselCardsContainer: {
        overflow: 'hidden',
    },
    carouselTrack: {
        display: 'flex',
        transition: '0.9s ease-in-out',
    },
    carouselNavigation: {
        width: '100%',
        height: 53,
        display: 'flex',
        justifyContent: 'space-between',
    },
    carouselNavigationArrowsContainer: {
        width: '50%',
        height: 11,
        display: 'flex',
        justifyContent: 'center',
    },
    progressItem: {
        display: 'inline-block',
        width: 10,
        height: 10,
        margin: 2,
        backgroundColor: '#d0d0d0',
        borderRadius: 3,
    },
    progressItemActive: {
        backgroundColor: '#71f6eb',
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
