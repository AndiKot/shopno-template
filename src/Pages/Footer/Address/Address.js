import React from 'react';

import './Address.css';
import Map from "./Map/Map";

function Address(props) {
    return (
        <div className={"Address"}>
            <div className={"Address__fields"}>
                {props.children}
            </div>
            <Map className={"Map"} />
        </div>
    );
};

export default Address;
