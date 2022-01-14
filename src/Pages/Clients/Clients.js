import React from 'react';

import './Clients.css';
import Section from "../../Components/Section/Section";
import clientsBackground from "../../img/Logos.jpg";

function Clients(props) {
    return (
        <Section className={"Clients"} style={{backgroundImage: `url(${clientsBackground})`}}>

        </Section>
    );
};

export default Clients;
