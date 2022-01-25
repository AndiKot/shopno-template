import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    pageTitle: {
        marginTop: 70,
        width: '100%',
        textAlign: 'center',
    },
    pageTitleHeader: {
        // paddingLeft: 20,
        fontSize: 38,
        lineHeight: '38px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 2,
        opacity: '0.9',
    },
    pageTitleSubheader: {
        marginTop: 12,
        fontFamily: 'Merriweather, Times New Roman, serif',
        fontSize: 18,
        lineHeight: '17px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: 1.25,
        opacity: '0.62',
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
