import React from 'react';
import { useStyles } from "./styles";
import Page from "../../Components/Page";

const Clients = () => {
    const {
        clients,
        clientsBackground,
    } = useStyles();

    return (
        <Page
            id="clients"
            className={clients}
        >
            <div className={clientsBackground} />
        </Page>
    );
};

export default Clients;
