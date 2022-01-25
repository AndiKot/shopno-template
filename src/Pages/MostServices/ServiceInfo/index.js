import React, { useState } from 'react';
import Description from "./Description";
import DetailedDescription from "./DetailedDescription";
import { useStyles } from "./styles";

const ServiceInfo = ({ backgroundImage }) => {
    const [isDetailedDescription, setIsDetailedDescription] = useState(false);
    const {
        serviceInfo,
        serviceInfoImage,
    } = useStyles();

    const clickHandler = () => {
        setIsDetailedDescription(!isDetailedDescription);
    }

    return (
        <div className={serviceInfo}>
            <img
                src={backgroundImage}
                alt="Background"
                className={serviceInfoImage}
            />
            {
                isDetailedDescription
                    ? <DetailedDescription
                        title={"Designing is The CooL LOVE FOR."}
                        text={"Our most popular service is our Virtual Receptionist. " +
                        "We know that sometimes it’s something and you middle most this job was " +
                        "posted less than five minutes ago, and we think it’s a good match for you. " +
                        "If you submit a proposal now, you’ll be one of the first candidates. You" +
                        " may even catch the client while they’re still online."}
                        clickHandler={clickHandler}
                    />
                    : <Description
                        title={"Cool PSD design"}
                        text={"Our most popular service is our we know that sometimes it’s" +
                        " something and you middle most.."}
                        clickHandler={clickHandler}
                    />
            }
        </div>
    );
};

export default ServiceInfo;
