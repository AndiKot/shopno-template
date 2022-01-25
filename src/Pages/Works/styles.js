import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    works: {
        paddingBottom: 70,
        backgroundColor: '#fff',
    },
    worksGallery: {
        marginTop: 120,
        padding: '0 15px',
    },
    worksGalleryItem: {
        width: 370,
        height: 359,
    },
    '@media (max-width: 1199px)': {

    },
    '@media (max-width: 991px)': {
        works: {
            height: "auto",
            paddingTop: 124,
            paddingBottom: 123,
            backgroundColor: '#fff',
        },
        worksGalleryItem: {
            width: 370,
            height: 359,
            marginBottom: 0,
        },
    },
    '@media (max-width: 767px)': {

    },
    '@media (max-width: 575px)': {

    },
});
