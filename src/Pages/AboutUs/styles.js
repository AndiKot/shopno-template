import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    aboutUs: {
        // paddingBottom: 113,
        backgroundColor: '#f8fafa',
    },
    aboutUsCarousel: {
        marginTop: 148,
    },
    carouselCardContainer: {
        height: 485,
    },
    carouselCardImageContainer:{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        minWidth: '50%',
    },
    carouselCardImage: {
        display: 'block',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
    },
    carouselCardDescriptionContainer: {
        minWidth: '50%',
        height: '100%',
    },
    descriptionTitle: {

    },
    descriptionText: {

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
