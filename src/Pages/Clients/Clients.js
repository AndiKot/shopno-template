import React from 'react';
import {createUseStyles} from "react-jss";
import Section from "../../Components/Section/Section";

import clientsBackground from "../../img/Logos.jpg";

const useStyles = createUseStyles({
    Clients: {
        marginTop: 119,
        height: 268,
    },
});

const Clients = ({...props}) => {
    const classes = useStyles();
    return (
        <Section className={classes.Clients} style={{backgroundImage: `url(${clientsBackground})`}}>

        </Section>
    );
};

export default Clients;
