import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    ContactForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 614,
        height: 462,
        padding: '37px 30px',
        backgroundColor: 'rgba(2, 22, 35, 0.71)',
    },
    ContactForm__fieldset: {
        height: 295,
        border: 0,
    },
    ContactForm__input: {
        width: '100%',
        height: 50,
        fontFamily: 'Raleway, sans-serif',
        fontSize: '15px',
        color: '#fff',
        backgroundColor: 'transparent',
        border: 0,
        borderBottom: '1px solid #6c7981',
        outline: 'none',
    },
    ContactForm__textarea: {
        width: '100%',
        height: 125,
        marginTop: 15,
        padding: '10px 0',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '15px',
        color: '#fff',
        resize: 'none',
        backgroundColor: 'transparent',
        border: 0,
        borderBottom: '1px solid #6c7981',
        outline: 'none',
    },
    ContactForm__submit: {
        width: 245,
        height: 54,
        border: 0,
        borderRadius: 2,
        cursor: 'pointer',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        textTransform: 'uppercase',
        backgroundColor: '#6eeee4',
        '&:hover': {
            backgroundColor: '#5fcbc2',
        },
        '&:active': {
            boxShadow: 'inset 0 0 10px rgba(80, 80, 80, 0.35)',
        },
    },
});

const ContactForm = ({...props}) => {
    const classes = useStyles();

    return (
        <form className={classes.ContactForm}
              onSubmit={(event) => {
                  event.preventDefault();

              }}>
            <fieldset className={classes.ContactForm__fieldset}>
                <input className={classes.ContactForm__input} type="text" placeholder="Name*" required />
                <input className={classes.ContactForm__input} type="text" placeholder="Subject*" required />
                <input className={classes.ContactForm__input} type="email" placeholder="E-mail*" required />
                <textarea className={classes.ContactForm__textarea} placeholder="Message*" required/>
            </fieldset>
            <button className={classes.ContactForm__submit} type={"submit"}>Send message</button>
        </form>
    );
};

export default ContactForm;
