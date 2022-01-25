import React from 'react';
import { useStyles } from "./styles";

const ContactForm = () => {
    const {
        contactForm,
        contactFormFieldset,
        contactFormInput,
        contactFormTextarea,
        contactFormSubmit,
    } = useStyles();

    return (
        <form className={contactForm}
              onSubmit={(event) => {
                  event.preventDefault();

              }}>
            <fieldset className={contactFormFieldset}>
                <input className={contactFormInput} type="text" placeholder="Name*" required />
                <input className={contactFormInput} type="text" placeholder="Subject*" required />
                <input className={contactFormInput} type="email" placeholder="E-mail*" required />
                <textarea className={contactFormTextarea} placeholder="Message*" required/>
            </fieldset>
            <button className={contactFormSubmit} type={"submit"}>Send message</button>
        </form>
    );
};

export default ContactForm;
