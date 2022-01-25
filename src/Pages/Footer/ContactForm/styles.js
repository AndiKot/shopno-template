import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    contactForm: {
        width: 614,
        height: 462,
        padding: '37px 34px 37px 31px',
        backgroundColor: 'rgba(2, 22, 35, 0.71)',
    },
    contactFormFieldset: {
        border: 0,
    },
    contactFormInput: {
        width: '100%',
        height: 40,
        marginBottom: 19,
        padding: '0 4px 5px 4px',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '15px',
        color: '#fff',
        backgroundColor: 'transparent',
        border: 0,
        borderBottom: '1px solid #6c7981',
        outline: 'none',
        '&:-internal-autofill, &:-internal-autofill:active,': {
            background: 'transparent !important',
        },
    },
    contactFormTextarea: {
        width: '100%',
        height: 117,
        marginBottom: 34,
        padding: '10px 4px',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '15px',
        color: '#fff',
        resize: 'none',
        backgroundColor: 'transparent',
        border: 0,
        borderBottom: '1px solid #6c7981',
        outline: 'none',
    },
    contactFormSubmit: {
        width: 245,
        height: 54,
        border: 0,
        borderRadius: 2,
        cursor: 'pointer',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        fontWeight: 700,
        color: 'rgba(0, 0, 0, 0.7)',
        textTransform: 'uppercase',
        letterSpacing: 2,
        backgroundColor: '#6eeee4',
        '&:hover': {
            backgroundColor: '#5fcbc2',
        },
        '&:active': {
            boxShadow: 'inset 0 0 10px rgba(80, 80, 80, 0.35)',
        },
    },
    '@media (max-width: 1199px)': {
        contactForm: {
            width: 460,
        },
    },
    '@media (max-width: 991px)': {
        contactForm: {
            width: '100%',
        },
    },
    '@media (max-width: 767px)': {

    },
    '@media (max-width: 575px)': {
        contactFormSubmit: {
            width: '100%',
        },
    },
});
