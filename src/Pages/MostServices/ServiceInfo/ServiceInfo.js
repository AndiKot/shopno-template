import React from 'react';

import './ServiceInfo.css';

function ServiceInfo(props) {
    const {backgroundImage} = props;

    return (
        <div className={"ServiceInfo"}>
            <img src={backgroundImage} alt="Background" className={"ServiceInfo__image"}/>
            <div className={"ServiceInfo__description"}>Description</div>
            <div className={"ServiceInfo__detailed-description"}>Detailed Description</div>
        </div>
    );
};

export default ServiceInfo;
