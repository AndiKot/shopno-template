import React from 'react';
import {useStyles} from "./styles";
import Map from "./Map";

const Address = ({children}) => {
    const {
        address,
        addressChildren,
    } = useStyles();

    return (
        <div className={address}>
            <address className={addressChildren}>
                {children}
            </address>
            <Map />
        </div>
    );
};

export default Address;
