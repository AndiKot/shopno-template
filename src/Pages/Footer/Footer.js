import React from 'react';
import Section from "../../Components/Section/Section";
import Address from "./Address/Address";
import './Footer.css';
import ContactForm from "./ContactForm/ContactForm";
import background from "../../img/Footer-Bg.jpg";

function Footer(props) {
    return (
        <Section className={"Footer"} style={{background: `url(${background}) no-repeat`}}>
            <div className={"Footer__contacts"}>
                <ContactForm />
                <Address>
                    <p>Address line 1</p>
                    <p>Address line 2</p>
                    <p>Phone: +38044 999-88-33</p>
                    <p>Fax: +38044 999-88-33</p>
                    <br/>
                    <p>Web: www.web.dev</p>
                    <p>E-mail: mail@web.dev</p>
                </Address>
            </div>
            <div className="social">

            </div>
        </Section>
    );
}

export default Footer;
