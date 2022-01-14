import React from 'react';

import './ContactForm.css';

function ContactForm(props) {
    return (
        <form className={"ContactForm"}
              onSubmit={(event) => {
                  event.preventDefault();
                  alert("Thanks for your message!");
              }}>
            <input  type="text" placeholder="Name*" required />
            <input  type="text" placeholder="Subject*" required />
            <input  type="email" placeholder="E-mail*" required />
            <textarea placeholder="Message*" required/>
            <button type={"submit"}>Send message</button>
        </form>
    );
};

export default ContactForm;
