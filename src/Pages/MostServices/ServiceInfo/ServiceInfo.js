import React, {useState} from 'react';
import {createUseStyles} from "react-jss";
import Description from "./Description/Description";
import DetailedDescription from "./DetailedDescription/DetailedDescription";

const useStyles = createUseStyles({
    ServiceInfo: {
        display: 'inline-block',
        marginTop: 10,
        position: 'relative',
        overflow: 'auto',
    },
    ServiceInfo__image: {
        float: 'left',
    },
    ServiceInfo__description: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        padding: '57px 83px 57px 65px',
        top: 0,
        zIndex: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Raleway, sans-serif',
        color: '#fff',
    },
    'ServiceInfo__detailed-description': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '65px 100px 55px 65px',
        top: 0,
        backgroundColor: '#71f5ea',
        zIndex: 10,
    },
});

const ServiceInfo = ({...props}) => {
    const [isDetailedDescription, setIsDetailedDescription] = useState(false);
    const {backgroundImage} = props;
    const classes = useStyles();

    const clickHandler = () => {
        console.log('Toggle detailed description!');
        setIsDetailedDescription(!isDetailedDescription);
    }

    return (
        <div className={classes.ServiceInfo}>
            <img src={backgroundImage} alt="Background" className={classes.ServiceInfo__image}/>
            {
                isDetailedDescription
                    ? <DetailedDescription descriptionTitle={"Designing is The CooL LOVE FOR."}
                                           descriptionText={"Our most popular service is our Virtual Receptionist. " +
                                           "We know that sometimes it’s something and you middle most this job was " +
                                           "posted less than five minutes ago, and we think it’s a good match for you. " +
                                           "If you submit a proposal now, you’ll be one of the first candidates. You" +
                                           " may even catch the client while they’re still online."}
                                           clickHandler={clickHandler} />
                    : <Description descriptionTitle={"Cool PSD design"}
                                   descriptionText={"Our most popular service is our we know that sometimes it’s" +
                                   " something and you middle most.."}
                                   clickHandler={clickHandler}/>
            }
        </div>
    );
};

export default ServiceInfo;
