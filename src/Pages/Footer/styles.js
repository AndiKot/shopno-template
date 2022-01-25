import { createUseStyles } from "react-jss";
import background from "../../img/Footer-Bg.jpg";

export const useStyles = createUseStyles({
    footer: {
        marginTop: 50,
        background: `url(${background}) top center no-repeat`,
    },
    footerContacts: {
        display: 'flex',
        justifyContent: 'space-between',
        rowGap: 20,
        paddingBottom: 122,
    },
    addressFields: {
        display: 'block',
        marginBottom: 6,
        padding: '0 6px',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '15px',
        fontStyle: 'normal',
        color: '#fff',
        textDecoration: 'none',
    },
    footerSocial: {
        maxWidth: '100vw',
        paddingTop: 90,
        paddingBottom: 89,
        backgroundColor: '#262b2e',
    },
    footerSocialTitle: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '16px',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        opacity: '0.8',
    },
    footerSocialCopyright: {
        marginTop: 40,
        fontFamily: 'Raleway, sans-serif',
        fontSize: '16px',
        color: '#fff',
        textAlign: 'center',
        opacity: '0.4',
    },
    footerSocialItems: {
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    footerSocialItem: {
        display: 'block',
        width: 46,
        height: 40,
        margin: '0 4px',
        fontSize: '23px',
        lineHeight: '40px',
        backgroundColor: 'rgba(108, 110, 111, 0.4)',
        color: '#bbb8b9',
        transition: '0.3s',
        '&:hover': {
            backgroundColor: '#6eeee4',
            color: 'rgba(7, 14, 13, 0.95)',
        }
    },
    '@media (max-width: 1199px)': {
        footerContacts: {
            flexWrap: "wrap",
        },
    },
    '@media (max-width: 991px)': {
        footerContacts: {
            paddingBottom: 20,
        },
    },
    '@media (max-width: 767px)': {

    },
    '@media (max-width: 575px)': {

    },
});
